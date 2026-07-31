const birthday = new Date("August 1, 2026 00:00:00").getTime();

const countdown = document.getElementById("countdown");
const birthdayMessage = document.getElementById("birthdayMessage");
const birthdayContent = document.getElementById("birthdayContent");

let confettiPlayed = false;

function updateCountdown() {

    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {

        countdown.style.display = "none";
        birthdayMessage.style.display = "block";
        birthdayContent.style.display = "block";

        if (!confettiPlayed) {
            confetti({
                particleCount: 300,
                spread: 120,
                origin: { y: 0.6 }
            });

            confettiPlayed = true;
        }

        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

updateCountdown();

setInterval(updateCountdown, 1000);

const photos = [
    "aisha1.jpg",
    "aisha2.jpg",
    "aisha3.jpg",
    "aisha4.jpg",
    "aisha5.jpg",
    "aisha6.jpg",
    "aisha7.jpg",
    "aisha8.jpg"
];

const compliments = [
    "The most beautiful girl in my world. ❤️",
    "Your smile brightens every one of my days. ✨",
    "How are you this gorgeous? 😍",
    "Every picture of you steals my heart. 💖",
    "You make my world a better place. 🌸",
    "I could look at you forever. 🥹",
    "You're my favorite person. ❤️",
    "Happy Birthday to my princess. 👑🎂"
];

let currentPhoto = 0;

function showPhoto() {

    const gallery = document.getElementById("gallery");

    gallery.style.opacity = "0";

    setTimeout(() => {

        gallery.src = photos[currentPhoto];

        document.getElementById("compliment").innerHTML = compliments[currentPhoto];

        document.getElementById("counter").innerHTML =
            (currentPhoto + 1) + " / " + photos.length;

        gallery.style.opacity = "1";

    }, 300);
}

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto();
}

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    showPhoto();
}
const letter = `
Happy Birthday, Aisha. ❤️✨

Or should I say... Happy Birthday to my MommyPrincessBabe. 😂❤️

It's crazy how life works sometimes. If someone had told me back in SS1 that the girl I was asking for change from would one day become my girlfriend, I probably would've laughed.

I still remember having that tiny crush on you. I admired you so much, but I was too scared to do anything because I didn't want to get rejected. Life went on, and I ended up dating someone else. But after that relationship ended, I realized something... my feelings for you never really disappeared.

Then came that day in school when we didn't have classes and everyone was just playing games. I kept stealing glances at you, thinking I was being smooth, but I think you already noticed. 😂 Then, out of nowhere, Seyi shouted that I liked you. I honestly wanted the ground to open up and swallow me. You thought he was joking... until I told you myself.

Looking back now, I'm so glad I did.

Because if I hadn't, I might never have had the chance to call you mine.

And now, here we are. Somehow, a year and a half later, we're celebrating your second birthday together. That's something I'll always be grateful for.

One of my favorite memories with you will always be our first kiss.

And you know another memory that always makes me laugh? The day I asked what I should call you. You said, "Mommy... or Princess... or Babe." Instead of choosing one like a normal person, I combined all three and somehow MommyPrincessBabe was born. 😂❤️

Aisha, I honestly don't think I could list everything I love about you because I'd probably still be writing by your next birthday.

The truth is, I love everything about you.

Thank you for choosing me.

Thank you for every conversation, every laugh, every memory, and every moment we've shared.

You've made my life brighter in more ways than you probably realize.

I know we only have one video together right now, but to me, that one video is priceless.

As you turn 17, I pray this new year of your life is filled with happiness, peace, good health, success, and endless reasons to smile.

Happy 17th Birthday, my love. ❤️✨

Forever yours,

Your sexy gorilla 😼😂❤️
`;

let index = 0;

function startLetter() {
    index = 0;
    typeLetter();
}

function typeLetter() {

    const letterBox = document.getElementById("letter");

    if (index === 0) {
        letterBox.innerHTML = "";
    }

    if (index < letter.length) {

        letterBox.innerHTML =
            letter.substring(0, index + 1) +
            '<span class="cursor">|</span>';

        index++;

        setTimeout(typeLetter, 50);

    } else {

        letterBox.innerHTML = letter;

    }
}

function openGift() {

    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("website").style.display = "block";

    const music = document.getElementById("bgMusic");

    music.volume = 0.15;
    music.play();

}
function openImage(src) {
    document.getElementById("imageViewer").style.display = "flex";
    document.getElementById("fullImage").src = src;
}

function closeImage() {
    document.getElementById("imageViewer").style.display = "none";
}

const hearts = document.querySelector(".hearts");

function createHeart() {

    if (!hearts) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = (Math.random() * 3 + 5) + "s";
    heart.style.fontSize = (Math.random() * 15 + 15) + "px";

    hearts.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);

const fadeElements = document.querySelectorAll(".fade");

function showOnScroll() {

    fadeElements.forEach(element => {

        const top = element.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (top < trigger) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", showOnScroll);

showOnScroll();

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (!topBtn) return;

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

function scrollToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}