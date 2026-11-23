const movies = [
    {
        id: 1,
        title: "Inception",
        genre: "Sci-Fi",
        year: 2010,
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        description: "A skilled thief enters people's dreams to steal secrets and faces an extraordinary mission."
    },
    {
        id: 2,
        title: "The Dark Knight",
        genre: "Action",
        year: 2008,
        rating: 9.0,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        description: "Batman faces a dangerous criminal who creates chaos in Gotham City."
    },
    {
        id: 3,
        title: "Interstellar",
        genre: "Sci-Fi",
        year: 2014,
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        description: "A team of explorers travels beyond this galaxy to find a new home for humanity."
    },
    {
        id: 4,
        title: "The Hangover",
        genre: "Comedy",
        year: 2009,
        rating: 7.7,
        poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
        description: "Three friends wake up after a wild night in Las Vegas and try to find their missing friend."
    },
    {
        id: 5,
        title: "Titanic",
        genre: "Romance",
        year: 1997,
        rating: 7.9,
        poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
        description: "A beautiful love story unfolds aboard the legendary Titanic."
    },
    {
        id: 6,
        title: "The Conjuring",
        genre: "Horror",
        year: 2013,
        rating: 7.5,
        poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
        description: "Paranormal investigators help a family facing a mysterious presence."
    },
    {
        id: 7,
        title: "3 Idiots",
        genre: "Comedy",
        year: 2009,
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg",
        description: "Three engineering students discover friendship and learn to follow their passion."
    },
    {
        id: 8,
        title: "Avengers: Endgame",
        genre: "Action",
        year: 2019,
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        description: "The Avengers unite for one final mission to restore the universe."
    },
    {
        id: 9,
        title: "The Notebook",
        genre: "Romance",
        year: 2004,
        rating: 7.8,
        poster: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg",
        description: "Two people from different backgrounds discover a lasting love."
    },
    {
        id: 10,
        title: "The Nun",
        genre: "Horror",
        year: 2018,
        rating: 5.3,
        poster: "https://image.tmdb.org/t/p/w500/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
        description: "A mysterious investigation takes place at an isolated Romanian abbey."
    },
    {
        id: 11,
        title: "The Martian",
        genre: "Sci-Fi",
        year: 2015,
        rating: 8.0,
        poster: "https://image.tmdb.org/t/p/w500/3ndAx3weG6KDkJIRMCi5vXX6Dyb.jpg",
        description: "An astronaut struggles to survive after being stranded on Mars."
    },
    {
        id: 12,
        title: "Jumanji",
        genre: "Adventure",
        year: 2017,
        rating: 6.9,
        poster: "https://image.tmdb.org/t/p/w500/bXrZ5iHBEjH7WMidbUDQ0U2xbmr.jpg",
        description: "Four teenagers enter a mysterious game and must work together."
    },
    {
        id: 13,
        title: "Disco Dancer",
        genre: "Drama",
        year: 1982,
        rating: 6.5,
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1d/Disco_Dancer.jpg",
        description: "A street performer dreams of becoming a famous disco star."
    },
    {
        id: 14,
        title: "Hero",
        genre: "Romance",
        year: 1983,
        rating: 6.8,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/de/Hero1983.jpg",
        description: "A young couple finds love despite difficult circumstances."
    },
    {
        id: 15,
        title: "Mr. India",
        genre: "Sci-Fi",
        year: 1987,
        rating: 7.8,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/Mr._India_%281987_film%29_poster.jpg",
        description: "A man discovers an invisibility device and protects children."
    },
    {
        id: 16,
        title: "Qayamat Se Qayamat Tak",
        genre: "Romance",
        year: 1988,
        rating: 7.5,
        poster: "https://upload.wikimedia.org/wikipedia/en/1/14/Qayamat_Se_Qayamat_Tak.jpg",
        description: "Two young lovers face opposition from their families."
    },
    {
        id: 17,
        title: "Maine Pyar Kiya",
        genre: "Romance",
        year: 1989,
        rating: 7.3,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/96/Maine_Pyar_Kiya.jpg",
        description: "A beautiful story of friendship and first love."
    },
    {
        id: 18,
        title: "Aashiqui",
        genre: "Romance",
        year: 1990,
        rating: 6.3,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/d0/Aashiqui_1.jpg",
        description: "A romantic musical story of two young people."
    },
    {
        id: 19,
        title: "Saajan",
        genre: "Romance",
        year: 1991,
        rating: 7.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/b/ba/Saajan_film_poster.jpg",
        description: "Two friends fall in love with the same woman."
    },
    {
        id: 20,
        title: "Jo Jeeta Wohi Sikandar",
        genre: "Drama",
        year: 1992,
        rating: 8.0,
        poster: "https://upload.wikimedia.org/wikipedia/en/a/ae/Jo_Jeeta_Wohi_Sikandar_poster.jpg",
        description: "A young student prepares for an important cycling competition."
    },
    {
        id: 21,
        title: "Baazigar",
        genre: "Thriller",
        year: 1993,
        rating: 7.6,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Baazigar_1993.jpg",
        description: "A suspenseful story of revenge and secrets."
    },
    {
        id: 22,
        title: "Hum Aapke Hain Koun..!",
        genre: "Romance",
        year: 1994,
        rating: 7.5,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/87/Hum_Aapke_Hain_Koun.._poster.jpg",
        description: "A family celebration filled with love and relationships."
    },
    {
        id: 23,
        title: "Dilwale Dulhania Le Jayenge",
        genre: "Romance",
        year: 1995,
        rating: 8.0,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/80/Dilwale_Dulhania_Le_Jayenge_poster.jpg",
        description: "Raj and Simran discover love during a European trip."
    },
    {
        id: 24,
        title: "Raja Hindustani",
        genre: "Romance",
        year: 1996,
        rating: 6.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/e/ea/Raja_Hindustani_poster.jpg",
        description: "A taxi driver falls in love with a wealthy young woman."
    },
    {
        id: 25,
        title: "Dil To Pagal Hai",
        genre: "Romance",
        year: 1997,
        rating: 7.0,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/9d/Dil_To_Pagal_Hai.jpg",
        description: "A musical story about friendship and finding true love."
    },
    {
        id: 26,
        title: "Kuch Kuch Hota Hai",
        genre: "Romance",
        year: 1998,
        rating: 7.5,
        poster: "https://upload.wikimedia.org/wikipedia/en/0/07/Kuch_Kuch_Hota_Hai_poster.jpg",
        description: "Old friends reunite and discover the meaning of love."
    },
    {
        id: 27,
        title: "Sarfarosh",
        genre: "Action",
        year: 1999,
        rating: 8.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c6/Sarfarosh_poster.jpg",
        description: "An honest police officer investigates a major conspiracy."
    },

    // --- NAYI 50 MOVIES (ID 28 to 77) ---
    {
        id: 28,
        title: "Lagaan",
        genre: "Drama",
        year: 2001,
        rating: 8.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/b/b6/Lagaan.jpg",
        description: "Villagers in British-ruled India stake their future on a game of cricket against arrogant officers."
    },
    {
        id: 29,
        title: "Dil Chahta Hai",
        genre: "Drama",
        year: 2001,
        rating: 8.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/db/Dil_Chahta_Hai.jpg",
        description: "Three inseparable childhood friends navigate love, heartbreak, and adulthood."
    },
    {
        id: 30,
        title: "Hera Pheri",
        genre: "Comedy",
        year: 2000,
        rating: 8.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/a/a5/Hera_Pheri_2000_poster.jpg",
        description: "Three unemployed men get caught in a hilarious ransom call mix-up."
    },
    {
        id: 31,
        title: "Munna Bhai M.B.B.S.",
        genre: "Comedy",
        year: 2003,
        rating: 8.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/4/43/Munna_Bhai_M.B.B.S._poster.jpg",
        description: "A local gangster enrolls in a medical college to fulfill his father's dream."
    },
    {
        id: 32,
        title: "Swades",
        genre: "Drama",
        year: 2004,
        rating: 8.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/85/Swades_poster.jpg",
        description: "A successful NASA scientist returns to an Indian village and rediscovers his roots."
    },
    {
        id: 33,
        title: "Rang De Basanti",
        genre: "Drama",
        year: 2006,
        rating: 8.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/0/08/Rang_De_Basanti_poster.jpg",
        description: "Carefree college friends are awakened to patriotism while acting in a documentary on freedom fighters."
    },
    {
        id: 34,
        title: "Chak De! India",
        genre: "Drama",
        year: 2007,
        rating: 8.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/Chak_De%21_India.jpg",
        description: "A disgraced former hockey player coaches the Indian women's national team to World Cup glory."
    },
    {
        id: 35,
        title: "Taare Zameen Par",
        genre: "Drama",
        year: 2007,
        rating: 8.3,
        poster: "https://upload.wikimedia.org/wikipedia/en/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png",
        description: "An empathetic art teacher helps a dyslexic child discover his hidden creative talent."
    },
    {
        id: 36,
        title: "Jab We Met",
        genre: "Romance",
        year: 2007,
        rating: 7.9,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/9f/Jab_We_Met_Poster.jpg",
        description: "A heartbroken businessman finds a new perspective on life after meeting a lively girl on a train."
    },
    {
        id: 37,
        title: "Zindagi Na Milegi Dobara",
        genre: "Adventure",
        year: 2011,
        rating: 8.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/1/17/Zindagi_Na_Milegi_Dobara.jpg",
        description: "Three friends on a bachelor road trip in Spain confront their deepest fears and mend relationships."
    },
    {
        id: 38,
        title: "Barfi!",
        genre: "Romance",
        year: 2012,
        rating: 8.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/2/2e/Barfi%21_poster.jpg",
        description: "A heartwarming tale of love and friendship between a deaf-mute man and an autistic girl."
    },
    {
        id: 39,
        title: "Gangs of Wasseypur",
        genre: "Action",
        year: 2012,
        rating: 8.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/6/6a/Gangs_of_Wasseypur_poster.jpg",
        description: "A multi-generational clash of power, politics, and vengeance in the coal mafia of Dhanbad."
    },
    {
        id: 40,
        title: "Queen",
        genre: "Comedy",
        year: 2013,
        rating: 8.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/4/45/QueenMoviePoster7thMarch.jpg",
        description: "After her fiancé calls off their wedding, a shy Delhi girl embarks on her honeymoon alone."
    },
    {
        id: 41,
        title: "PK",
        genre: "Comedy",
        year: 2014,
        rating: 8.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/c/c3/PK_poster.jpg",
        description: "An innocent alien stranded on Earth questions human superstitions while searching for his remote."
    },
    {
        id: 42,
        title: "Bajrangi Bhaijaan",
        genre: "Drama",
        year: 2015,
        rating: 8.1,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/dd/Bajrangi_Bhaijaan_Poster.jpg",
        description: "A kind-hearted man risks everything to reunite a mute Pakistani girl with her family across the border."
    },
    {
        id: 43,
        title: "Drishyam",
        genre: "Thriller",
        year: 2015,
        rating: 8.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/8a/Drishyam_2015_film.jpg",
        description: "A cable operator uses his knowledge of movies to protect his family from a murder investigation."
    },
    {
        id: 44,
        title: "Dangal",
        genre: "Drama",
        year: 2016,
        rating: 8.3,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/99/Dangal_Poster.jpg",
        description: "A former wrestler trains his daughters to become world-class champions against societal odds."
    },
    {
        id: 45,
        title: "Andhadhun",
        genre: "Thriller",
        year: 2018,
        rating: 8.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/4/47/Andhadhun_poster.jpg",
        description: "A pianist pretending to be blind becomes entangled in the murder of a former film actor."
    },
    {
        id: 46,
        title: "Tumbbad",
        genre: "Horror",
        year: 2018,
        rating: 8.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/4/41/Tumbbad_poster.jpg",
        description: "A family's greed for a hidden ancestral treasure awakens a terrifying mythological curse."
    },
    {
        id: 47,
        title: "Stree",
        genre: "Horror",
        year: 2018,
        rating: 7.5,
        poster: "https://upload.wikimedia.org/wikipedia/en/4/4f/Stree_-_2018_Movie_Poster.jpg",
        description: "The men of a small town live in fear of a spirit who abducts males during an annual festival."
    },
    {
        id: 48,
        title: "Uri: The Surgical Strike",
        genre: "Action",
        year: 2019,
        rating: 8.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/URI_-_New_poster.jpg",
        description: "Indian Army special forces execute a covert operation in retaliation for a deadly militant attack."
    },
    {
        id: 49,
        title: "Shershaah",
        genre: "Action",
        year: 2021,
        rating: 8.3,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/91/Shershaah_film_poster.jpg",
        description: "The inspiring true story of Kargil war hero Captain Vikram Batra."
    },
    {
        id: 50,
        title: "12th Fail",
        genre: "Drama",
        year: 2023,
        rating: 8.8,
        poster: "https://upload.wikimedia.org/wikipedia/en/f/f2/12th_Fail_poster.jpeg",
        description: "A young man from a humble background overcomes extreme poverty to crack the UPSC exam."
    },
    {
        id: 51,
        title: "Jawan",
        genre: "Action",
        year: 2023,
        rating: 7.0,
        poster: "https://upload.wikimedia.org/wikipedia/en/3/39/Jawan_film_poster.jpg",
        description: "A prison warden teams up with a group of women to fight corruption and right societal wrongs."
    },
    {
        id: 52,
        title: "Baahubali: The Beginning",
        genre: "Action",
        year: 2015,
        rating: 8.0,
        poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg",
        description: "An adventurous young man discovers his royal heritage in the ancient kingdom of Mahishmati."
    },
    {
        id: 53,
        title: "RRR",
        genre: "Action",
        year: 2022,
        rating: 7.8,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
        description: "Two legendary Indian revolutionaries forge an intense friendship while fighting British colonial rule."
    },
    {
        id: 54,
        title: "K.G.F: Chapter 1",
        genre: "Action",
        year: 2018,
        rating: 8.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/c/cc/K.G.F_Chapter_1_poster.jpg",
        description: "A fierce mercenary rises through the ranks of the Kolar Gold Fields to fulfill a promise to his mother."
    },
    {
        id: 55,
        title: "Kantara",
        genre: "Thriller",
        year: 2022,
        rating: 8.2,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/84/Kantara_poster.jpeg",
        description: "A conflict between villagers and a forest officer awakens ancient traditions and divine folklore."
    },
    {
        id: 56,
        title: "The Shawshank Redemption",
        genre: "Drama",
        year: 1994,
        rating: 9.3,
        poster: "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        description: "Two imprisoned men bond over decades, finding solace and eventual redemption through acts of decency."
    },
    {
        id: 57,
        title: "The Godfather",
        genre: "Drama",
        year: 1972,
        rating: 9.2,
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        description: "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son."
    },
    {
        id: 58,
        title: "The Matrix",
        genre: "Sci-Fi",
        year: 1999,
        rating: 8.7,
        poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        description: "A computer hacker learns the shocking truth about reality and joins a rebellion against machines."
    },
    {
        id: 59,
        title: "Forrest Gump",
        genre: "Drama",
        year: 1994,
        rating: 8.8,
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        description: "A kind-hearted man unknowingly influences several defining historical events in 20th-century America."
    },
    {
        id: 60,
        title: "Gladiator",
        genre: "Action",
        year: 2000,
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
        description: "A betrayed Roman general rises as a gladiator to avenge the murder of his family and emperor."
    },
    {
        id: 61,
        title: "Avatar",
        genre: "Sci-Fi",
        year: 2009,
        rating: 7.9,
        poster: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
        description: "A paraplegic Marine on the alien moon Pandora is torn between following orders and protecting a new world."
    },
    {
        id: 62,
        title: "Jurassic Park",
        genre: "Adventure",
        year: 1993,
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
        description: "A wildlife park of cloned dinosaurs turns into a fight for survival when security systems fail."
    },
    {
        id: 63,
        title: "Spider-Man: No Way Home",
        genre: "Action",
        year: 2021,
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
        description: "Peter Parker asks Doctor Strange for help, accidentally opening the multiverse to dangerous foes."
    },
    {
        id: 64,
        title: "Joker",
        genre: "Thriller",
        year: 2019,
        rating: 8.4,
        poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        description: "A disregarded stand-up comedian in Gotham City descends into madness and sparks a violent revolution."
    },
    {
        id: 65,
        title: "Parasite",
        genre: "Thriller",
        year: 2019,
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        description: "A struggling family schemes to become employed by a wealthy household, leading to unexpected chaos."
    },
    {
        id: 66,
        title: "Dune",
        genre: "Sci-Fi",
        year: 2021,
        rating: 8.0,
        poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
        description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset."
    },
    {
        id: 67,
        title: "Oppenheimer",
        genre: "Drama",
        year: 2023,
        rating: 8.3,
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        description: "The story of American scientist J. Robert Oppenheimer and his role in developing the atomic bomb."
    },
    {
        id: 68,
        title: "Shutter Island",
        genre: "Thriller",
        year: 2010,
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
        description: "A U.S. Marshal investigates the disappearance of a patient from a hospital for the criminally insane."
    },
    {
        id: 69,
        title: "The Prestige",
        genre: "Thriller",
        year: 2006,
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/bdN3gXuIZYaJP7ftKK2sU0nPtEA.jpg",
        description: "Two rival stage magicians in Victorian London become obsessed with creating the ultimate illusion."
    },
    {
        id: 70,
        title: "Pirates of the Caribbean: The Curse of the Black Pearl",
        genre: "Adventure",
        year: 2003,
        rating: 8.1,
        poster: "https://image.tmdb.org/t/p/w500/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
        description: "Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love."
    },
    {
        id: 71,
        title: "John Wick",
        genre: "Action",
        year: 2014,
        rating: 7.4,
        poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
        description: "An ex-hitman comes out of retirement to track down the gangsters who took everything from him."
    },
    {
        id: 72,
        title: "A Quiet Place",
        genre: "Horror",
        year: 2018,
        rating: 7.5,
        poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
        description: "A family must live in complete silence to hide from blind monsters that hunt by sound."
    },
    {
        id: 73,
        title: "It",
        genre: "Horror",
        year: 2017,
        rating: 7.3,
        poster: "https://image.tmdb.org/t/p/w500/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
        description: "A group of bullied kids band together to destroy a shape-shifting monster disguised as a clown."
    },
    {
        id: 74,
        title: "La La Land",
        genre: "Romance",
        year: 2016,
        rating: 8.0,
        poster: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        description: "A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles."
    },
    {
        id: 75,
        title: "The Lion King",
        genre: "Adventure",
        year: 1994,
        rating: 8.5,
        poster: "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
        description: "A young lion prince flees his kingdom after the murder of his father, only to learn his true destiny."
    },
    {
        id: 76,
        title: "Deadpool",
        genre: "Comedy",
        year: 2016,
        rating: 8.0,
        poster: "https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
        description: "A wisecracking mercenary gets accelerated healing powers and hunts down the man who nearly ruined his life."
    },
    {
        id: 77,
        title: "Top Gun: Maverick",
        genre: "Action",
        year: 2022,
        rating: 8.2,
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
        description: "After thirty years of service, Maverick trains a detachment of Top Gun graduates for a specialized mission."
    }
];

