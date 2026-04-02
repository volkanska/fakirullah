/* ================================================
   MUHAMMED FAKİRULLAH — SCRIPT.JS
   ================================================ */

// ---- Track Data ----
const BASE_URL = 'https://www.muhammedfakirullah.com/mp3/';

const tracks = [
    // 1. ALBÜM — Ya Rabbena I (2008)
    { id: 1,  title: 'İbadallah',             album: 'Ya Rabbena I',    group: 'album1', file: '23176ibadellah.mp3' },
    { id: 2,  title: 'Tevhide Gel',           album: 'Ya Rabbena I',    group: 'album1', file: '26985Tevhide%20Gel.mp3' },
    { id: 3,  title: 'Tek Bulayım',           album: 'Ya Rabbena I',    group: 'album1', file: '27580TekBulayim.mp3' },
    { id: 4,  title: 'Allahım Gerek',         album: 'Ya Rabbena I',    group: 'album1', file: '22162AllahimGerek.mp3' },
    { id: 5,  title: 'Kabre Varacağım Gece',  album: 'Ya Rabbena I',    group: 'album1', file: '23047kabrevaracagim-gece.mp3' },
    { id: 6,  title: 'Yetiş Ya Rufai',        album: 'Ya Rabbena I',    group: 'album1', file: '22894Yetis-Ya-Rufai.mp3' },
    { id: 7,  title: 'Şefaat Ya Resulallah',  album: 'Ya Rabbena I',    group: 'album1', file: '26794sefaat%20ya%20resulallah.mp3' },
    { id: 8,  title: 'Ya Rabbena',            album: 'Ya Rabbena I',    group: 'album1', file: '26532Ya%20Rabbena.mp3' },
    { id: 9,  title: 'Dil Hanesi',            album: 'Ya Rabbena I',    group: 'album1', file: '24895Dil%20Hanesi.mp3' },

    // 2. ALBÜM — Ya Rabbena II
    { id: 10, title: 'Esma-ül Hüsna',        album: 'Ya Rabbena II',   group: 'album2', file: '20585Album%20Esmaul%20Husna.mp3' },
    { id: 11, title: 'Demedim mi?',           album: 'Ya Rabbena II',   group: 'album2', file: '20184Album%20Demedim%20mi.mp3' },
    { id: 12, title: 'Em Günahkarın',         album: 'Ya Rabbena II',   group: 'album2', file: '30233Album%20Em%20Gunehkarin.mp3' },
    { id: 13, title: 'Ne Fayda',              album: 'Ya Rabbena II',   group: 'album2', file: '20564Album%20Ne%20Fayda.mp3' },
    { id: 14, title: 'Mevla Ya Salli',        album: 'Ya Rabbena II',   group: 'album2', file: '24988Album%20Mevla%20Ya%20Salli.mp3' },
    { id: 15, title: 'Ya Rabbena II',         album: 'Ya Rabbena II',   group: 'album2', file: '26249Album%20Ya%20Rabbena%20II.mp3' },
    { id: 16, title: 'Hesapji Heye',          album: 'Ya Rabbena II',   group: 'album2', file: '31559Album%20Hesapji%20Heye.mp3' },
    { id: 17, title: 'Nasihat',               album: 'Ya Rabbena II',   group: 'album2', file: '30129Album%20Nefsine%20Uyma.mp3' },
    { id: 18, title: 'Medineye',              album: 'Ya Rabbena II',   group: 'album2', file: '22642Album%20Medineye%20Varamadim.mp3' },

    // 3. ALBÜM — Ey Deste-i Gül (2015)
    { id: 19, title: 'Ey Deste-i Gül',       album: 'Ey Deste-i Gül',  group: 'album3', file: '26688M-F-Ey-desteigul.mp3' },
    { id: 20, title: 'Deli Gönül',            album: 'Ey Deste-i Gül',  group: 'album3', file: 'deligonul.mp3' },
    { id: 21, title: 'Bize Kadiriler Derler', album: 'Ey Deste-i Gül',  group: 'album3', file: 'bizekadirilerderler.mp3' },
    { id: 22, title: 'Muhabbet Olmazsa Olmaz',album: 'Ey Deste-i Gül',  group: 'album3', file: '2684504%20Muhammed%20Fakirullah%20%20%20Muhabbet%20Olmazsa%20Olmaz%20%20%202015.mp3' },
    { id: 23, title: 'İllallah Diyenler',     album: 'Ey Deste-i Gül',  group: 'album3', file: 'illallahdiyenler.mp3' },
    { id: 24, title: 'Ey Yolcular',           album: 'Ey Deste-i Gül',  group: 'album3', file: 'eyyolcular.mp3' },
    { id: 25, title: 'Deriyi Bağlar',         album: 'Ey Deste-i Gül',  group: 'album3', file: 'deriyibaglar.mp3' },
    { id: 26, title: 'Geylani',               album: 'Ey Deste-i Gül',  group: 'album3', file: 'geylanii.mp3' },
    { id: 27, title: 'Sana Yalvarmadan',      album: 'Ey Deste-i Gül',  group: 'album3', file: '2811809%20Muhammed%20Fakirullah%20%20%20Sana%20Yalvarmadan%20Gayri%20%20%202015.mp3' },

    // ŞİİRLER
    { id: 28, title: "Mü'min Kardeşim",       album: 'Şiirler',         group: 'siirler', file: '25453Album%20MuMiN%20Kardesim.mp3' },
    { id: 29, title: 'Daha Kuran Ne Desin',    album: 'Şiirler',         group: 'siirler', file: '23816Muhammed%20Fakirullah%20Daha%20Kuran%20Ne%20Desin.mp3' },
    { id: 30, title: 'Mevla Bilir Ya',         album: 'Şiirler',         group: 'siirler', file: '26474Muhammed%20Fakirullah%20-%20Mevla%20Bilirya.mp3' },
    { id: 31, title: 'İnsan Olmak',            album: 'Şiirler',         group: 'siirler', file: '26246Muhammed%20Fakirullah%20-%20insan%20Olmak%20bu%20Kadar%20mi%20Zorlasti.mp3' },
    { id: 32, title: 'Secdeden Gayrı',         album: 'Şiirler',         group: 'siirler', file: '20829Muhammed%20Fakirullah%20Secdeden%20Gayri.mp3' },
    { id: 33, title: 'Sofi Muhammed',          album: 'Şiirler',         group: 'siirler', file: '21781Sofi%20MUHAMMED.mp3' },
    { id: 34, title: 'Seyyit Hüseyin',         album: 'Şiirler',         group: 'siirler', file: '285241-SEYYID%20HUSEYIN%20HZ.mp3' },
    { id: 35, title: 'Esma-i Nebi',            album: 'Şiirler',         group: 'siirler', file: 'esmaiinebi.mp3' },

    // SINGLES
    { id: 36, title: 'Tövbe Et Yalvar',        album: 'Single',          group: 'singles', file: '21447TovbeET.mp3' },
    { id: 37, title: "Meded Aman Allah'ım",    album: 'Single',          group: 'singles', file: '20616AUD-20230112-WA0001.m4a' },
    { id: 38, title: 'Seyyid Rufai',           album: 'Single',          group: 'singles', file: '22381muhammed-fakirullah-seyyid-rufai-ilahisi.mp3' },
    { id: 39, title: 'Sevdalıyım',             album: 'Single',          group: 'singles', file: '31764muhammed-fakirullah-sevdaliyim-single-2020.mp3' },
    { id: 40, title: 'Mevlidi Nebi Merhaba',   album: 'Single',          group: 'singles', file: '28656mevlid.mp3' },
];

