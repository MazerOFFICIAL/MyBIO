'use strict';

const CONFIG = {
    secretTgLink: "aHR0cHM6Ly90Lm1lL21hemVyb3hpZGU=",
    cursorSpeed: 0.9,
    typewriterInterval: 3000,
    typewriterFade: 600,
    musicTracks: [
        { src: 'background-music1.mp3', title: 'LO-FI #1' },
        { src: 'background-music2.mp3', title: 'LO-FI #2' },
        { src: 'background-music3.mp3', title: 'LO-FI #3' },
        { src: 'background-music4.mp3', title: 'LO-FI #4' },
        { src: 'background-music5.mp3', title: 'LO-FI #5' }
    ],
    translations: {
        en: {
            bioBtn: "My Bio", projectsBtn: "My Projects", skillsBtn: "My Skills", hobbiesBtn: "My Hobbies",
            worksTitle: "Projects", skillsTitle: "Skills", hobbiesTitle: "Hobbies", soon: "Soon...",
                timePrefix: "My time now: ",
            hobbiesText: "I love playing various games and exploring new virtual worlds.",
            oxideDesc: "Hardcore survival game where I spend most of my time. Raid, build, dominate.", oxideDownload: "Download",
            telegram: "Telegram",
            riddleTrigger: "A riddle for the quick-witted", riddleTitle: "RIDDLE",
            riddleText: "You enter a dark room. There is a candle, a kerosene lamp, and a fireplace. You have only one box of matches in your pocket. What will you light first?",
            riddlePlaceholder: "Answer", passwordPrefix: "Password is ", typewriter: ['Gamer', 'Dreamer'],
            audioPrev: "Previous track", audioPlay: "Play / Pause", audioNext: "Next track", audioLoop: "Repeat track", audioVolume: "Volume",
            passwordPlaceholder: "Password", greetings: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening", night: "Good night" },
            copied: "Copied to clipboard", oxideBtn: "Oxide HH-ID", oxideDonate: "I would be grateful for your support", copyBtn: "Copy",
            noHelloTitle: "Communication Etiquette", noHelloText: "Please read this before messaging:", noHelloCheckbox: "I have read and understood", noHelloBtn: "Continue", noHelloWarning: "First read \"nohello.net\""
        },
        ru: {
            bioBtn: "Биография", projectsBtn: "Проекты", skillsBtn: "Навыки", hobbiesBtn: "Хобби",
            worksTitle: "Проекты", skillsTitle: "Навыки", hobbiesTitle: "Хобби", soon: "Скоро...",
                timePrefix: "Мое время сейчас: ",
            hobbiesText: "Обожаю играть в самые разные игры и исследовать новые виртуальные миры.",
            oxideDesc: "Хардкорная игра на выживание, где я провожу большую часть времени. Рейди, строй, доминируй.", oxideDownload: "Скачать",
            telegram: "Телеграм",
            riddleTrigger: "Загадка для смекалистых", riddleTitle: "ЗАГАДКА",
            riddleText: "Вы входите в темную комнату. В ней есть свеча, керосиновая лампа и камин. У вас в кармане только один коробок спичек. Что вы зажжете первым?",
            riddlePlaceholder: "Ответ", passwordPrefix: "Пароль: ", typewriter: ['Геймер', 'Мечтатель'],
            audioPrev: "Предыдущий трек", audioPlay: "Воспроизвести / Пауза", audioNext: "Следующий трек", audioLoop: "Зациклить трек", audioVolume: "Громкость",
            passwordPlaceholder: "Пароль", greetings: { morning: "Доброе утро", afternoon: "Добрый день", evening: "Добрый вечер", night: "Доброй ночи" },
            copied: "Скопировано в буфер обмена", oxideBtn: "Oxide HH-ID", oxideDonate: "Буду благодарен за поддержку", copyBtn: "Копировать",
            noHelloTitle: "Этикет общения", noHelloText: "Пожалуйста, прочтите это перед тем как писать:", noHelloCheckbox: "Прочитал(а) и понимаю", noHelloBtn: "Продолжить", noHelloWarning: "Сначала прочитайте \"nohello.net\""
        },
        es: {
            bioBtn: "Biografía", projectsBtn: "Proyectos", skillsBtn: "Habilidades", hobbiesBtn: "Pasatiempos",
            worksTitle: "Proyectos", skillsTitle: "Habilidades", hobbiesTitle: "Pasatiempos", soon: "Pronto...",
                timePrefix: "Mi hora ahora: ",
            hobbiesText: "Me encanta jugar a varios juegos y explorar nuevos mundos virtuales.",
            oxideDesc: "Juego de supervivencia hardcore donde paso la mayor parte de mi tiempo. Asalta, construye, domina.", oxideDownload: "Descargar",
            telegram: "Telegram",
            riddleTrigger: "Un acertijo para los ingeniosos", riddleTitle: "ACERTIJO",
            riddleText: "Entras en una habitación oscura. Hay una vela, una lámpara de queroseno y una chimenea. Solo tienes una caja de cerillas en tu bolsillo. ¿Qué encenderás primero?",
            riddlePlaceholder: "Respuesta", passwordPrefix: "La contraseña es ", typewriter: ['Jugador', 'Soñador'],
            audioPrev: "Pista anterior", audioPlay: "Reproducir / Pausa", audioNext: "Pista siguiente", audioLoop: "Repetir pista", audioVolume: "Volumen",
            passwordPlaceholder: "Contraseña", greetings: { morning: "Buenos días", afternoon: "Buenas tardes", evening: "Buenas noches", night: "Buenas noches" },
            copied: "Copiado al portapapeles", oxideBtn: "Oxide HH-ID", oxideDonate: "Agradecería tu apoyo", copyBtn: "Copiar",
            noHelloTitle: "Etiqueta de comunicación", noHelloText: "Por favor lea esto antes de enviar mensajes:", noHelloCheckbox: "He leído y entendido", noHelloBtn: "Continuar", noHelloWarning: "Primero lee \"nohello.net\""
        },
        fr: {
            bioBtn: "Biographie", projectsBtn: "Projets", skillsBtn: "Compétences", hobbiesBtn: "Loisirs",
            worksTitle: "Projets", skillsTitle: "Compétences", hobbiesTitle: "Loisirs", soon: "Bientôt...",
                timePrefix: "Mon heure maintenant : ",
            hobbiesText: "J'adore jouer à divers jeux et explorer de nouveaux mondes virtuels.",
            oxideDesc: "Jeu de survie hardcore où je passe la plupart de mon temps. Raidez, construisez, dominez.", oxideDownload: "Télécharger",
            telegram: "Telegram",
            riddleTrigger: "Une énigme pour les vifs d'esprit", riddleTitle: "ÉNIGME",
            riddleText: "Vous entrez dans une pièce sombre. Il y a une bougie, une lampe à pétrole et une cheminée. Vous n'avez qu'une boîte d'allumettes dans votre poche. Qu'allumez-vous en premier ?",
            riddlePlaceholder: "Réponse", passwordPrefix: "Le mot de passe est ", typewriter: ['Joueur', 'Rêveur'],
            audioPrev: "Piste précédente", audioPlay: "Lecture / Pause", audioNext: "Piste suivante", audioLoop: "Répéter la piste", audioVolume: "Volume",
            passwordPlaceholder: "Mot de passe", greetings: { morning: "Bonjour", afternoon: "Bon après-midi", evening: "Bonsoir", night: "Bonne nuit" },
            copied: "Copié dans le presse-papiers", oxideBtn: "Oxide HH-ID", oxideDonate: "Je vous serais reconnaissant de votre soutien", copyBtn: "Copier",
            noHelloTitle: "Étiquette de communication", noHelloText: "Veuillez lire ceci avant d'envoyer un message :", noHelloCheckbox: "J'ai lu et compris", noHelloBtn: "Continuer", noHelloWarning: "Lisez d'abord \"nohello.net\""
        },
        de: {
            bioBtn: "Biografie", projectsBtn: "Projekte", skillsBtn: "Fähigkeiten", hobbiesBtn: "Hobbys",
            worksTitle: "Projekte", skillsTitle: "Fähigkeiten", hobbiesTitle: "Hobbys", soon: "Bald...",
                timePrefix: "Meine Zeit jetzt: ",
            hobbiesText: "Ich liebe es, verschiedene Spiele zu spielen und neue virtuelle Welten zu erkunden.",
            oxideDesc: "Hardcore-Survival-Spiel, in dem ich die meiste Zeit verbringe. Raiden, bauen, dominieren.", oxideDownload: "Herunterladen",
            telegram: "Telegram",
            riddleTrigger: "Ein Rätsel für die Schlauen", riddleTitle: "RÄTSEL",
            riddleText: "Du betrittst einen dunklen Raum. Es gibt eine Kerze, eine Petroleumlampe und einen Kamin. Du hast nur eine Schachtel Streichhölzer in der Tasche. Was zündest du zuerst an?",
            riddlePlaceholder: "Antwort", passwordPrefix: "Passwort ist ", typewriter: ['Gamer', 'Träumer'],
            audioPrev: "Vorheriger Titel", audioPlay: "Wiedergabe / Pause", audioNext: "Nächster Titel", audioLoop: "Titel wiederholen", audioVolume: "Lautstärke",
            passwordPlaceholder: "Passwort", greetings: { morning: "Guten Morgen", afternoon: "Guten Tag", evening: "Guten Abend", night: "Gute Nacht" },
            copied: "In die Zwischenablage kopiert", oxideBtn: "Oxide HH-ID", oxideDonate: "Ich wäre für Ihre Unterstützung dankbar", copyBtn: "Kopieren",
            noHelloTitle: "Kommunikationsetikette", noHelloText: "Bitte lesen Sie dies, bevor Sie eine Nachricht senden:", noHelloCheckbox: "Ich habe gelesen und verstanden", noHelloBtn: "Weiter", noHelloWarning: "Lies zuerst \"nohello.net\""
        }
    }
};

