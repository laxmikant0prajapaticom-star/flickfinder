from flask import (
    Flask, render_template, jsonify, request,
    redirect, url_for, session, flash
)
import json
import os
import re
import sqlite3

from werkzeug.security import generate_password_hash, check_password_hash

# Flask looks for the "templates" and "static" folders next to this file.
app = Flask(__name__)
app.secret_key = os.environ.get(
    "SECRET_KEY",
    "flickfinder-dev-secret-key-change-before-deployment"
)


# ---------- Database ----------

def get_db():
    conn = sqlite3.connect(os.path.join(app.root_path, "users.db"))
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    conn = get_db()
    conn.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL
        )
    """)
    conn.commit()
    conn.close()


init_db()


# ---------- Movies ----------

def load_movies():
    json_path = os.path.join(app.root_path, "movies.json")
    try:
        with open(json_path, "r", encoding="utf-8") as file:
            movies = json.load(file)
        if isinstance(movies, list):
            return movies
    except (FileNotFoundError, json.JSONDecodeError):
        pass
    return []


@app.route("/api/movies")
def get_movies():
    return jsonify(load_movies())


@app.route("/api/test")
def test_api():
    return jsonify({"message": "FlickFinder Backend Connected!"})


@app.route("/api/session")
def get_session():
    return jsonify({
        "authenticated": bool(session.get("user_id")),
        "name": session.get("user_name")
    })


# ---------- Helpers ----------

def is_valid_email(email):
    return re.match(r"^[^@\s]+@[^@\s]+\.[^@\s]+$", email)


def is_logged_in():
    return bool(session.get("user_id"))


# ---------- Home / Dashboard ----------

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/dashboard")
def dashboard():
    # The home page is the dashboard. Guests are sent to login first.
    if not is_logged_in():
        flash("Please log in to continue.", "error")
        return redirect(url_for("login"))
    return redirect(url_for("home"))


# ---------- Register ----------

@app.route("/register", methods=["GET", "POST"])
def register():

    if is_logged_in():
        return redirect(url_for("home"))

    if request.method == "POST":
        name = request.form.get("name", "").strip()
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")
        confirm_password = request.form.get("confirm_password", "")

        def fail(message):
            flash(message, "error")
            return render_template(
                "register.html", name=name, email=email
            ), 400

        if not name or not email or not password or not confirm_password:
            return fail("Please fill all fields.")

        if not is_valid_email(email):
            return fail("Invalid email address.")

        if password != confirm_password:
            return fail("Passwords do not match.")

        if len(password) < 8:
            return fail("Password must be at least 8 characters.")

        conn = get_db()
        try:
            cursor = conn.execute(
                "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
                (name, email, generate_password_hash(password))
            )
            conn.commit()
            user_id = cursor.lastrowid
        except sqlite3.IntegrityError:
            return fail("This email is already registered.")
        finally:
            conn.close()

        # Log the new user in and send them to the main page.
        session.clear()
        session["user_id"] = user_id
        session["user_name"] = name
        flash("Registration successful! You are now logged in.", "success")
        return redirect(url_for("home"))

    return render_template("register.html")


# ---------- Login ----------

@app.route("/login", methods=["GET", "POST"])
def login():

    if is_logged_in():
        return redirect(url_for("home"))

    if request.method == "POST":
        email = request.form.get("email", "").strip().lower()
        password = request.form.get("password", "")

        if not email or not password:
            flash("Please fill all fields.", "error")
            return render_template("login.html", email=email), 400

        conn = get_db()
        try:
            user = conn.execute(
                "SELECT * FROM users WHERE email = ?", (email,)
            ).fetchone()
        finally:
            conn.close()

        if user and check_password_hash(user["password"], password):
            session.clear()
            session["user_id"] = user["id"]
            session["user_name"] = user["name"]
            flash("Login successful! Welcome back, " + user["name"] + ".",
                  "success")
            return redirect(url_for("home"))

        flash("Invalid email or password.", "error")
        return render_template("login.html", email=email), 401

    return render_template("login.html")


# ---------- Logout ----------

@app.route("/logout")
def logout():
    session.clear()
    flash("You have been logged out.", "success")
    return redirect(url_for("home"))


# ---------- Run ----------

if __name__ == "__main__":
    app.run(debug=True)