// Album cover mapping
const albumCovers = {
    'Ya Rabbena I':   'https://www.muhammedfakirullah.com/resimler/09-12-2021--10-50-44-newkapak-300x165.gif',
    'Ya Rabbena II':  'https://www.muhammedfakirullah.com/resimler/09-12-2021--11-02-52-deste.jpg',
    'Ey Deste-i Gül': 'https://www.muhammedfakirullah.com/resimler/09-12-2021--11-03-12-album_351357_250_250.jpg',
    'Şiirler':        'https://www.muhammedfakirullah.com/resimler/slider/249082522922728301551resm.jpg',
    'Single':         'https://www.muhammedfakirullah.com/resimler/slider/249082522922728301551resm.jpg',
};

// ---- Video Data ----
const videos = [
    { id: '-919dZfDUNQ', title: 'Etme (Şiiri)' },
    { id: 'xh-zJUIG4Rc', title: 'Ya İlahi Senden Bir Dileğim Var' },
    { id: 'hDxJDz8HwKw', title: 'Emri Bil Maruf Nehyi Anil Münker' },
    { id: 'QDbhiCX9IbY', title: 'Ölçü Ve Tartı / Muhabbet Kervanı' },
    { id: 'VJ4BTbm8cFc', title: 'Muhabbet Kervanı - Cuma Sohbeti 2' },
    { id: 'zh-6QZGXYJA', title: 'Muhabbet Kervanı - Cuma Sohbeti' },
    { id: 'Oye4rXSPe6U', title: 'Hayırlı Evladın Anne Babaya Faydaları' },
    { id: '_FEIVbhrCKs', title: 'Güzel Huy & İyi Ahlak' },
    { id: 'asR4Y-cUHtI', title: 'Borç Vermek' },
    { id: 'eMC1kbHeZZI', title: 'Peygamber Sevgisi' },
    { id: 'VPWNfxThYgU', title: 'Doğru Konuşmanın Sevapları' },
    { id: 'b1pvZpP_Io8', title: 'Dili Tutmanın Sevapları' },
    { id: 'W8WdTJiH1AM', title: 'Nefsine Uymak' },
    { id: 'qbxeqrpisZc', title: "Efendimiz'in Mucizeleri" },
    { id: '6eygkWQ915Y', title: 'Sünnete Uymak' },
    { id: 't-jMu-qP_9A', title: 'Salih Ameller' },
    { id: 'ByHvZtYVo8k', title: 'Allah Korkusu' },
    { id: 'nHDZBEJVxk4', title: 'İbadet Yapmanın Sevapları' },
    { id: 'z3_UhggtRc0', title: 'Takva Sahibi Olmanın Sevapları' },
];