class Store {
    static get(key, def = null) {
        try { return localStorage.getItem(key) || def; } catch { return def; }
    }
    static set(key, val) {
        try { localStorage.setItem(key, val); } catch {}
    }
}

class Utils {
    static formatTime(seconds) {
        if (!seconds || isNaN(seconds)) return '0:00';
        const m = Math.floor(seconds / 60);
        const s = Math.floor(seconds % 60);
        return `${m}:${s.toString().padStart(2, '0')}`;
    }
    
    static qs(selector, parent = document) {
        return parent.querySelector(selector);
    }
    
    static qsa(selector, parent = document) {
        return [...parent.querySelectorAll(selector)];
    }
}

class Cursor {
    constructor() {
        this.el = Utils.qs('#cursor');
        this.pos = { x: 0, y: 0 };
        this.target = { x: 0, y: 0 };
        this.speed = CONFIG.cursorSpeed;
        this.raf = null;
        this.init();
    }

    init() {
        document.addEventListener('mousemove', e => {
            this.target.x = e.clientX;
            this.target.y = e.clientY;
            this.el.style.opacity = '1';
        });
        
        document.addEventListener('mouseleave', () => {
            this.el.style.opacity = '0';
        });

        this.animate();
    }

    animate() {
        this.pos.x += (this.target.x - this.pos.x) * this.speed;
        this.pos.y += (this.target.y - this.pos.y) * this.speed;
        this.el.style.transform = `translate3d(${this.pos.x - 7.5}px, ${this.pos.y - 1.5}px, 0)`;
        this.raf = requestAnimationFrame(this.animate.bind(this));
    }
}

