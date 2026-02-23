'use strict';

const CONFIG = {
    typewriterInterval: 3000,
    typewriterFade: 500,
    secretTgLink: 'aHR0cHM6Ly90Lm1lL3VzZXJuYW1l',
    translations: {
        en: {
            bioBtn: "My Bio", hobbiesBtn: "My Hobbies",
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
            copied: "Скопировано в буфер обмена!"
        },
        es: {
            bioBtn: "Biografía", hobbiesBtn: "Pasatiempos",
            hobbiesTitle: "Pasatiempos",
                timePrefix: "Mi hora ahora: ",
            hobbiesText: "Me encanta jugar a varios juegos y explorar nuevos mundos virtuales.",
            greetings: { morning: "Buenos días", afternoon: "Buenas tardes", evening: "Buenas noches", night: "Buenas noches" },
            copied: "¡Copiado al portapapeles!"
        },
        fr: {
            bioBtn: "Biographie", hobbiesBtn: "Loisirs",
            hobbiesTitle: "Loisirs",
                timePrefix: "Mon heure maintenant : ",
            hobbiesText: "J'adore jouer à divers jeux et explorer de nouveaux mondes virtuels.",
            greetings: { morning: "Bonjour", afternoon: "Bon après-midi", evening: "Bonsoir", night: "Bonne nuit" },
            copied: "Copié dans le presse-papiers !"
        },
        de: {
            bioBtn: "Biografie", hobbiesBtn: "Hobbys",
            hobbiesTitle: "Hobbys",
                timePrefix: "Meine Zeit jetzt: ",
            hobbiesText: "Ich liebe es, verschiedene Spiele zu spielen und neue virtuelle Welten zu erkunden.",
            greetings: { morning: "Guten Morgen", afternoon: "Guten Tag", evening: "Guten Abend", night: "Gute Nacht" },
            copied: "In die Zwischenablage kopiert!"
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = localStorage.getItem('siteLang') || 'en';
    let currentTheme = localStorage.getItem('siteTheme') || 'midnight';
    let typewriterTimeout;

    initTheme();
    initLanguage();
    initTime();
    initNavigation();
    initCursor();
    initMazerEasterEgg();

    function initTime() {
        const timeEl = document.getElementById('local-time');
        if (!timeEl) return;

        function update() {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-GB', {
                timeZone: 'Europe/Warsaw',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            });
            
            const t = CONFIG.translations[currentLang] || CONFIG.translations['en'];
            timeEl.textContent = `${t.timePrefix}${timeString} (PL)`;
        }

        update();
        setInterval(update, 1000);
    }

    function initNavigation() {
        document.addEventListener('click', (e) => {
            const btn = e.target.closest('[data-section]');
            
            if (btn) {
                e.preventDefault();
                const sectionId = btn.dataset.section;
                
                document.querySelectorAll('.content-section').forEach(sec => {
                    sec.classList.remove('active');
                });

                const target = document.getElementById(sectionId);
                if (target) {
                    target.classList.add('active');
                }

                const sidebar = document.getElementById('sidebar');
                const toggle = document.getElementById('menu-toggle');
                if (sidebar) sidebar.classList.remove('active');
                if (toggle) toggle.classList.remove('active');
            }

            const langDropdown = document.getElementById('lang-dropdown');
            const langBtn = document.getElementById('lang-btn');
            if (langDropdown && langDropdown.classList.contains('active') && !langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
                langDropdown.classList.remove('active');
            }

            const themeDropdown = document.getElementById('theme-dropdown');
            const themeBtn = document.getElementById('theme-btn');
            if (themeDropdown && themeDropdown.classList.contains('active') && !themeDropdown.contains(e.target) && !themeBtn.contains(e.target)) {
                themeDropdown.classList.remove('active');
            }

            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }

            const sidebar = document.getElementById('sidebar');
            const toggle = document.getElementById('menu-toggle');
            if (sidebar && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
                sidebar.classList.remove('active');
                toggle.classList.remove('active');
            }
        });

        const toggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        
        if (toggle && sidebar) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggle.classList.toggle('active');
                sidebar.classList.toggle('active');
            });
        }
        
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth > 768 && e.clientX < 20) {
                if (sidebar && !sidebar.classList.contains('active')) {
                    sidebar.classList.add('active');
                    if (toggle) toggle.classList.add('active');
                }
            }
        });
    }

    function initLanguage() {
        applyLanguage(currentLang);

        const btn = document.getElementById('lang-btn');
        const dropdown = document.getElementById('lang-dropdown');

        if (btn && dropdown) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('active');
                const themeDrop = document.getElementById('theme-dropdown');
                if (themeDrop) themeDrop.classList.remove('active');
            });

            dropdown.addEventListener('click', (e) => {
                const opt = e.target.closest('.lang-option');
                if (opt) {
                    applyLanguage(opt.dataset.lang);
                    dropdown.classList.remove('active');
                }
            });
        }
    }

    function applyLanguage(lang) {
        document.body.classList.add('lang-transition');

        setTimeout(() => {
            currentLang = lang;
            localStorage.setItem('siteLang', lang);
            document.documentElement.lang = lang;

            const t = CONFIG.translations[lang] || CONFIG.translations['en'];
            const btn = document.getElementById('lang-btn');
            if (btn) btn.textContent = lang.toUpperCase();

            const map = {
                '[data-section="bio"]': 'bioBtn',
                '[data-section="hobbies"]': 'hobbiesBtn',
                '#hobbies h1': 'hobbiesTitle',
                '#hobbies-text': 'hobbiesText',
            };

            for (const [selector, val] of Object.entries(map)) {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    if (typeof val === 'string') {
                        if (t[val]) el.textContent = t[val];
                    } else {
                        if (t[val.k]) el[val.attr] = t[val.k];
                    }
                });
            }

            const greetingEl = document.getElementById('greeting');
            if (greetingEl) {
                const h = new Date().getHours();
                const timeOfDay = h < 6 ? 'night' : h < 12 ? 'morning' : h < 18 ? 'afternoon' : 'evening';
                greetingEl.textContent = t.greetings[timeOfDay];
            }
            
            document.querySelectorAll('.lang-option').forEach(opt => {
                opt.classList.toggle('selected', opt.dataset.lang === lang);
            });

            document.body.classList.remove('lang-transition');
        }, 200);
    }

    function initTheme() {
        setTheme(currentTheme);

        const btn = document.getElementById('theme-btn');
        const dropdown = document.getElementById('theme-dropdown');

        if (btn && dropdown) {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                dropdown.classList.toggle('active');
                const langDrop = document.getElementById('lang-dropdown');
                if (langDrop) langDrop.classList.remove('active');
            });

            dropdown.addEventListener('click', (e) => {
                const opt = e.target.closest('.theme-option');
                if (opt) {
                    setTheme(opt.dataset.theme);
                    dropdown.classList.remove('active');
                }
            });
        }
    }

    function setTheme(theme) {
        currentTheme = theme;
        localStorage.setItem('siteTheme', theme);
        document.body.className = `theme-${theme}`;
        
        document.querySelectorAll('.theme-option').forEach(opt => {
            opt.classList.toggle('selected', opt.dataset.theme === theme);
        });
    }

    function initCursor() {
        const cursor = document.getElementById('cursor');
        if (!cursor) return;

        document.addEventListener('mousemove', (e) => {
            cursor.style.opacity = '1';
            cursor.style.transform = `translate3d(${e.clientX - 7.5}px, ${e.clientY - 1.5}px, 0)`;
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });
    }

    function initMazerEasterEgg() {
        const mazerH1 = document.querySelector('#bio h1');
        if (!mazerH1) return;

        let clickCount = 0;
        let clickTimer = null;
        const clickThreshold = 3;
        const resetTime = 1000; // Time in ms to reset click count

        mazerH1.addEventListener('click', () => {
            clickCount++;

            if (clickTimer) clearTimeout(clickTimer);
            clickTimer = setTimeout(() => { clickCount = 0; }, resetTime);

            if (clickCount === clickThreshold) {
                const modal = document.getElementById('easter-egg-modal');
                if (modal) modal.classList.add('active');
                
                clickCount = 0;
                clearTimeout(clickTimer);
            }
        });
    }
});