// ---- DOM References ----
const audio = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const trackNameEl = document.getElementById('trackName');
const albumNameEl = document.getElementById('albumName');
const playerCover = document.getElementById('playerCover');
const soundWaves = document.getElementById('soundWaves');
const volumeBar = document.getElementById('volumeBar');
const volumeFill = document.getElementById('volumeFill');
const muteBtn = document.getElementById('muteBtn');
const volIcon = document.getElementById('volIcon');
const playlistList = document.getElementById('playlistList');
const playlistSearch = document.getElementById('playlistSearch');
const playlistTabs = document.getElementById('playlistTabs');

// ---- Player State ----
let currentTrackIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0=off, 1=all, 2=one
let currentVolume = 0.8;
let currentFilter = 'all';

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initPlayer();
    renderPlaylist();
    renderVideos();
    initQuotesCarousel();
    initScrollAnimations();
    initStatCounters();
    initAlbumCards();
    initMiniPlayer();
    restoreLastPlayed();
});

// ================================================
// NAVBAR
// ================================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll shrink
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
        updateActiveNavLink();
    });

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        const isOpen = navMenu.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
}

// ================================================
// MUSIC PLAYER
// ================================================
function initPlayer() {
    audio.volume = currentVolume;
    volumeFill.style.width = (currentVolume * 100) + '%';

    // Play/Pause
    playBtn.addEventListener('click', togglePlay);

    // Prev/Next
    prevBtn.addEventListener('click', prevTrack);
    nextBtn.addEventListener('click', nextTrack);

    // Shuffle
    shuffleBtn.addEventListener('click', () => {
        isShuffle = !isShuffle;
        shuffleBtn.classList.toggle('active', isShuffle);
    });

    // Repeat
    repeatBtn.addEventListener('click', () => {
        repeatMode = (repeatMode + 1) % 3;
        repeatBtn.classList.toggle('active', repeatMode > 0);
        if (repeatMode === 2) {
            repeatBtn.innerHTML = '<i class="fas fa-repeat"></i><span style="font-size:0.55rem;position:absolute;margin-top:8px;">1</span>';
        } else {
            repeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        }
    });

    // Progress bar
    progressBar.addEventListener('click', (e) => {
        const rect = progressBar.getBoundingClientRect();
        const pct = (e.clientX - rect.left) / rect.width;
        if (audio.duration) {
            audio.currentTime = pct * audio.duration;
        }
    });

    // Audio events
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', () => {
        totalTimeEl.textContent = formatTime(audio.duration);
    });
    audio.addEventListener('ended', onTrackEnd);

    // Volume
    volumeBar.addEventListener('click', (e) => {
        const rect = volumeBar.getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        setVolume(pct);
    });

    muteBtn.addEventListener('click', toggleMute);

    // Search
    playlistSearch.addEventListener('input', filterPlaylist);

    // Tabs
    playlistTabs.addEventListener('click', (e) => {
        if (!e.target.classList.contains('tab-btn')) return;
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentFilter = e.target.dataset.album;
        filterPlaylist();
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', handleKeyboard);
}

function loadTrack(index) {
    const track = tracks[index];
    audio.src = BASE_URL + track.file;
    trackNameEl.textContent = track.title;
    albumNameEl.textContent = track.album;
    playerCover.src = albumCovers[track.album] || albumCovers['Single'];
    currentTrackIndex = index;

    // Update playlist highlight
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        item.classList.toggle('active', parseInt(item.dataset.index) === index);
    });

    // Scroll active item into view
    const activeItem = document.querySelector('.playlist-item.active');
    if (activeItem) {
        activeItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }

    // Update mini player
    const miniTrack = document.getElementById('miniTrackName');
    const miniAlbum = document.getElementById('miniAlbumName');
    if (miniTrack) miniTrack.textContent = track.title;
    if (miniAlbum) miniAlbum.textContent = track.album;

    // Announce to screen readers
    const announce = document.getElementById('playerAnnounce');
    if (announce) announce.textContent = track.title + ' - ' + track.album + ' çalınıyor';

    // Save to localStorage
    localStorage.setItem('mf_lastTrack', index);
}

