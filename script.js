'use strict';

const CONFIG = {
    cursorSpeed: 0.9,
    typewriterInterval: 3000,
    typewriterFade: 500,
    secretTgLink: 'aHR0cHM6Ly90Lm1lL3VzZXJuYW1l', // Example: btoa('https://t.me/your_username_here')
    translations: {
        en: {
            bioBtn: "My Bio", projectsBtn: "My Projects", skillsBtn: "My Skills", hobbiesBtn: "My Hobbies",
            worksTitle: "Projects", skillsTitle: "Skills", hobbiesTitle: "Hobbies", soon: "Soon...",
                timePrefix: "My time now: ",
            hobbiesText: "I love playing various games and exploring new virtual worlds.",
            greetings: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening", night: "Good night" },
            typewriter: ["Software Developer", "Gamer", "Tech Enthusiast"],
            copied: "Copied to clipboard!"
        },
        ru: {
            bioBtn: "Биография", projectsBtn: "Проекты", skillsBtn: "Навыки", hobbiesBtn: "Хобби",
            worksTitle: "Проекты", skillsTitle: "Навыки", hobbiesTitle: "Хобби", soon: "Скоро...",
                timePrefix: "Мое время сейчас: ",
            hobbiesText: "Обожаю играть в самые разные игры и исследовать новые виртуальные миры.",
            greetings: { morning: "Доброе утро", afternoon: "Добрый день", evening: "Добрый вечер", night: "Доброй ночи" },
            typewriter: ["Разработчик", "Геймер", "Энтузиаст технологий"],
            copied: "Скопировано в буфер обмена!"
        },
        es: {
            bioBtn: "Biografía", projectsBtn: "Proyectos", skillsBtn: "Habilidades", hobbiesBtn: "Pasatiempos",
            worksTitle: "Proyectos", skillsTitle: "Habilidades", hobbiesTitle: "Pasatiempos", soon: "Pronto...",
                timePrefix: "Mi hora ahora: ",
            hobbiesText: "Me encanta jugar a varios juegos y explorar nuevos mundos virtuales.",
            greetings: { morning: "Buenos días", afternoon: "Buenas tardes", evening: "Buenas noches", night: "Buenas noches" },
            typewriter: ["Desarrollador de software", "Jugador", "Entusiasta de la tecnología"],
            copied: "¡Copiado al portapapeles!"
        },
        fr: {
            bioBtn: "Biographie", projectsBtn: "Projets", skillsBtn: "Compétences", hobbiesBtn: "Loisirs",
            worksTitle: "Projets", skillsTitle: "Compétences", hobbiesTitle: "Loisirs", soon: "Bientôt...",
                timePrefix: "Mon heure maintenant : ",
            hobbiesText: "J'adore jouer à divers jeux et explorer de nouveaux mondes virtuels.",
            greetings: { morning: "Bonjour", afternoon: "Bon après-midi", evening: "Bonsoir", night: "Bonne nuit" },
            typewriter: ["Développeur de logiciels", "Joueur", "Passionné de technologie"],
            copied: "Copié dans le presse-papiers !"
        },
        de: {
            bioBtn: "Biografie", projectsBtn: "Projekte", skillsBtn: "Fähigkeiten", hobbiesBtn: "Hobbys",
            worksTitle: "Projekte", skillsTitle: "Fähigkeiten", hobbiesTitle: "Hobbys", soon: "Bald...",
                timePrefix: "Meine Zeit jetzt: ",
            hobbiesText: "Ich liebe es, verschiedene Spiele zu spielen und neue virtuelle Welten zu erkunden.",
            greetings: { morning: "Guten Morgen", afternoon: "Guten Tag", evening: "Guten Abend", night: "Gute Nacht" },
            typewriter: ["Softwareentwickler", "Gamer", "Technik-Enthusiast"],
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
    initOtherFeatures();
    removeUnwantedElements(); // Удаляем плеер и Oxide

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
        });

        const toggle = document.getElementById('menu-toggle');
        const sidebar = document.getElementById('sidebar');
        
        if (toggle && sidebar) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                toggle.classList.toggle('active');
                sidebar.classList.toggle('active');
            });

            document.addEventListener('click', (e) => {
                if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
                    sidebar.classList.remove('active');
                    toggle.classList.remove('active');
                }
            });
        }

        // Открытие меню при наведении на левый край
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
        currentLang = lang;
        localStorage.setItem('siteLang', lang);
        document.documentElement.lang = lang;

        const t = CONFIG.translations[lang] || CONFIG.translations['en'];
        const btn = document.getElementById('lang-btn');
        if (btn) btn.textContent = lang.toUpperCase();

        const map = {
            '[data-section="bio"]': 'bioBtn',
            '[data-section="projects"]': 'projectsBtn',
            '[data-section="skills"]': 'skillsBtn',
            '[data-section="hobbies"]': 'hobbiesBtn',
            '#projects h1': 'worksTitle',
            '#skills h1': 'skillsTitle',
            '#hobbies h1': 'hobbiesTitle',
            '#hobbies-text': 'hobbiesText',
            '#projects .soon': 'soon',
            '#skills .soon': 'soon',
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

        if (t.typewriter) {
            startTypewriter(t.typewriter);
        }
        
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('selected', opt.dataset.lang === lang);
        });
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

    function startTypewriter(phrases) {
        const el = document.getElementById('typewriter');
        if (!el) return;

        let phraseIndex = 0;
        clearTimeout(typewriterTimeout);

        function loop() {
            el.style.opacity = '0';
            setTimeout(() => {
                el.textContent = phrases[phraseIndex];
                el.style.opacity = '1';
                phraseIndex = (phraseIndex + 1) % phrases.length;
                typewriterTimeout = setTimeout(loop, CONFIG.typewriterInterval);
            }, CONFIG.typewriterFade);
        }
        loop();
    }

    function initCursor() {
        const cursor = document.getElementById('cursor');
        if (!cursor) return;

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.opacity = '1';
        });

        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
        });

        function animate() {
            const speed = CONFIG.cursorSpeed;
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;
            cursor.style.transform = `translate3d(${cursorX - 7.5}px, ${cursorY - 1.5}px, 0)`;
            requestAnimationFrame(animate);
        }
        animate();
    }

    function initOtherFeatures() {
        const noHelloModal = document.getElementById('nohello-modal');
        const noHelloCheck = document.getElementById('nohello-checkbox');
        const noHelloBtn = document.getElementById('nohello-submit');
        const tgBtn = document.getElementById('telegram-btn');

        if (tgBtn && noHelloModal) {
            tgBtn.addEventListener('click', (e) => {
                e.preventDefault();
                noHelloModal.classList.add('active');
                if (noHelloCheck) {
                    noHelloCheck.checked = false;
                    noHelloCheck.disabled = true;
                }
                if (noHelloBtn) {
                    noHelloBtn.disabled = true;
                    noHelloBtn.style.opacity = '0.5';
                }
                const overlay = document.getElementById('nohello-overlay');
                if (overlay) overlay.style.display = 'block';
            });
        }

        const noHelloLink = document.getElementById('nohello-link');
        if (noHelloLink && noHelloCheck) {
            noHelloLink.addEventListener('click', () => {
                noHelloCheck.disabled = false;
                const overlay = document.getElementById('nohello-overlay');
                if (overlay) overlay.style.display = 'none';
            });
        }

        if (noHelloCheck && noHelloBtn) {
            noHelloCheck.addEventListener('change', () => {
                noHelloBtn.disabled = !noHelloCheck.checked;
                noHelloBtn.style.opacity = noHelloCheck.checked ? '1' : '0.5';
            });

            noHelloBtn.addEventListener('click', () => {
                if (!noHelloBtn.disabled) {
                    window.open(atob(CONFIG.secretTgLink), '_blank');
                    noHelloModal.classList.remove('active');
                }
            });
        }

        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }
        });
    }

    function removeUnwantedElements() {
        // Список ID элементов, которые нужно удалить (плеер, кнопки, модалки Oxide)
        const idsToRemove = [
            'bg-music', 
            'audio-player-container', 
            'audio-player-toggle',
            'oxide-id-modal',
            'oxide-id-btn',
            'copy-oxide-id',
            'oxide-download-btn'
        ];

        idsToRemove.forEach(id => {
            const el = document.getElementById(id);
            if (el) el.remove();
        });

        // Пытаемся найти и удалить описание Oxide в хобби, чтобы уменьшить размер блока
        const oxideDesc = document.getElementById('oxide-desc');
        if (oxideDesc) {
            // Ищем родительский контейнер (карточку или блок) и удаляем его
            const container = oxideDesc.closest('.game-card') || oxideDesc.closest('.card') || oxideDesc.parentElement;
            if (container) container.remove();
        }
    }
});