let selectedGenre = "All";
let currentMovies = [...movies];

let favorites = JSON.parse(localStorage.getItem("cineFavorites")) || [];
const movieGrid = document.getElementById("movieGrid");
const favoriteGrid = document.getElementById("favoriteGrid");
const searchInput = document.getElementById("searchInput");
const movieHeading = document.getElementById("movieHeading");
const modal = document.getElementById("movieModal");
const modalDetails = document.getElementById("modalDetails");

// Display movies
function displayMovies(movieList) {
    currentMovies = movieList;

    if (movieList.length === 0) {
        movieGrid.innerHTML =
            '<p class="empty-message">No movies found. Try another search!</p>';
        return;
    }

    movieGrid.innerHTML = movieList.map(movie => `
        <div class="movie-card">
            <img src="${movie.poster}"
                 alt="${movie.title} poster"
                 onerror="this.src='https://placehold.co/400x600/202028/ffffff?text=Movie+Poster'">

            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>🎭 ${movie.genre} | ${movie.year}</p>
                <p>⭐ ${movie.rating}/10</p>

                <div class="movie-actions">
                    <button onclick="showDetails(${movie.id})">
                        Details
                    </button>

                    <button onclick="toggleFavorite(${movie.id})">
                        ${favorites.includes(movie.id) ? "❤️ Saved" : "♡ Favorite"}
                    </button>
                </div>
            </div>
        </div>
    `).join("");
}

