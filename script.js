'use strict';

const CONFIG = {
    typewriterInterval: 3000,
    typewriterFade: 500,
    translations: {
        en: {
            bioBtn: "My Bio", hobbiesBtn: "Hobbies",
            hobbiesTitle: "Hobbies",
            timePrefix: "My time now: ",
            hobbiesText: "I love playing various games and exploring new virtual worlds.",
            greetings: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening", night: "Good night" },
            copied: "Copied to clipboard!"
        },
        ru: {
            bioBtn: "Биография", hobbiesBtn: "Хобби",
            hobbiesTitle: "Хобби",
            timePrefix: "Мое время сейчас: ",
            hobbiesText: "Обожаю играть в самые разные игры и исследовать новые виртуальные миры.",
            greetings: { morning: "Доброе утро", afternoon: "Добрый день", evening: "Добрый вечер", night: "Доброй ночи" },
            copied: "Скопировано!"
        },
        es: {
            bioBtn: "Biografía", hobbiesBtn: "Pasatiempos",
            hobbiesTitle: "Pasatiempos",
            timePrefix: "Mi hora ahora: ",
            hobbiesText: "Me encanta jugar a varios juegos y explorar nuevos mundos virtuales.",
            greetings: { morning: "Buenos días", afternoon: "Buenas tardes", evening: "Buenas noches", night: "Buenas noches" },
            copied: "¡Copiado al portapapeles!"
        }
    }
};

let currentLang = localStorage.getItem('siteLang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLang();
    initNavigation();
    updateTime();
    setInterval(updateTime, 1000);
});

function initTheme() {
    const savedTheme = localStorage.getItem('siteTheme') || 'default';
    document.body.className = `theme-${savedTheme}`;
    
    const themeBtn = document.getElementById('theme-btn');
    const themeDropdown = document.getElementById('theme-dropdown');

    themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themeDropdown.classList.toggle('show');
        document.getElementById('lang-dropdown').classList.remove('show');
    });

    document.querySelectorAll('.theme-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const theme = opt.dataset.theme;
            document.body.className = `theme-${theme}`;
            localStorage.setItem('siteTheme', theme);
            themeDropdown.classList.remove('show');
        });
    });

    document.addEventListener('click', () => {
        themeDropdown.classList.remove('show');
    });
}

function initLang() {
    const langBtn = document.getElementById('lang-btn');
    const langDropdown = document.getElementById('lang-dropdown');

    langBtn.textContent = currentLang.toUpperCase();
    applyTranslations();

    langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('show');
        document.getElementById('theme-dropdown').classList.remove('show');
    });

    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            currentLang = opt.dataset.lang;
            localStorage.setItem('siteLang', currentLang);
            langBtn.textContent = currentLang.toUpperCase();
            applyTranslations();
            langDropdown.classList.remove('show');
        });
    });

    document.addEventListener('click', () => {
        langDropdown.classList.remove('show');
    });
}

function initNavigation() {
    const buttons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            sections.forEach(sec => sec.style.display = 'none');
            document.getElementById(btn.dataset.target).style.display = 'block';
        });
    });
}

function applyTranslations() {
    const t = CONFIG.translations[currentLang];
    if (!t) return;

    document.getElementById('btn-bio').textContent = t.bioBtn;
    document.getElementById('btn-hobbies').textContent = t.hobbiesBtn;
    document.getElementById('hobbies-title').textContent = t.hobbiesTitle;
    document.getElementById('hobbies-text').textContent = t.hobbiesText;
    updateTime();
}

function updateTime() {
    const t = CONFIG.translations[currentLang];
    const timeDisplay = document.getElementById('time-display');
    if (!timeDisplay || !t) return;

    const now = new Date();
    timeDisplay.textContent = t.timePrefix + now.toLocaleTimeString(currentLang === 'en' ? 'en-US' : 'ru-RU', { hour12: false });
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}
