/* ════════════════════════════════════════
   VOIDARCADE — Main Application
   ════════════════════════════════════════ */

// ── Storage Utilities ──

const Storage = {
  _get(key) {
    try {
      return JSON.parse(localStorage.getItem(key)) || {};
    } catch {
      return {};
    }
  },

  _set(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  // Favorites
  getFavorites() {
    return this._get('va_favorites');
  },

  isFavorited(gameId) {
    return !!this.getFavorites()[gameId];
  },

  toggleFavorite(gameId) {
    const favs = this.getFavorites();
    if (favs[gameId]) {
      delete favs[gameId];
    } else {
      favs[gameId] = Date.now();
    }
    this._set('va_favorites', favs);
    return !!favs[gameId];
  },

  // Ratings
  getRatings() {
    return this._get('va_ratings');
  },

  getRating(gameId) {
    return this.getRatings()[gameId] || 0;
  },

  setRating(gameId, rating) {
    const ratings = this.getRatings();
    ratings[gameId] = rating;
    this._set('va_ratings', ratings);
  }
};


// ── Router ──

const Router = {
  routes: {},

  register(hash, handler) {
    this.routes[hash] = handler;
  },

  navigate(hash) {
    window.location.hash = hash;
  },

  getCurrentRoute() {
    return window.location.hash || '#home';
  },

  handleRoute() {
    const hash = this.getCurrentRoute();
    const [route, param] = hash.split('/');

    if (this.routes[route]) {
      this.routes[route](param);
    } else if (route.startsWith('#game-')) {
      // Handle #game-{id} routes
      const gameId = hash.substring(6); // Remove '#game-'
      if (this.routes['#game']) {
        this.routes['#game'](gameId);
      }
    } else if (route.startsWith('#category-')) {
      const category = hash.substring(10);
      if (this.routes['#category']) {
        this.routes['#category'](category);
      }
    } else {
      this.routes['#home']();
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  },

  init() {
    window.addEventListener('hashchange', () => this.handleRoute());
    this.handleRoute();
  }
};


// ── App State ──

const App = {
  searchQuery: '',
  activeGenre: 'All',
  sortBy: 'newest',

  init() {
    this.renderShell();
    this.bindHeaderEvents();

    Router.register('#home', () => this.renderHome());
    Router.register('#favorites', () => this.renderFavorites());
    Router.register('#game', (id) => this.renderGamePage(id));
    Router.register('#category', (genre) => this.renderCategory(genre));

    Router.init();
  },

  // ── Shell ──

  renderShell() {
    document.getElementById('app').innerHTML = `
      <header class="site-header">
        <div class="header-inner">
          <div class="logo" onclick="Router.navigate('#home')">
            VOID<span>ARCADE</span>
          </div>
          <nav>
            <ul class="nav-links">
              <li><a href="#home" class="nav-link" data-page="home">Games</a></li>
              <li><a href="#favorites" class="nav-link" data-page="favorites">Favorites</a></li>
            </ul>
          </nav>
          <div class="header-search">
            <span class="search-icon">&#128269;</span>
            <input type="text" id="searchInput" placeholder="Search games..." autocomplete="off" />
          </div>
        </div>
      </header>
      <main id="page-content"></main>
      <footer class="site-footer">
        <div class="footer-inner">
          <div class="footer-logo">VOID<span>ARCADE</span></div>
          <p>Curated games. No junk. Only the good stuff.</p>
        </div>
      </footer>
    `;
  },

  bindHeaderEvents() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim().toLowerCase();
      const currentRoute = Router.getCurrentRoute();
      if (currentRoute === '#home' || currentRoute === '') {
        this.renderHome(true);
      } else if (currentRoute.startsWith('#category-')) {
        const genre = currentRoute.substring(10);
        this.renderCategory(genre, true);
      }
    });
  },

  updateActiveNav() {
    const route = Router.getCurrentRoute();
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      const page = link.dataset.page;
      if (route === '#home' && page === 'home') link.classList.add('active');
      if (route === '#favorites' && page === 'favorites') link.classList.add('active');
    });
  },

  // ── Helpers ──

  getFilteredGames(genre) {
    let games = [...GAMES];

    // Genre filter
    if (genre && genre !== 'All') {
      games = games.filter(g => g.genre === genre);
    }

    // Search filter
    if (this.searchQuery) {
      games = games.filter(g =>
        g.title.toLowerCase().includes(this.searchQuery) ||
        g.description.toLowerCase().includes(this.searchQuery)
      );
    }

    // Sort
    switch (this.sortBy) {
      case 'newest':
        games.sort((a, b) => new Date(b.added) - new Date(a.added));
        break;
      case 'top-rated':
        games.sort((a, b) => b.rating - a.rating);
        break;
      case 'a-z':
        games.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return games;
  },

  renderStars(rating, small = true) {
    const full = Math.round(rating);
    let html = '';
    for (let i = 1; i <= 5; i++) {
      html += `<span class="star ${i <= full ? 'filled' : ''}">&#9733;</span>`;
    }
    return html;
  },

  svgThumb(game) {
    const pal = { Action:'#ff2d2d', Puzzle:'#a855f7', Adventure:'#22d3ee', Multiplayer:'#39ff14' };
    const accent = pal[game.genre] || '#ff2d2d';
    const safeTitle = game.title
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
    const words = safeTitle.split(' ');
    // Split title into up to 2 lines
    let line1 = '', line2 = '';
    let len = 0;
    words.forEach(w => {
      if (len + w.length <= 14) { line1 += (line1 ? ' ' : '') + w; len += w.length + 1; }
      else { line2 += (line2 ? ' ' : '') + w; }
    });
    if (line2.length > 18) line2 = line2.substring(0, 17) + '…';
    const y1 = line2 ? '118' : '128';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="250" viewBox="0 0 400 250">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#181818"/>
          <stop offset="100%" stop-color="#090909"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="250" fill="url(#bg)"/>
      <ellipse cx="200" cy="125" rx="130" ry="100" fill="url(#glow)"/>
      <polygon points="178,95 178,145 228,120" fill="${accent}" opacity="0.75"/>
      <rect x="0" y="218" width="400" height="32" fill="${accent}" opacity="0.1"/>
      <line x1="0" y1="218" x2="400" y2="218" stroke="${accent}" stroke-width="1" opacity="0.35"/>
      <text x="200" y="${y1}" font-family="Arial Black,Impact,sans-serif" font-size="22"
            font-weight="900" fill="white" text-anchor="middle" opacity="0.95">${line1}</text>
      ${line2 ? `<text x="200" y="${parseInt(y1)+26}" font-family="Arial Black,Impact,sans-serif" font-size="22"
            font-weight="900" fill="white" text-anchor="middle" opacity="0.95">${line2}</text>` : ''}
    </svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
  },

  onThumbError(img) {
    const game = GAMES.find(g => g.id === img.dataset.gameId);
    if (game) { img.onerror = null; img.src = this.svgThumb(game); }
  },

  renderGameCard(game) {
    const isFav = Storage.isFavorited(game.id);
    const userRating = Storage.getRating(game.id);
    const displayRating = userRating || game.rating;

    const thumbSrc = game.thumbnail || this.svgThumb(game);
    const thumbHtml = `<img src="${thumbSrc}" alt="${game.title}" data-game-id="${game.id}"
      onerror="App.onThumbError(this)" loading="lazy" />`;

    return `
      <div class="game-card" onclick="Router.navigate('#game-${game.id}')">
        <div class="card-thumb">
          ${thumbHtml}
          <span class="genre-badge ${game.genre}">${game.genre}</span>
          <button class="fav-btn ${isFav ? 'favorited' : ''}"
                  onclick="event.stopPropagation(); App.toggleCardFav('${game.id}', this)"
                  title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
            ${isFav ? '&#9829;' : '&#9825;'}
          </button>
        </div>
        <div class="card-info">
          <div class="card-title">${game.title}</div>
          <div class="card-rating">
            <div class="stars">${this.renderStars(displayRating)}</div>
            <span class="rating-value">${displayRating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    `;
  },

  toggleCardFav(gameId, btn) {
    const nowFav = Storage.toggleFavorite(gameId);
    btn.classList.toggle('favorited', nowFav);
    btn.innerHTML = nowFav ? '&#9829;' : '&#9825;';
    btn.title = nowFav ? 'Remove from favorites' : 'Add to favorites';
  },

  // ── Pages ──

  renderHome(preserveScroll = false) {
    this.updateActiveNav();
    const games = this.getFilteredGames(this.activeGenre);
    const genres = ['All', 'Action', 'Puzzle', 'Adventure', 'Multiplayer'];

    const content = document.getElementById('page-content');

    const heroHtml = !preserveScroll ? `
      <section class="hero">
        <h1>VOID<span>ARCADE</span></h1>
        <p>Hand-picked games. No shovelware. No garbage. Just pure, quality gaming.</p>
      </section>
    ` : '';

    const gridHtml = games.length > 0
      ? games.map(g => this.renderGameCard(g)).join('')
      : `<div class="no-results">
           <span class="no-results-icon">&#128683;</span>
           No games found. Try a different search or filter.
         </div>`;

    if (preserveScroll) {
      // Only update the grid, not the whole page
      const grid = content.querySelector('.game-grid');
      if (grid) {
        grid.innerHTML = gridHtml;
        // Update active genre pill
        content.querySelectorAll('.genre-pill').forEach(pill => {
          pill.classList.toggle('active', pill.dataset.genre === this.activeGenre);
        });
        return;
      }
    }

    content.innerHTML = `
      ${heroHtml}
      <div class="main-content">
        <div class="filter-bar">
          <div class="genre-filters">
            ${genres.map(g => `
              <button class="genre-pill ${g === this.activeGenre ? 'active' : ''}"
                      data-genre="${g}"
                      onclick="App.setGenre('${g}')">
                ${g}
              </button>
            `).join('')}
          </div>
          <select class="sort-select" onchange="App.setSort(this.value)">
            <option value="newest" ${this.sortBy === 'newest' ? 'selected' : ''}>Newest</option>
            <option value="top-rated" ${this.sortBy === 'top-rated' ? 'selected' : ''}>Top Rated</option>
            <option value="a-z" ${this.sortBy === 'a-z' ? 'selected' : ''}>A — Z</option>
          </select>
        </div>
        <div class="game-grid">
          ${gridHtml}
        </div>
      </div>
    `;
  },

  setGenre(genre) {
    this.activeGenre = genre;
    this.renderHome(true);
  },

  setSort(sort) {
    this.sortBy = sort;
    this.renderHome(true);
  },

  renderGamePage(gameId) {
    this.updateActiveNav();
    const game = GAMES.find(g => g.id === gameId);
    if (!game) {
      document.getElementById('page-content').innerHTML = `
        <div class="main-content">
          <div class="empty-state">
            <span class="empty-icon">&#128683;</span>
            <p>Game not found.</p>
            <br>
            <a href="#home" class="back-link">&#8592; Back to games</a>
          </div>
        </div>`;
      return;
    }

    const isFav = Storage.isFavorited(game.id);
    const userRating = Storage.getRating(game.id);

    const embedHtml = game.externalUrl
      ? `<iframe src="${game.externalUrl}" allowfullscreen
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-pointer-lock allow-top-navigation-by-user-activation"
            allow="fullscreen; pointer-lock"></iframe>`
      : `<div class="launch-area">
           <div class="launch-content">
             <span class="launch-icon">&#127918;</span>
             <p class="launch-coming-soon">Link coming soon</p>
           </div>
         </div>`;

    document.getElementById('page-content').innerHTML = `
      <div class="game-page">
        <a class="back-link" href="#home">&#8592; Back to games</a>

        <div class="game-embed-area">
          ${embedHtml}
        </div>

        <div class="game-details">
          <div class="game-title-section">
            <h1>${game.title}</h1>
            <span class="game-genre-tag genre-badge ${game.genre}">${game.genre}</span>
          </div>
          <div class="game-actions">
            <button class="game-fav-btn ${isFav ? 'favorited' : ''}" id="gameFavBtn"
                    onclick="App.toggleGameFav('${game.id}')">
              <span id="favIcon">${isFav ? '&#9829;' : '&#9825;'}</span>
              <span id="favText">${isFav ? 'Favorited' : 'Favorite'}</span>
            </button>
            ${game.externalUrl ? `<a href="${game.externalUrl}" target="_blank" rel="noopener noreferrer" class="popout-btn" title="Open in new tab">&#10138; Pop out</a>` : ''}
          </div>
        </div>

        <div class="game-rating-section" style="margin-bottom: 24px;">
          <span class="rating-label">Your Rating:</span>
          <div class="star-rating-interactive" id="starRating">
            ${[1,2,3,4,5].map(i => `
              <button class="star-btn ${i <= userRating ? 'filled' : ''}"
                      data-value="${i}"
                      onclick="App.setGameRating('${game.id}', ${i})"
                      onmouseenter="App.hoverStars(${i})"
                      onmouseleave="App.unhoverStars('${game.id}')">
                &#9733;
              </button>
            `).join('')}
          </div>
          <span class="rating-label" style="color: var(--text-secondary);">
            ${userRating ? userRating + '/5' : 'Not rated'}
          </span>
        </div>

        <div class="game-description">
          <h3>About This Game</h3>
          <p>${game.description}</p>
        </div>
      </div>
    `;
  },

  toggleGameFav(gameId) {
    const nowFav = Storage.toggleFavorite(gameId);
    const btn = document.getElementById('gameFavBtn');
    const icon = document.getElementById('favIcon');
    const text = document.getElementById('favText');
    btn.classList.toggle('favorited', nowFav);
    icon.innerHTML = nowFav ? '&#9829;' : '&#9825;';
    text.textContent = nowFav ? 'Favorited' : 'Favorite';
  },

  setGameRating(gameId, rating) {
    Storage.setRating(gameId, rating);
    // Re-render the game page to update
    this.renderGamePage(gameId);
  },

  hoverStars(value) {
    document.querySelectorAll('#starRating .star-btn').forEach(btn => {
      const v = parseInt(btn.dataset.value);
      btn.classList.toggle('hovered', v <= value);
    });
  },

  unhoverStars(gameId) {
    const current = Storage.getRating(gameId);
    document.querySelectorAll('#starRating .star-btn').forEach(btn => {
      btn.classList.remove('hovered');
      const v = parseInt(btn.dataset.value);
      btn.classList.toggle('filled', v <= current);
    });
  },

  renderFavorites() {
    this.updateActiveNav();
    const favs = Storage.getFavorites();
    const favGameIds = Object.keys(favs);
    const favGames = GAMES.filter(g => favGameIds.includes(g.id));

    // Sort by when they were favorited (most recent first)
    favGames.sort((a, b) => (favs[b.id] || 0) - (favs[a.id] || 0));

    const gridHtml = favGames.length > 0
      ? favGames.map(g => this.renderGameCard(g)).join('')
      : `<div class="empty-state">
           <span class="empty-icon">&#9825;</span>
           <p>No favorites yet. Click the heart on any game to save it here.</p>
         </div>`;

    document.getElementById('page-content').innerHTML = `
      <div class="main-content">
        <div class="favorites-header">
          <h1>YOUR FAVORITES</h1>
          <p>${favGames.length} game${favGames.length !== 1 ? 's' : ''} saved</p>
        </div>
        <div class="game-grid">
          ${gridHtml}
        </div>
      </div>
    `;
  },

  renderCategory(genre, preserveScroll = false) {
    this.updateActiveNav();
    const games = this.getFilteredGames(genre);

    const gridHtml = games.length > 0
      ? games.map(g => this.renderGameCard(g)).join('')
      : `<div class="no-results">
           <span class="no-results-icon">&#128683;</span>
           No games found in this category.
         </div>`;

    if (preserveScroll) {
      const grid = document.querySelector('.game-grid');
      if (grid) {
        grid.innerHTML = gridHtml;
        return;
      }
    }

    document.getElementById('page-content').innerHTML = `
      <div class="main-content">
        <div class="category-header">
          <h1>${genre.toUpperCase()}</h1>
          <p class="game-count">${games.length} game${games.length !== 1 ? 's' : ''}</p>
        </div>
        <div class="game-grid">
          ${gridHtml}
        </div>
      </div>
    `;
  }
};


// ── Boot ──
document.addEventListener('DOMContentLoaded', () => App.init());
