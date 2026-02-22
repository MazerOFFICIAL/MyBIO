'use strict';

document.addEventListener('DOMContentLoaded', () => {
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

    const DOM = {
        body: document.body,
        cursor: document.getElementById('cursor'),
        menuToggle: document.getElementById('menu-toggle'),
        sidebar: document.getElementById('sidebar'),
        langBtn: document.getElementById('lang-btn'),
        langDropdown: document.getElementById('lang-dropdown'),
        themeBtn: document.getElementById('theme-btn'),
        themeDropdown: document.getElementById('theme-dropdown'),
        typewriter: document.getElementById('typewriter'),
        transitionOverlay: document.getElementById('transition-overlay'),
        toast: document.getElementById('toast-notification'),
        modals: document.querySelectorAll('.modal'),
        easterEggModal: document.getElementById('easter-egg-modal'),
        successModal: document.getElementById('success-modal'),
        noHelloModal: document.getElementById('nohello-modal'),
        oxideIdModal: document.getElementById('oxide-id-modal'),
        noHelloOverlay: document.getElementById('nohello-overlay'),
        noHelloSubmit: document.getElementById('nohello-submit'),
        noHelloLink: document.getElementById('nohello-link'),
        noHelloCheckbox: document.getElementById('nohello-checkbox'),
        noHelloWarning: document.getElementById('nohello-warning'),
        oxideIdBtn: document.getElementById('oxide-id-btn'),
        telegramBtn: document.getElementById('telegram-btn'),
        copyOxideIdBtn: document.getElementById('copy-oxide-id'),
        audio: {
            player: document.getElementById('bg-music'),
            toggleBtn: document.getElementById('audio-player-toggle'),
            minimizeBtn: document.getElementById('minimize-player-btn'),
            container: document.getElementById('audio-player-container'),
            playPauseBtn: document.getElementById('play-pause-btn'),
            nextBtn: document.getElementById('next-btn'),
            prevBtn: document.getElementById('prev-btn'),
            loopBtn: document.getElementById('loop-btn'),
            volumeBtn: document.getElementById('volume-btn'),
            volumePopup: document.getElementById('volume-popup'),
            volumeSlider: document.getElementById('volume-slider'),
            trackTitle: document.getElementById('track-title'),
            currentTime: document.getElementById('current-time'),
            totalDuration: document.getElementById('total-duration'),
            progressContainer: document.getElementById('progress-bar-container'),
            progressFill: document.getElementById('progress-bar-fill')
        },
    };

    const State = {
        currentLang: 'en',
        currentTheme: 'default',
        typewriter: {
            phrases: [],
            phraseIndex: 0,
            timeoutId: null
        },
        cursor: { x: 0, y: 0, targetX: 0, targetY: 0 },
        lastTouchTime: 0,
        easterEggClickCount: 0,
        audio: {
            currentTrackIndex: 0,
            isDraggingProgress: false,
            bindsEnabled: false
        }
    };

    const safeStorage = {
        getItem: (key) => { try { return localStorage.getItem(key); } catch (e) { return null; } },
        setItem: (key, val) => { try { localStorage.setItem(key, val); } catch (e) {} }
    };

    const LangManager = {
        init() {
            State.currentLang = safeStorage.getItem('siteLang') || 'en';
            this.set(State.currentLang, false);
        },
        set(lang, animate = true) {
            State.currentLang = lang;
            safeStorage.setItem('siteLang', lang);
            document.documentElement.lang = lang;
            if (animate) {
                DOM.transitionOverlay.classList.add('active');
                setTimeout(() => {
                    this.apply();
                    setTimeout(() => DOM.transitionOverlay.classList.remove('active'), 300);
                }, 500);
            } else {
                this.apply();
            }
        },
        apply() {
            const t = CONFIG.translations[State.currentLang];
            if (!t) return;
            const translationMap = {
                bioBtn: { selector: '[data-section="bio"]', type: 'text' },
                hobbiesBtn: { selector: '[data-section="hobbies"]', type: 'text' },
                hobbiesTitle: { selector: '#hobbies h1', type: 'text' },
                oxideDesc: { selector: '#oxide-desc', type: 'text' },
                oxideDownload: { selector: '#oxide-download', type: 'text' },
                telegram: { selector: '#telegram-btn', type: 'text' },
                oxideBtn: { selector: '#oxide-id-btn', type: 'text' },
                oxideDonate: { selector: '#oxide-donate-text', type: 'text' },
                copyBtn: { selector: '#copy-oxide-id', type: 'text' },
                noHelloTitle: { selector: '#nohello-title', type: 'text' },
                noHelloText: { selector: '#nohello-text', type: 'text' },
                noHelloCheckbox: { selector: '#nohello-label', type: 'text' },
                noHelloBtn: { selector: '#nohello-submit', type: 'text' },
                noHelloWarning: { selector: '#nohello-warning', type: 'text' },
                audioPrev: { selector: '#prev-btn', type: 'title' },
                audioPlay: { selector: '#play-pause-btn', type: 'title' },
                audioNext: { selector: '#next-btn', type: 'title' },
                audioLoop: { selector: '#loop-btn', type: 'title' },
                audioVolume: { selector: '#volume-btn', type: 'title' },
            };
            for (const key in translationMap) {
                const item = translationMap[key];
                const el = document.querySelector(item.selector);
                if (el && t[key]) {
                    if (item.type === 'text') el.textContent = t[key];
                    else if (item.type === 'placeholder') el.placeholder = t[key];
                    else if (item.type === 'title') el.title = t[key];
                }
            }
            DOM.langBtn.textContent = State.currentLang.toUpperCase();
            document.querySelector('#success-modal h3').innerHTML = `${t.passwordPrefix}<span id="copy-password" style="color: var(--accent-primary); cursor: pointer; text-decoration: underline; text-underline-offset: 4px;" title="${t.copied}">Telegram</span>`;
            DOM.noHelloLink.href = `https://nohello.net/${State.currentLang}/`;
            const h = new Date().getHours();
            const timeOfDay = (h < 6) ? 'night' : (h < 12) ? 'morning' : (h < 18) ? 'afternoon' : 'evening';
            document.getElementById('greeting').textContent = t.greetings[timeOfDay];
            State.typewriter.phrases = t.typewriter;
            State.typewriter.phraseIndex = 0;
            UI.startTypewriter();
            document.querySelectorAll('.lang-option').forEach(opt => {
                opt.classList.toggle('selected', opt.getAttribute('data-lang') === State.currentLang);
            });
        }
    };

    const ThemeManager = {
        init() {
            State.currentTheme = safeStorage.getItem('siteTheme') || 'default';
            this.set(State.currentTheme);
        },
        set(theme) {
            State.currentTheme = theme;
            safeStorage.setItem('siteTheme', theme);
            DOM.body.className = theme === 'default' ? '' : `theme-${theme}`;
            document.querySelectorAll('.theme-option').forEach(opt => {
                opt.classList.toggle('selected', opt.getAttribute('data-theme') === theme);
            });
        }
    };

    const AudioPlayer = {
        init() {
            this.tracks = CONFIG.musicTracks;
            this.currentTrackIndex = 0;
            this.isPlaying = false;
            this.isLooping = false;
            this.audio = DOM.audio.player;
            this.audio.volume = 0.5;
            DOM.audio.volumeSlider.value = 0.5;
            this.loadTrack(this.currentTrackIndex);
            this.bindEvents();
            this.initDraggable();
        },
        loadTrack(index) {
            this.currentTrackIndex = index;
            this.audio.src = this.tracks[index].src;
            DOM.audio.trackTitle.textContent = this.tracks[index].title;
            DOM.audio.progressFill.style.width = '0%';
            DOM.audio.currentTime.textContent = '0:00';
            this.audio.onloadedmetadata = () => {
                DOM.audio.totalDuration.textContent = this.formatTime(this.audio.duration);
            };
            this.updatePlayPauseIcon();
        },
        play() {
            this.audio.play().then(() => {
                this.isPlaying = true;
                this.updatePlayPauseIcon();
            }).catch(e => console.error("Audio play failed:", e));
        },
        pause() {
            this.audio.pause();
            this.isPlaying = false;
            this.updatePlayPauseIcon();
        },
        togglePlay() {
            if (this.isPlaying) this.pause();
            else this.play();
        },
        next() {
            this.currentTrackIndex = (this.currentTrackIndex + 1) % this.tracks.length;
            this.loadTrack(this.currentTrackIndex);
            if (this.isPlaying) this.play();
        },
        prev() {
            this.currentTrackIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
            this.loadTrack(this.currentTrackIndex);
            if (this.isPlaying) this.play();
        },
        toggleLoop() {
            this.isLooping = !this.isLooping;
            this.audio.loop = this.isLooping;
            DOM.audio.loopBtn.classList.toggle('active', this.isLooping);
        },
        setVolume(val) {
            this.audio.volume = val;
        },
        updateProgress() {
            const { duration, currentTime } = this.audio;
            if (duration) {
                DOM.audio.progressFill.style.width = `${(currentTime / duration) * 100}%`;
                DOM.audio.currentTime.textContent = this.formatTime(currentTime);
                DOM.audio.totalDuration.textContent = this.formatTime(duration);
            }
        },
        setProgress(e) {
            const width = DOM.audio.progressContainer.clientWidth;
            const duration = this.audio.duration;
            if (duration) this.audio.currentTime = (e.offsetX / width) * duration;
        },
        formatTime(s) {
            if (isNaN(s)) return "0:00";
            const m = Math.floor(s / 60), sec = Math.floor(s % 60);
            return `${m}:${sec < 10 ? '0' : ''}${sec}`;
        },
        updatePlayPauseIcon() {
            DOM.audio.playPauseBtn.innerHTML = this.isPlaying 
                ? '<svg viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>'
                : '<svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
        },
        togglePlayerVisibility(show) {
            DOM.audio.container.classList.toggle('active', show);
        },
        bindEvents() {
            DOM.audio.toggleBtn.addEventListener('click', () => {
                const isActive = DOM.audio.container.classList.contains('active');
                this.togglePlayerVisibility(!isActive);
            });
            DOM.audio.minimizeBtn.addEventListener('click', () => this.togglePlayerVisibility(false));
            DOM.audio.playPauseBtn.addEventListener('click', () => this.togglePlay());
            DOM.audio.nextBtn.addEventListener('click', () => this.next());
            DOM.audio.prevBtn.addEventListener('click', () => this.prev());
            DOM.audio.loopBtn.addEventListener('click', () => this.toggleLoop());
            DOM.audio.volumeBtn.addEventListener('click', (e) => { e.stopPropagation(); DOM.audio.volumePopup.classList.toggle('active'); });
            
            const volumeWrapper = DOM.audio.volumeBtn.parentElement;
            DOM.audio.volumeSlider.addEventListener('input', (e) => {
                this.setVolume(e.target.value);
                if (!volumeWrapper.classList.contains('pulse')) {
                    volumeWrapper.classList.add('pulse');
                }
            });
            volumeWrapper.addEventListener('animationend', () => {
                volumeWrapper.classList.remove('pulse');
            });

            this.audio.addEventListener('timeupdate', () => this.updateProgress());
            this.audio.addEventListener('ended', () => { if (!this.isLooping) this.next(); });
            DOM.audio.progressContainer.addEventListener('click', (e) => this.setProgress(e));
            this.togglePlayerVisibility(false);
        },
        initDraggable() {
            const container = DOM.audio.container;
            const savedPos = safeStorage.getItem('audioPlayerPos');
            if (savedPos) {
                try {
                    const { left, top } = JSON.parse(savedPos);
                    container.style.left = left;
                    container.style.top = top;
                    container.style.bottom = 'auto';
                    container.style.right = 'auto';
                } catch (e) {}
            }
            let isDragging = false;
            let startX, startY, initialLeft, initialTop;
            const startDrag = (e) => {
                if (e.target.closest('button') || e.target.closest('input') || e.target.closest('.progress-bar-container') || e.target.closest('.volume-popup')) return;
                isDragging = true;
                container.style.transition = 'none';
                container.style.cursor = 'grabbing';
                const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
                const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);
                const rect = container.getBoundingClientRect();
                initialLeft = rect.left;
                initialTop = rect.top;
                startX = clientX;
                startY = clientY;
                container.style.bottom = 'auto';
                container.style.right = 'auto';
                container.style.left = `${initialLeft}px`;
                container.style.top = `${initialTop}px`;
            };
            const doDrag = (e) => {
                if (!isDragging) return;
                e.preventDefault();
                const clientX = e.clientX || (e.touches ? e.touches[0].clientX : 0);
                const clientY = e.clientY || (e.touches ? e.touches[0].clientY : 0);
                container.style.left = `${initialLeft + (clientX - startX)}px`;
                container.style.top = `${initialTop + (clientY - startY)}px`;
            };
            const stopDrag = () => {
                if (!isDragging) return;
                isDragging = false;
                container.style.transition = '';
                container.style.cursor = 'move';
                safeStorage.setItem('audioPlayerPos', JSON.stringify({ left: container.style.left, top: container.style.top }));
            };
            container.addEventListener('mousedown', startDrag);
            container.addEventListener('touchstart', startDrag, { passive: false });
            document.addEventListener('mousemove', doDrag);
            document.addEventListener('touchmove', doDrag, { passive: false });
            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchend', stopDrag);
        }
    };

    const UI = {
        init() {
            this.animateCursor();
        },
        animateCursor() {
            State.cursor.x += (State.cursor.targetX - State.cursor.x) * CONFIG.cursorSpeed;
            State.cursor.y += (State.cursor.targetY - State.cursor.y) * CONFIG.cursorSpeed;
            DOM.cursor.style.transform = `translate3d(${State.cursor.x - 7.5}px, ${State.cursor.y - 1.5}px, 0)`;
            requestAnimationFrame(() => this.animateCursor());
        },
        startTypewriter() {
            clearTimeout(State.typewriter.timeoutId);
            DOM.typewriter.style.opacity = '0';
            State.typewriter.timeoutId = setTimeout(() => {
                DOM.typewriter.textContent = State.typewriter.phrases[State.typewriter.phraseIndex];
                DOM.typewriter.style.opacity = '1';
                State.typewriter.timeoutId = setTimeout(() => this.changeStatusText(), CONFIG.typewriterInterval);
            }, CONFIG.typewriterFade);
        },
        changeStatusText() {
            DOM.typewriter.style.opacity = '0';
            State.typewriter.timeoutId = setTimeout(() => {
                State.typewriter.phraseIndex = (State.typewriter.phraseIndex + 1) % State.typewriter.phrases.length;
                DOM.typewriter.textContent = State.typewriter.phrases[State.typewriter.phraseIndex];
                DOM.typewriter.style.opacity = '1';
                State.typewriter.timeoutId = setTimeout(() => this.changeStatusText(), CONFIG.typewriterInterval);
            }, CONFIG.typewriterFade);
        },
        showSection(sectionId) {
            document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
            document.getElementById(sectionId).classList.add('active');
            DOM.sidebar.classList.remove('active');
            DOM.menuToggle.classList.remove('active');
        },
        showToast(message) {
            DOM.toast.textContent = message;
            DOM.toast.classList.add('show');
            setTimeout(() => DOM.toast.classList.remove('show'), 2000);
        }
    };

    function bindEvents() {
        document.addEventListener('click', (e) => {
            const target = e.target;
            if (!target.closest('.lang-dropdown') && !target.closest('#lang-btn')) DOM.langDropdown.classList.remove('active');
            if (!target.closest('.theme-dropdown') && !target.closest('#theme-btn')) DOM.themeDropdown.classList.remove('active');
            if (!target.closest('.volume-popup') && !target.closest('#volume-btn')) DOM.audio.volumePopup.classList.remove('active');
            if (!target.closest('.sidebar') && !target.closest('#menu-toggle')) {
                DOM.sidebar.classList.remove('active');
                DOM.menuToggle.classList.remove('active');
            }
            if (!target.closest('.audio-player-container') && !target.closest('#audio-player-toggle')) {
                AudioPlayer.togglePlayerVisibility(false);
            }
            if (target.classList.contains('modal')) target.classList.remove('active');
            const langOption = target.closest('.lang-option');
            if (langOption) {
                LangManager.set(langOption.dataset.lang, true);
                DOM.langDropdown.classList.remove('active');
            }
            const themeOption = target.closest('.theme-option');
            if (themeOption) {
                ThemeManager.set(themeOption.dataset.theme);
                DOM.themeDropdown.classList.remove('active');
            }
            const sectionLink = target.closest('.sidebar .link-btn');
            if (sectionLink) {
                e.preventDefault();
                UI.showSection(sectionLink.dataset.section);
            }
            if (target.id === 'copy-password') {
                navigator.clipboard.writeText(target.textContent).then(() => UI.showToast(CONFIG.translations[State.currentLang].copied));
            }
        });
        document.addEventListener('mousemove', e => {
            State.cursor.targetX = e.clientX;
            State.cursor.targetY = e.clientY;
            DOM.cursor.style.opacity = '1';
            if (window.innerWidth > 768 && e.clientX < 20 && !DOM.sidebar.classList.contains('active')) {
                DOM.sidebar.classList.add('active');
                DOM.menuToggle.classList.add('active');
            }
        });
        document.addEventListener('mouseleave', () => { DOM.cursor.style.opacity = '0'; });
        DOM.langBtn.addEventListener('click', (e) => { e.stopPropagation(); DOM.langDropdown.classList.toggle('active'); DOM.themeDropdown.classList.remove('active'); });
        DOM.themeBtn.addEventListener('click', (e) => { e.stopPropagation(); DOM.themeDropdown.classList.toggle('active'); DOM.langDropdown.classList.remove('active'); });
        DOM.menuToggle.addEventListener('click', (e) => { e.stopPropagation(); DOM.menuToggle.classList.toggle('active'); DOM.sidebar.classList.toggle('active'); });
        DOM.telegramBtn.addEventListener('click', (e) => {
            e.preventDefault();
            DOM.noHelloModal.classList.add('active');
            DOM.noHelloCheckbox.checked = false;
            DOM.noHelloCheckbox.disabled = true;
            DOM.noHelloOverlay.style.display = 'block';
            DOM.noHelloSubmit.disabled = true;
            DOM.noHelloSubmit.style.opacity = '0.5';
            DOM.noHelloWarning.style.display = 'none';
        });
        DOM.noHelloLink.addEventListener('click', () => {
            DOM.noHelloCheckbox.disabled = false;
            DOM.noHelloOverlay.style.display = 'none';
            DOM.noHelloWarning.style.display = 'none';
        });
        DOM.noHelloOverlay.addEventListener('click', () => { DOM.noHelloWarning.style.display = 'block'; });
        DOM.noHelloCheckbox.addEventListener('change', () => {
            DOM.noHelloSubmit.disabled = !DOM.noHelloCheckbox.checked;
            DOM.noHelloSubmit.style.opacity = DOM.noHelloCheckbox.checked ? '1' : '0.5';
        });
        DOM.noHelloSubmit.addEventListener('click', () => {
            if (!DOM.noHelloSubmit.disabled) {
                window.open(atob(CONFIG.secretTgLink), '_blank');
                DOM.noHelloModal.classList.remove('active');
            }
        });
        DOM.oxideIdBtn.addEventListener('click', (e) => { e.preventDefault(); DOM.oxideIdModal.classList.add('active'); });
        DOM.oxideIdModal.querySelector('.modal-close-btn').addEventListener('click', () => DOM.oxideIdModal.classList.remove('active'));
        DOM.copyOxideIdBtn.addEventListener('click', () => {
            navigator.clipboard.writeText('W7-V29-NU').then(() => UI.showToast(CONFIG.translations[State.currentLang].copied));
        });
        document.addEventListener('dragstart', (e) => e.preventDefault());
    }

    function init() {
        LangManager.init();
        ThemeManager.init();
        UI.init();
        bindEvents();
        AudioPlayer.init();
    }

    init();
});