class Typewriter {
    constructor() {
        this.el = Utils.qs('#typewriter');
        this.phrases = [];
        this.index = 0;
        this.timeout = null;
    }

    setPhrases(phrases) {
        this.phrases = phrases;
        this.index = 0;
        this.start();
    }

    start() {
        clearTimeout(this.timeout);
        this.el.style.opacity = '0';
        this.timeout = setTimeout(() => {
            this.el.textContent = this.phrases[this.index];
            this.el.style.opacity = '1';
            this.timeout = setTimeout(() => this.next(), CONFIG.typewriterInterval);
        }, CONFIG.typewriterFade);
    }

    next() {
        this.el.style.opacity = '0';
        this.timeout = setTimeout(() => {
            this.index = (this.index + 1) % this.phrases.length;
            this.el.textContent = this.phrases[this.index];
            this.el.style.opacity = '1';
            this.timeout = setTimeout(() => this.next(), CONFIG.typewriterInterval);
        }, CONFIG.typewriterFade);
    }
}

class TimeController {
    constructor() {
        this.el = Utils.qs('#local-time');
        if (this.el) {
            this.init();
        }
    }

    init() {
        this.update();
        setInterval(() => this.update(), 1000);
    }

    update() {
        const time = new Date().toLocaleTimeString('en-GB', {
            timeZone: 'Europe/Warsaw',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        const t = CONFIG.translations[State.currentLang];
        this.el.textContent = `${t.timePrefix}${time} (PL)`;
    }
}

class ThemeController {
    constructor() {
        this.themes = ['midnight', 'forest', 'ocean', 'nebula', 'gold'];
        this.btn = Utils.qs('#theme-btn');
        this.dropdown = Utils.qs('#theme-dropdown');
        this.init();
    }

    init() {
        const saved = Store.get('siteTheme');
        const theme = this.themes.includes(saved) ? saved : 'midnight';
        this.setTheme(theme);
        this.bindEvents();
    }

    setTheme(theme) {
        document.body.className = `theme-${theme}`;
        Store.set('siteTheme', theme);
        this.updateUI(theme);
    }

    updateUI(activeTheme) {
        Utils.qsa('.theme-option', this.dropdown).forEach(opt => {
            opt.classList.toggle('selected', opt.dataset.theme === activeTheme);
        });
    }

    bindEvents() {
        this.btn.addEventListener('click', e => {
            e.stopPropagation();
            this.dropdown.classList.toggle('active');
            Utils.qs('#lang-dropdown').classList.remove('active');
        });
        
        this.dropdown.addEventListener('click', e => {
            const opt = e.target.closest('.theme-option');
            if (opt) {
                this.setTheme(opt.dataset.theme);
                this.dropdown.classList.remove('active');
            }
        });
    }
}

class LanguageController {
    constructor(typewriter) {
        this.typewriter = typewriter;
        this.btn = Utils.qs('#lang-btn');
        this.dropdown = Utils.qs('#lang-dropdown');
        this.init();
    }

    init() {
        const saved = Store.get('siteLang', 'en');
        this.setLang(saved);
        this.bindEvents();
    }

    setLang(lang) {
        document.documentElement.lang = lang;
        Store.set('siteLang', lang);
        this.apply(lang);
    }

    apply(lang) {
        const t = CONFIG.translations[lang];
        if (!t) return;

        const map = {
            '[data-section="bio"]': { k: 'bioBtn', attr: 'text' },
            '[data-section="hobbies"]': { k: 'hobbiesBtn', attr: 'text' },
            '#hobbies h1': { k: 'hobbiesTitle', attr: 'text' },
            '#hobbies-text': { k: 'hobbiesText', attr: 'text' },
            '#nohello-title': { k: 'noHelloTitle', attr: 'text' },
            '#nohello-text': { k: 'noHelloText', attr: 'text' },
            '#nohello-label': { k: 'noHelloCheckbox', attr: 'text' },
            '#nohello-submit': { k: 'noHelloBtn', attr: 'text' },
            '#nohello-warning': { k: 'noHelloWarning', attr: 'text' },
            '#prev-btn': { k: 'audioPrev', attr: 'title' },
            '#play-pause-btn': { k: 'audioPlay', attr: 'title' },
            '#next-btn': { k: 'audioNext', attr: 'title' },
            '#loop-btn': { k: 'audioLoop', attr: 'title' },
            '#volume-btn': { k: 'audioVolume', attr: 'title' }
        };

        for (const [sel, conf] of Object.entries(map)) {
            const el = Utils.qs(sel);
            if (el && t[conf.k]) {
                if (conf.attr === 'text') el.textContent = t[conf.k];
                else if (conf.attr === 'title') el.title = t[conf.k];
            }
        }

        this.btn.textContent = lang.toUpperCase();
        
        const greetingEl = Utils.qs('#greeting');
        if (greetingEl) {
            const h = new Date().getHours();
            const time = h < 6 ? 'night' : h < 12 ? 'morning' : h < 18 ? 'afternoon' : 'evening';
            greetingEl.textContent = t.greetings[time];
        }

        const noHelloLink = Utils.qs('#nohello-link');
        if (noHelloLink) noHelloLink.href = `https://nohello.net/${lang}/`;

        this.typewriter.setPhrases(t.typewriter);

        Utils.qsa('.lang-option', this.dropdown).forEach(opt => {
            opt.classList.toggle('selected', opt.dataset.lang === lang);
        });
    }

    bindEvents() {
        this.btn.addEventListener('click', e => {
            e.stopPropagation();
            this.dropdown.classList.toggle('active');
            Utils.qs('#theme-dropdown').classList.remove('active');
        });

        this.dropdown.addEventListener('click', e => {
            const opt = e.target.closest('.lang-option');
            if (opt) {
                this.setLang(opt.dataset.lang);
                this.dropdown.classList.remove('active');
            }
        });
    }
}

class AudioController {
    constructor() {
        this.tracks = CONFIG.musicTracks;
        this.index = 0;
        this.playing = false;
        this.looping = false;
        this.el = Utils.qs('#bg-music');
        this.container = Utils.qs('#audio-player-container');
        this.toggleBtn = Utils.qs('#audio-player-toggle');
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };
        
        this.init();
    }

    init() {
        this.el.volume = 0.5;
        Utils.qs('#volume-slider').value = 0.5;
        this.load(this.index);
        this.bindEvents();
        this.initDrag();
        this.restorePos();
    }

    load(idx) {
        this.index = idx;
        this.el.src = this.tracks[idx].src;
        Utils.qs('#track-title').textContent = this.tracks[idx].title;
        Utils.qs('#progress-bar-fill').style.width = '0%';
        Utils.qs('#current-time').textContent = '0:00';
        
        this.el.onloadedmetadata = () => {
            Utils.qs('#total-duration').textContent = Utils.formatTime(this.el.duration);
        };
        this.updateIcon();
    }

    toggle() {
        this.playing ? this.el.pause() : this.el.play().catch(console.error);
        this.playing = !this.playing;
        this.updateIcon();
    }

    next() {
        this.index = (this.index + 1) % this.tracks.length;
        this.load(this.index);
        if (this.playing) this.el.play();
    }

    prev() {
        this.index = (this.index - 1 + this.tracks.length) % this.tracks.length;
        this.load(this.index);
        if (this.playing) this.el.play();
    }

    updateIcon() {
        const btn = Utils.qs('#play-pause-btn');
        btn.innerHTML = this.playing 
            ? '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>'
            : '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
        this.toggleBtn.classList.toggle('playing', this.playing);
    }

    setVisible(show) {
        this.container.classList.toggle('active', show);
    }

    bindEvents() {
        this.toggleBtn.addEventListener('click', () => {
            this.setVisible(!this.container.classList.contains('active'));
        });
        
        Utils.qs('#minimize-player-btn').addEventListener('click', () => this.setVisible(false));
        Utils.qs('#play-pause-btn').addEventListener('click', () => this.toggle());
        Utils.qs('#next-btn').addEventListener('click', () => this.next());
        Utils.qs('#prev-btn').addEventListener('click', () => this.prev());
        
        Utils.qs('#loop-btn').addEventListener('click', (e) => {
            this.looping = !this.looping;
            this.el.loop = this.looping;
            e.currentTarget.classList.toggle('active', this.looping);
        });

        const volBtn = Utils.qs('#volume-btn');
        const volPopup = Utils.qs('#volume-popup');
        volBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            volPopup.classList.toggle('active');
        });