function togglePlay() {
    if (isPlaying) {
        audio.pause();
    } else {
        if (!audio.src || audio.src === window.location.href) {
            loadTrack(currentTrackIndex);
        }
        audio.play().catch(() => {});
    }
    isPlaying = !isPlaying;
    updatePlayState();
}

function updatePlayState() {
    playIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
    soundWaves.classList.toggle('active', isPlaying);

    // Mini player icon sync
    const miniIcon = document.getElementById('miniPlayIcon');
    if (miniIcon) miniIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
}

function prevTrack() {
    if (audio.currentTime > 3) {
        audio.currentTime = 0;
        return;
    }
    let idx;
    if (isShuffle) {
        idx = Math.floor(Math.random() * tracks.length);
    } else {
        idx = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    }
    loadTrack(idx);
    if (isPlaying) audio.play().catch(() => {});
}

function nextTrack() {
    let idx;
    if (isShuffle) {
        idx = Math.floor(Math.random() * tracks.length);
    } else {
        idx = (currentTrackIndex + 1) % tracks.length;
    }
    loadTrack(idx);
    if (isPlaying) audio.play().catch(() => {});
}

function onTrackEnd() {
    if (repeatMode === 2) {
        audio.currentTime = 0;
        audio.play().catch(() => {});
    } else if (repeatMode === 1) {
        nextTrack();
    } else {
        if (currentTrackIndex < tracks.length - 1) {
            nextTrack();
        } else {
            isPlaying = false;
            updatePlayState();
        }
    }
}

