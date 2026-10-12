/* =====================================
   SETTINGS
===================================== */

const correctName = "KoKo";

const correctPassword = "22102000";

let currentPhoto = 0;


/* =====================================
   PHOTOS
===================================== */

const photos = [

    "images/photo1.jpg",
    "images/photo2.jpg",
    "images/photo3.jpg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpg",
    "images/photo7.jpg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg"

];


const captions = [

"Sunlight, green fields, and that warm smile. 🌾✨",

"History in the background, but my eyes are only on you. 🏛️🤎",

"Caught in his own world, but he's still my whole world. 📱❤️",

"Surrounded by art, but you're still the finest masterpiece. 🎨✨",

"My earthly angel with his own pair of wings. 🪽💫",


"High above the city, but you're the best view here. 🏙️☁️",

"Pure happiness looks exactly like this smile. 😁🤍",

"Just a main character energy right here. 📸⚡",


"Cozy mood and my favorite boy. 🌙",

  "So proud of everything you do. Always rooting for you! 💼👏"
];


/* =====================================
   PAGE SWITCH
===================================== */

function showPage(pageId) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(function(page) {

        page.classList.add("hidden");

        page.classList.remove("active");

    });


    const target =
        document.getElementById(pageId);


    if (target) {

        target.classList.remove("hidden");

        target.classList.add("active");

    }

}


/* =====================================
   LOGIN
===================================== */

function login() {

    const name =
        document
        .getElementById("name")
        .value
        .trim();


    const password =
        document
        .getElementById("password")
        .value;


    const error =
        document
        .getElementById("error");


    if (name === "") {

        error.innerHTML =
            "Please enter your name 💗";

        return;

    }


    if (name !== correctName) {

        error.innerHTML =
            "This surprise is not for you 😝";

        return;

    }


    if (password !== correctPassword) {

        error.innerHTML =
            "Wrong password 💔";

        return;

    }


    error.innerHTML = "";


    document
        .getElementById("boyName")
        .innerHTML =
        "Dear " + name + " ❤️";


    document
        .getElementById("finalName")
        .innerHTML =
        name;


    showPage("openingPage");


    setTimeout(function() {

        showPage("birthdayPage");

    }, 3500);

}


/* =====================================
   MAKE A WISH
===================================== */

function makeWish() {

    createConfetti();


    const flame =
        document.querySelector(".flame");


    if (flame) {

        flame.style.animation =
            "none";

        flame.style.opacity =
            "0";

    }


    setTimeout(function() {

        showPage("letterPage");

        typeLetter();

    }, 1800);

}


/* =====================================
   LETTER TYPING
===================================== */

function typeLetter() {

    const message =

        "Happy Birthday to my favorite person. 🎂❤️ " +

        "I hope you always stay happy, healthy, and safe. 🫶🏻 " +

        "May all your dreams and wishes come true. ✨ " +

        "I hope every new day brings you closer to your goals. 🌷" +

        "May you always have the strength to get through every hard time. 🤍 " +

        "I wish you endless happiness, success, and peace. 🍀" +

        "Please always take good care of yourself for me. 🥺❤️ " +

        "I hope you never stop smiling, because your smile means so much to me. 🫶🏻 " +

        "I'm always wishing for the best things to happen in your life. 💫 " +

        "Happy Birthday, my love. I hope this year brings you everything " +

        "your heart deserves. 🎂❤️";


    const element =
        document.getElementById(
            "typedMessage"
        );


    const button =
        document.getElementById(
            "galleryButton"
        );


    if (!element) {
        return;
    }


    element.innerHTML = "";


    if (button) {

        button.classList.add("hidden");

    }


    let index = 0;


    const typing =
        setInterval(function() {

            element.innerHTML +=
                message[index];

            index++;


            if (index >= message.length) {

                clearInterval(typing);


                if (button) {

                    button.classList.remove(
                        "hidden"
                    );

                }

            }

        }, 45);

}


/* =====================================
   GALLERY
===================================== */

function showGallery() {

    currentPhoto = 0;

    showPage("galleryPage");

    updatePhoto();

}


/* =====================================
   UPDATE PHOTO
===================================== */

function updatePhoto() {

    const image =
        document.getElementById(
            "mainPhoto"
        );


    const number =
        document.getElementById(
            "photoNumber"
        );


    const total =
        document.getElementById(
            "totalPhotos"
        );


    const caption =
        document.getElementById(
            "photoCaption"
        );


    if (!image || !number || !caption) {
        return;
    }


    image.src =
        photos[currentPhoto];


    number.innerHTML =
        currentPhoto + 1;


    if (total) {

        total.innerHTML =
            photos.length;

    }


    caption.innerHTML =
        captions[currentPhoto];


    image.style.animation =
        "none";


    setTimeout(function() {

        image.style.animation =
            "photoAppear 0.5s ease";

    }, 10);

}


/* =====================================
   NEXT PHOTO
===================================== */

function nextPhoto() {

    currentPhoto++;


    if (
        currentPhoto >=
        photos.length
    ) {

        currentPhoto = 0;

    }


    updatePhoto();

}


/* =====================================
   PREVIOUS PHOTO
===================================== */

function previousPhoto() {

    currentPhoto--;


    if (currentPhoto < 0) {

        currentPhoto =
            photos.length - 1;

    }


    updatePhoto();

}


/* =====================================
   TIMELINE
===================================== */

function showTimeline() {

    showPage("timelinePage");

}


/* =====================================
   FINAL PAGE
===================================== */

function showFinal() {

    showPage("finalPage");


    createConfetti();


    setTimeout(function() {

        createConfetti();

    }, 1500);


    setTimeout(function() {

        createConfetti();

    }, 3000);

}


/* =====================================
   CONFETTI
===================================== */

function createConfetti() {

    const symbols = [

        "♥️",
        "✦",
        "✧",
        "●",
        "◆"

    ];


    for (
        let i = 0;
        i < 70;
        i++
    ) {

        const confetti =
            document.createElement("div");


        confetti.className =
            "confetti";


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            (
                8 +
                Math.random() * 15
            ) + "px";


        confetti.style.animationDuration =
            (
                2 +
                Math.random() * 3
            ) + "s";


        document
            .body
            .appendChild(confetti);


        setTimeout(function() {

            confetti.remove();

        }, 5000);

    }

}