// Genre filter
document.querySelectorAll(".genre-btn").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".genre-btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");
        selectedGenre = button.dataset.genre;

        const filtered = selectedGenre === "All"
            ? movies
            : movies.filter(movie => movie.genre === selectedGenre);

        movieHeading.textContent = selectedGenre === "All"
            ? "Popular Movies"
            : selectedGenre + " Movies";

        displayMovies(filtered);
    });
});

// Search movies
function searchMovies() {
    const query = searchInput.value.trim().toLowerCase();

    const results = movies.filter(movie => {
        const matchesName = movie.title.toLowerCase().includes(query);
        const matchesGenre = selectedGenre === "All" ||
            movie.genre === selectedGenre;

        return matchesName && matchesGenre;
    });

    movieHeading.textContent = "Search Results";
    displayMovies(results);
}

document.getElementById("searchBtn").addEventListener("click", searchMovies);

searchInput.addEventListener("input", searchMovies);

// Recommendation
document.getElementById("recommendBtn").addEventListener("click", () => {
    let recommendations = selectedGenre === "All"
        ? [...movies]
        : movies.filter(movie => movie.genre === selectedGenre);

    recommendations.sort((a, b) => b.rating - a.rating);

    movieHeading.textContent = "Recommended For You ⭐";
    displayMovies(recommendations.slice(0, 6));

    document.querySelector(".movies-section").scrollIntoView({
        behavior: "smooth"
    });
});