function updateProgress() {
    if (!audio.duration) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = pct + '%';
    currentTimeEl.textContent = formatTime(audio.currentTime);

    // Mini player progress
    const miniFill = document.getElementById('miniProgressFill');
    if (miniFill) miniFill.style.width = pct + '%';
}

function formatTime(sec) {
    if (!sec || isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
}

function setVolume(val) {
    currentVolume = val;
    audio.volume = val;
    audio.muted = false;
    volumeFill.style.width = (val * 100) + '%';
    updateVolIcon();
}

function toggleMute() {
    audio.muted = !audio.muted;
    if (audio.muted) {
        volumeFill.style.width = '0%';
    } else {
        volumeFill.style.width = (currentVolume * 100) + '%';
    }
    updateVolIcon();
}

function updateVolIcon() {
    if (audio.muted || audio.volume === 0) {
        volIcon.className = 'fas fa-volume-xmark';
    } else if (audio.volume < 0.5) {
        volIcon.className = 'fas fa-volume-low';
    } else {
        volIcon.className = 'fas fa-volume-high';
    }
}

function handleKeyboard(e) {
    // Don't trigger when typing in search
    if (e.target.tagName === 'INPUT') return;

    switch (e.key) {
        case ' ':
            e.preventDefault();
            togglePlay();
            break;
        case 'ArrowLeft':
            prevTrack();
            break;
        case 'ArrowRight':
            nextTrack();
            break;
        case 'm':
        case 'M':
            toggleMute();
            break;
    }
}

function restoreLastPlayed() {
    const last = localStorage.getItem('mf_lastTrack');
    if (last !== null) {
        currentTrackIndex = parseInt(last);
    }
    loadTrack(currentTrackIndex);
}

// ---- Playlist Rendering ----
function renderPlaylist() {
    playlistList.innerHTML = '';
    tracks.forEach((track, i) => {
        const item = document.createElement('div');
        item.className = 'playlist-item' + (i === currentTrackIndex ? ' active' : '');
        item.dataset.index = i;
        item.dataset.group = track.group;
        item.innerHTML = `
            <span class="track-number">${track.id}</span>
            <div class="track-info">
                <div class="track-title">${track.title}</div>
                <div class="track-album">${track.album}</div>
            </div>
            <i class="fas fa-play track-play-icon"></i>
        `;
        item.addEventListener('click', () => {
            loadTrack(i);
            isPlaying = true;
            audio.play().catch(() => {});
            updatePlayState();
        });
        playlistList.appendChild(item);
    });
}

function filterPlaylist() {
    const query = playlistSearch.value.toLowerCase().trim();
    const items = playlistList.querySelectorAll('.playlist-item');

    items.forEach(item => {
        const idx = parseInt(item.dataset.index);
        const track = tracks[idx];
        const matchesFilter = currentFilter === 'all' || track.group === currentFilter;
        const matchesSearch = !query ||
            track.title.toLowerCase().includes(query) ||
            track.album.toLowerCase().includes(query);

        item.style.display = (matchesFilter && matchesSearch) ? 'flex' : 'none';
    });
}

// ================================================
// VIDEOS
// ================================================
function renderVideos() {
    const grid = document.getElementById('videoGrid');
    const showMoreBtn = document.getElementById('showMoreVideos');
    let showAll = false;

    grid.innerHTML = '';
    videos.forEach((video, i) => {
        const card = document.createElement('div');
        card.className = 'video-card' + (i >= 6 ? ' hidden' : '');
        card.innerHTML = `
            <div class="video-thumb">
                <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}" loading="lazy">
                <div class="video-play"><i class="fas fa-play"></i></div>
            </div>
            <div class="video-card-info">
                <h4>${video.title}</h4>
            </div>
        `;
        card.addEventListener('click', () => openVideoModal(video.id));
        grid.appendChild(card);
    });

    showMoreBtn.addEventListener('click', () => {
        showAll = !showAll;
        grid.querySelectorAll('.video-card').forEach((card, i) => {
            if (i >= 6) card.classList.toggle('hidden', !showAll);
        });
        showMoreBtn.classList.toggle('expanded', showAll);
        showMoreBtn.innerHTML = showAll
            ? 'Daha Az Göster <i class="fas fa-chevron-up"></i>'
            : 'Tümünü Göster <i class="fas fa-chevron-down"></i>';
    });
}

document.getElementById('modalBackdrop').addEventListener('click', closeVideoModal);
document.getElementById('modalClose').addEventListener('click', closeVideoModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeVideoModal();
});