        const volWrapper = volBtn.parentElement;
        Utils.qs('#volume-slider').addEventListener('input', (e) => {
            this.el.volume = e.target.value;
            if (!volWrapper.classList.contains('pulse')) {
                volWrapper.classList.add('pulse');
            }
        });
        volWrapper.addEventListener('animationend', () => volWrapper.classList.remove('pulse'));

        this.el.addEventListener('timeupdate', () => {
            if (this.el.duration) {
                const pct = (this.el.currentTime / this.el.duration) * 100;
                Utils.qs('#progress-bar-fill').style.width = `${pct}%`;
                Utils.qs('#current-time').textContent = Utils.formatTime(this.el.currentTime);
            }
        });

        this.el.addEventListener('ended', () => {
            if (!this.looping) this.next();
        });

        Utils.qs('#progress-bar-container').addEventListener('click', (e) => {
            if (this.el.duration) {
                const w = e.currentTarget.clientWidth;
                this.el.currentTime = (e.offsetX / w) * this.el.duration;
            }
        });
    }

    initDrag() {
        const start = (e) => {
            if (e.target.closest('button, input, .volume-popup')) return;
            this.isDragging = true;
            this.container.style.transition = 'none';
            this.container.style.cursor = 'grabbing';
            
            const { clientX, clientY } = e.touches ? e.touches[0] : e;
            const rect = this.container.getBoundingClientRect();
            this.dragOffset = { x: clientX - rect.left, y: clientY - rect.top };
        };

        const move = (e) => {
            if (!this.isDragging) return;
            e.preventDefault();
            const { clientX, clientY } = e.touches ? e.touches[0] : e;
            this.container.style.left = `${clientX - this.dragOffset.x}px`;
            this.container.style.top = `${clientY - this.dragOffset.y}px`;
            this.container.style.bottom = 'auto';
            this.container.style.right = 'auto';
        };

        const end = () => {
            if (!this.isDragging) return;
            this.isDragging = false;
            this.container.style.transition = '';
            this.container.style.cursor = 'move';
            Store.set('audioPlayerPos', JSON.stringify({
                left: this.container.style.left,
                top: this.container.style.top
            }));
        };

        this.container.addEventListener('mousedown', start);
        this.container.addEventListener('touchstart', start, { passive: false });
        document.addEventListener('mousemove', move);
        document.addEventListener('touchmove', move, { passive: false });
        document.addEventListener('mouseup', end);
        document.addEventListener('touchend', end);
    }

    restorePos() {
        const pos = JSON.parse(Store.get('audioPlayerPos'));
        if (pos) {
            this.container.style.left = pos.left;
            this.container.style.top = pos.top;
            this.container.style.bottom = 'auto';
            this.container.style.right = 'auto';
        }
    }
}

