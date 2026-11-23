# FlickFinder

## Run
    pip install -r requirements.txt
    python app.py
Then open  http://127.0.0.1:5000/   (do NOT open the .html files directly
or through VS Code Live Server - login/register need the Flask server).

## Structure
    app.py            Flask backend (routes, login, register, API)
    movies.json       Movie data served at /api/movies
    users.db          SQLite database (created automatically if missing)
    templates/        index.html, login.html, register.html
    static/           style.css, script.js

## Page flow
    /          main page  ->  Login / Register (or name + Logout when signed in)
    /login     -> success: main page      | link to Register + Back to Home
    /register  -> success: main page      | link to Login + Back to Home
    /logout    -> main page