// Favourite movies
function toggleFavorite(id) {
    if (favorites.includes(id)) {
        favorites = favorites.filter(movieId => movieId !== id);
    } else {
        favorites.push(id);
    }

    localStorage.setItem("cineFavorites", JSON.stringify(favorites));

    displayMovies(currentMovies);
    displayFavorites();
}

function displayFavorites() {
    const favoriteMovies = movies.filter(movie =>
        favorites.includes(movie.id)
    );

    if (favoriteMovies.length === 0) {
        favoriteGrid.innerHTML =
            '<p class="empty-message">Your favourite movies will appear here.</p>';
        return;
    }

    favoriteGrid.innerHTML = favoriteMovies.map(movie => `
        <div class="movie-card">
            <img src="${movie.poster}" alt="${movie.title}"
                 onerror="this.src='https://placehold.co/400x600/202028/ffffff?text=Movie+Poster'">
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>⭐ ${movie.rating}/10</p>
                <div class="movie-actions">
                    <button onclick="showDetails(${movie.id})">Details</button>
                    <button onclick="toggleFavorite(${movie.id})">Remove ❤️</button>
                </div>
            </div>
        </div>
    `).join("");
}

// Movie details
function showDetails(id) {
    const movie = movies.find(item => item.id === id);

    modalDetails.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}"
             style="width:120px;border-radius:8px;margin-bottom:15px;">
        <h2>${movie.title}</h2>
        <p style="margin:12px 0;color:#e50914;">
            ${movie.genre} | ${movie.year} | ⭐ ${movie.rating}/10
        </p>
        <p style="color:#cccccc;line-height:1.7;">
            ${movie.description}
        </p>
    `;

    modal.style.display = "flex";
}

document.getElementById("closeModal").addEventListener("click", () => {
    modal.style.display = "none";
});

modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Initial page loading
displayMovies(movies);
displayFavorites();