class App {
    constructor() {
        this.cursor = new Cursor();
        this.typewriter = new Typewriter();
        this.time = new TimeController();
        this.theme = new ThemeController();
        this.lang = new LanguageController(this.typewriter);
        this.audio = new AudioController();
        
        this.bindGlobalEvents();
    }

    bindGlobalEvents() {
        const sidebar = Utils.qs('#sidebar');
        const menuToggle = Utils.qs('#menu-toggle');

        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            menuToggle.classList.toggle('active');
            sidebar.classList.toggle('active');
        });

        document.addEventListener('click', (e) => {
            if (!e.target.closest('.sidebar') && !e.target.closest('#menu-toggle')) {
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
            }
            
            if (!e.target.closest('.audio-player-container') && !e.target.closest('#audio-player-toggle')) {
                this.audio.setVisible(false);
            }

            if (!e.target.closest('.lang-dropdown') && !e.target.closest('#lang-btn')) {
                Utils.qs('#lang-dropdown').classList.remove('active');
            }
            
            if (!e.target.closest('.theme-dropdown') && !e.target.closest('#theme-btn')) {
                Utils.qs('#theme-dropdown').classList.remove('active');
            }

            if (!e.target.closest('.volume-popup') && !e.target.closest('#volume-btn')) {
                Utils.qs('#volume-popup').classList.remove('active');
            }

            if (e.target.classList.contains('modal')) {
                e.target.classList.remove('active');
            }

            const link = e.target.closest('.sidebar .link-btn');
            if (link) {
                e.preventDefault();
                Utils.qsa('.content-section').forEach(s => s.classList.remove('active'));
                Utils.qs(`#${link.dataset.section}`).classList.add('active');
                sidebar.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });

        // NoHello Logic
        const noHelloModal = Utils.qs('#nohello-modal');
        const noHelloCheck = Utils.qs('#nohello-checkbox');
        const noHelloBtn = Utils.qs('#nohello-submit');
        
        if (Utils.qs('#telegram-btn')) {
            Utils.qs('#telegram-btn').addEventListener('click', (e) => {
                e.preventDefault();
                noHelloModal.classList.add('active');
                noHelloCheck.checked = false;
                noHelloCheck.disabled = true;
                noHelloBtn.disabled = true;
                noHelloBtn.style.opacity = '0.5';
                Utils.qs('#nohello-overlay').style.display = 'block';
                Utils.qs('#nohello-warning').style.display = 'none';
            });
        }

        Utils.qs('#nohello-link').addEventListener('click', () => {
            noHelloCheck.disabled = false;
            Utils.qs('#nohello-overlay').style.display = 'none';
            Utils.qs('#nohello-warning').style.display = 'none';
        });

        Utils.qs('#nohello-overlay').addEventListener('click', () => {
            Utils.qs('#nohello-warning').style.display = 'block';
        });

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

        // Oxide Logic
        if (Utils.qs('#oxide-id-btn')) {
            Utils.qs('#oxide-id-btn').addEventListener('click', (e) => {
                e.preventDefault();
                Utils.qs('#oxide-id-modal').classList.add('active');
            });
            
            Utils.qs('#copy-oxide-id').addEventListener('click', () => {
                navigator.clipboard.writeText('W7-V29-NU').then(() => {
                    const toast = Utils.qs('#toast-notification');
                    toast.textContent = CONFIG.translations[Store.get('siteLang', 'en')].copied;
                    toast.classList.add('show');
                    setTimeout(() => toast.classList.remove('show'), 2000);
                });
            });
        }

        // Mobile Sidebar Gesture
        document.addEventListener('mousemove', e => {
            if (window.innerWidth > 768 && e.clientX < 20 && !sidebar.classList.contains('active')) {
                sidebar.classList.add('active');
                menuToggle.classList.add('active');
            }
        });

        document.addEventListener('dragstart', e => e.preventDefault());
    }
}

document.addEventListener('DOMContentLoaded', () => new App());