// ================================================
// QUOTES CAROUSEL
// ================================================
function initQuotesCarousel() {
    const track = document.getElementById('quotesTrack');
    const dotsContainer = document.getElementById('quotesDots');
    const prevBtn = document.getElementById('quotePrev');
    const nextBtn = document.getElementById('quoteNext');
    const cards = track.querySelectorAll('.quote-card');
    let current = 0;
    let autoplayTimer;

    // Create dots
    cards.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'quote-dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goTo(i));
        dotsContainer.appendChild(dot);
    });

    function goTo(idx) {
        current = idx;
        track.style.transform = `translateX(-${current * 100}%)`;
        dotsContainer.querySelectorAll('.quote-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });
        resetAutoplay();
    }

    function next() {
        goTo((current + 1) % cards.length);
    }

    function prev() {
        goTo((current - 1 + cards.length) % cards.length);
    }

    function resetAutoplay() {
        clearInterval(autoplayTimer);
        autoplayTimer = setInterval(next, 5000);
    }

    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);

    resetAutoplay();
}

// ================================================
// SCROLL ANIMATIONS
// ================================================
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ================================================
// STAT COUNTERS
// ================================================
function initStatCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });

    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) observer.observe(statsGrid);
}

function animateCounters() {
    document.querySelectorAll('.stat-number').forEach(el => {
        const target = parseInt(el.dataset.target);
        const duration = 1500;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(target * ease);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target + '+';
        }

        requestAnimationFrame(update);
    });
}

// ================================================
// ALBUM CARDS
// ================================================
function initAlbumCards() {
    document.querySelectorAll('.album-card').forEach(card => {
        card.addEventListener('click', () => {
            const albumGroup = card.dataset.album;
            // Switch to album tab
            document.querySelectorAll('.tab-btn').forEach(b => {
                b.classList.toggle('active', b.dataset.album === albumGroup);
            });
            currentFilter = albumGroup;
            filterPlaylist();

            // Play first track of album
            const firstTrack = tracks.findIndex(t => t.group === albumGroup);
            if (firstTrack !== -1) {
                loadTrack(firstTrack);
                isPlaying = true;
                audio.play().catch(() => {});
                updatePlayState();
            }

            // Scroll to player
            document.getElementById('ilahiler').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// ================================================
// MINI PLAYER (Sticky Bottom)
// ================================================
function initMiniPlayer() {
    const miniPlayer = document.getElementById('miniPlayer');
    const miniPlayBtn = document.getElementById('miniPlayBtn');
    const miniNextBtn = document.getElementById('miniNextBtn');
    const ilahilerSection = document.getElementById('ilahiler');

    if (!miniPlayer || !ilahilerSection) return;

    // Show mini player when scrolled past ilahiler section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Show when ilahiler is NOT visible AND music has been interacted with
            if (!entry.isIntersecting && (isPlaying || audio.currentTime > 0)) {
                miniPlayer.classList.add('visible');
            } else {
                miniPlayer.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    observer.observe(ilahilerSection);

    // Mini player controls
    if (miniPlayBtn) {
        miniPlayBtn.addEventListener('click', togglePlay);
    }
    if (miniNextBtn) {
        miniNextBtn.addEventListener('click', nextTrack);
    }
}

// ================================================
// MODAL OVERSCROLL FIX
// ================================================
function openVideoModal(videoId) {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modalVideo.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="Video oynatıcı" allowfullscreen allow="autoplay"></iframe>`;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.body.style.overscrollBehavior = 'contain';
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    modal.classList.remove('active');
    modalVideo.innerHTML = '';
    document.body.style.overflow = '';
    document.body.style.overscrollBehavior = '';
}
