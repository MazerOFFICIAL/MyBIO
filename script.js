'use strict';

const CONFIG = {
    typewriterInterval: 3000,
    typewriterFade: 500,
    secretTgLink: 'aHR0cHM6Ly90Lm1lL3VzZXJuYW1l',
    translations: {
        en: {
            bioBtn: "My Bio", hobbiesBtn: "Hobbies",
            hobbiesTitle: "Hobbies", timePrefix: "My time: ",
            hobbiesText: "I love playing various games and exploring new virtual worlds.",
            greetings: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening", night: "Good night" },
            copied: "Copied!", warning: "Please read the etiquette first!"
        },
        ru: {
            bioBtn: "Биография", hobbiesBtn: "Хобби",
            hobbiesTitle: "Хобби", timePrefix: "Мое время: ",
            hobbiesText: "Обожаю играть в разные игры и изучать виртуальные миры.",
            greetings: { morning: "Доброе утро", afternoon: "Добрый день", evening: "Добрый вечер", night: "Доброй ночи" },
            copied: "Скопировано!", warning: "Пожалуйста, сначала прочтите этикет!"
        },
        es: {
            bioBtn: "Biografía", hobbiesBtn: "Pasatiempos",
            hobbiesTitle: "Pasatiempos", timePrefix: "Mi hora: ",
            hobbiesText: "Me encanta jugar a varios juegos и explorar nuevos mundos.",
            greetings: { morning: "Buenos días", afternoon: "Buenas tardes", evening: "Buenas noches", night: "Buenas noches" },
            copied: "¡Copiado!", warning: "¡Lea la etiqueta primero!"
        },
        fr: {
            bioBtn: "Ma Bio", hobbiesBtn: "Loisirs",
            hobbiesTitle: "Loisirs", timePrefix: "Mon heure: ",
            hobbiesText: "J'aime jouer à divers jeux et explorer de nouveaux mondes.",
            greetings: { morning: "Bon matin", afternoon: "Bon après-midi", evening: "Bonsoir", night: "Bonne nuit" },
            copied: "Copié!", warning: "Veuillez d'abord lire l'étiquette!"
        },
        de: {
            bioBtn: "Meine Bio", hobbiesBtn: "Hobbys",
            hobbiesTitle: "Hobbys", timePrefix: "Meine Zeit: ",
            hobbiesText: "Ich liebe es, verschiedene Spiele zu spielen и Welten zu erkunden.",
            greetings: { morning: "Guten Morgen", afternoon: "Guten Tag", evening: "Guten Abend", night: "Gute Nacht" },
            copied: "Kopiert!", warning: "Bitte lesen Sie zuerst die Etikette!"
        }
    }
};

let currentLang = localStorage.getItem('siteLang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
    initTheme();
    initLang();
    initNavigation();
    initEtiquette();
    initEasterEgg();
    updateTime();
    setInterval(updateTime, 1000);
});

function initCursor() {
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate3d(${e.clientX - 7.5}px, ${e.clientY - 1.5}px, 0)`;
        cursor.style.opacity = '1';
    });
    document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
}

function initTheme() {
    const savedTheme = localStorage.getItem('siteTheme') || 'midnight';
    document.body.className = `theme-${savedTheme}`;
    const btn = document.getElementById('theme-btn');
    const dropdown = document.getElementById('theme-dropdown');

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });

    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const theme = opt.dataset.theme;
            document.body.className = `theme-${theme}`;
            localStorage.setItem('siteTheme', theme);
            dropdown.classList.remove('show');
        });
    });
}

function initLang() {
    const btn = document.getElementById('lang-btn');
    const dropdown = document.getElementById('lang-dropdown');
    btn.textContent = currentLang.toUpperCase();
    applyTranslations();

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('show');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            currentLang = opt.dataset.lang;
            localStorage.setItem('siteLang', currentLang);
            btn.textContent = currentLang.toUpperCase();
            applyTranslations();
            dropdown.classList.remove('show');
        });
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('show');
        document.getElementById('theme-dropdown').classList.remove('show');
    });
}

function initNavigation() {
    const buttons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.target).classList.add('active');
            
            sections.forEach(s => {
                s.style.display = s.classList.contains('active') ? 'block' : 'none';
            });
        });
    });
}

function initEtiquette() {
    const link = document.getElementById('nohello-link');
    const overlay = document.getElementById('nohello-overlay');
    const checkbox = document.getElementById('nohello-checkbox');
    const warning = document.getElementById('nohello-warning');

    link.addEventListener('click', () => {
        overlay.style.display = 'none';
        checkbox.disabled = false;
        warning.textContent = '';
    });

    overlay.addEventListener('click', () => {
        warning.textContent = CONFIG.translations[currentLang].warning;
    });
}

function initEasterEgg() {
    let count = 0;
    const h1 = document.getElementById('mazer-h1');
    const modal = document.getElementById('easter-egg-modal');
    
    h1.addEventListener('click', () => {
        count++;
        if (count === 3) {
            document.getElementById('secret-link').textContent = atob(CONFIG.secretTgLink);
            modal.classList.add('active');
            count = 0;
        }
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

function applyTranslations() {
    const t = CONFIG.translations[currentLang];
    document.getElementById('btn-bio').textContent = t.bioBtn;
    document.getElementById('btn-hobbies').textContent = t.hobbiesBtn;
    document.getElementById('hobbies-title').textContent = t.hobbiesTitle;
    document.getElementById('hobbies-text').textContent = t.hobbiesText;
    updateTime();
}

function updateTime() {
    const t = CONFIG.translations[currentLang];
    const timeDisplay = document.getElementById('time-display');
    const now = new Date();
    timeDisplay.textContent = t.timePrefix + now.toLocaleTimeString();
}
