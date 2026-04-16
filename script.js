'use strict';

const CONFIG = {
    typewriterInterval: 3000,
    typewriterFade: 500,
    secretTgLink: 'aHR0cHM6Ly90Lm1lL3VzZXJuYW1l',
    translations: {
        en: {
            bioBtn: "My Bio", hobbiesBtn: "My Hobbies",
            hobbiesTitle: "Hobbies", timePrefix: "My time now: ",
            hobbiesText: "I love playing various games and exploring new virtual worlds.",
            greetings: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening", night: "Good night" },
            copied: "Copied!"
        },
        ru: {
            bioBtn: "Биография", hobbiesBtn: "Хобби",
            hobbiesTitle: "Хобби", timePrefix: "Мое время: ",
            hobbiesText: "Обожаю играть в разные игры и изучать виртуальные миры.",
            greetings: { morning: "Доброе утро", afternoon: "Добрый день", evening: "Добрый вечер", night: "Доброй ночи" },
            copied: "Скопировано!"
        },
        es: {
            bioBtn: "Biografía", hobbiesBtn: "Pasatiempos",
            hobbiesTitle: "Pasatiempos", timePrefix: "Mi hora: ",
            hobbiesText: "Me encanta jugar a varios juegos y explorar nuevos mundos.",
            greetings: { morning: "Buenos días", afternoon: "Buenas tardes", evening: "Buenas noches", night: "Buenas noches" },
            copied: "¡Copiado!"
        },
        fr: {
            bioBtn: "Ma Bio", hobbiesBtn: "Mes Loisirs",
            hobbiesTitle: "Loisirs", timePrefix: "Mon heure: ",
            hobbiesText: "J'aime jouer à divers jeux et explorer de nouveaux mondes virtuels.",
            greetings: { morning: "Bon matin", afternoon: "Bon après-midi", evening: "Bonsoir", night: "Bonne nuit" },
            copied: "Copié!"
        },
        de: {
            bioBtn: "Meine Bio", hobbiesBtn: "Hobbys",
            hobbiesTitle: "Hobbys", timePrefix: "Meine Zeit: ",
            hobbiesText: "Ich liebe es, verschiedene Spiele zu spielen и neue virtuelle Welten zu erkunden.",
            greetings: { morning: "Guten Morgen", afternoon: "Guten Tag", evening: "Guten Abend", night: "Gute Nacht" },
            copied: "Kopiert!"
        }
    }
};

let currentLang = localStorage.getItem('siteLang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initTheme();
    initLang();
    initNavigation();
    initEasterEgg();
    updateTime();
    setInterval(updateTime, 1000);
});

function initCursor() {
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
}

function initTheme() {
    const savedTheme = localStorage.getItem('siteTheme') || 'midnight';
    document.body.className = `theme-${savedTheme}`;
    
    document.getElementById('theme-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('theme-dropdown').classList.toggle('show');
    });

    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const theme = opt.dataset.theme;
            document.body.className = `theme-${theme}`;
            localStorage.setItem('siteTheme', theme);
        });
    });
}

function initLang() {
    const langBtn = document.getElementById('lang-btn');
    applyTranslations();

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.getElementById('lang-dropdown').classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            currentLang = opt.dataset.lang;
            localStorage.setItem('siteLang', currentLang);
            langBtn.textContent = currentLang.toUpperCase();
            applyTranslations();
        });
    });

    document.addEventListener('click', () => {
        document.getElementById('lang-dropdown').classList.remove('show');
        document.getElementById('theme-dropdown').classList.remove('show');
    });
}

function initNavigation() {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
            document.getElementById(btn.dataset.target).style.display = 'block';
        });
    });
}

function applyTranslations() {
    const t = CONFIG.translations[currentLang];
    document.getElementById('btn-bio').textContent = t.bioBtn;
    document.getElementById('btn-hobbies').textContent = t.hobbiesBtn;
    document.getElementById('hobbies-title').textContent = t.hobbiesTitle;
    document.getElementById('hobbies-text').textContent = t.hobbiesText;
}

function updateTime() {
    const t = CONFIG.translations[currentLang];
    const now = new Date();
    document.getElementById('time-display').textContent = t.timePrefix + now.toLocaleTimeString();
}

function initEasterEgg() {
    let clicks = 0;
    document.getElementById('mazer-title').addEventListener('click', () => {
        clicks++;
        if (clicks === 5) {
            alert('Easter Egg! TG: ' + atob(CONFIG.secretTgLink));
            clicks = 0;
        }
    });
}
