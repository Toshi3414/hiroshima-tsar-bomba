const GAMES = [

  // ══════════════════════════════════════════
  // ACTION
  // ══════════════════════════════════════════

  {
    id: "madness-project-nexus",
    title: "Madness: Project Nexus",
    genre: "Action",
    description: "The original Madness Combat browser game from Newgrounds. Stickman carnage at its absolute finest — brutal, addictive, and stylishly violent. A stone-cold classic of the internet era.",
    externalUrl: "https://www.newgrounds.com/portal/view/592473",
    rating: 4.7, added: "2026-03-15"
  },
  {
    id: "sheriffs-compound",
    title: "Sheriff's Compound",
    genre: "Action",
    description: "Another Madness Combat style massacre. Fight through a sheriff's compound, gunning down waves of enemies with brutal efficiency. Pure stick-figure carnage.",
    externalUrl: "https://kbhgames.com/game/madness-sherrifs-compound",
    rating: 4.3, added: "2026-03-15"
  },
  {
    id: "blades-bedlam",
    title: "Blades & Bedlam",
    genre: "Action",
    description: "Hack and slash your way through dungeons in this frantic action RPG. Fast combat, satisfying kills, and gear upgrades keep you coming back for more.",
    externalUrl: "https://kbhgames.com/game/blade-and-bedlam",
    rating: 4.4, added: "2026-03-14"
  },
  {
    id: "ragdoll-archers",
    title: "Ragdoll Archers",
    genre: "Action",
    description: "Physics-based archery with ragdoll characters. Draw back your bow and send your enemies flying into walls and off ledges. Satisfying, chaotic, and impossibly addictive.",
    externalUrl: "https://ragdollarchers2.io/",
    rating: 4.3, added: "2026-03-15"
  },
  {
    id: "war-the-knights",
    title: "War: The Knights",
    genre: "Action",
    description: "Armored knights clash in frantic medieval combat. Command your forces, upgrade your gear, and crush every enemy that stands between you and total domination.",
    externalUrl: "https://www.crazygames.com/game/war-the-knights",
    rating: 4.0, added: "2026-03-15"
  },
  {
    id: "happy-wheels",
    title: "Happy Wheels",
    genre: "Action",
    description: "Physics-based ragdoll carnage. Choose a character, navigate an obstacle course, and watch them get absolutely destroyed. Gory, hilarious, and completely unhinged.",
    externalUrl: "https://kbhgames.com/game/happy-wheels",
    rating: 4.7, added: "2026-03-12"
  },
  {
    id: "krunker",
    title: "Krunker.io",
    genre: "Action",
    description: "Fast-paced browser FPS with a pixelated art style. No download needed — just pick your class and start fragging. Surprisingly deep movement mechanics for a .io game.",
    externalUrl: "https://krunker.io",
    rating: 4.5, added: "2026-03-15"
  },
  {
    id: "shell-shockers",
    title: "Shell Shockers",
    genre: "Action",
    description: "First-person shooter where every character is an egg. Scramble your opponents before they crack you open. One of the best browser FPS games ever made, full stop.",
    externalUrl: "https://shellshock.io",
    rating: 4.6, added: "2026-03-15"
  },
  {
    id: "gats",
    title: "Gats.io",
    genre: "Action",
    description: "Top-down browser shooter with destructible environments. Stack sandbags, grab weapon crates, and outgun everyone in your path. Simple controls, surprisingly deep tactics.",
    externalUrl: "https://gats.io",
    rating: 4.2, added: "2026-03-14"
  },
  {
    id: "ovo",
    title: "OvO",
    genre: "Action",
    description: "Slick parkour platformer with buttery smooth movement. Slide, jump, and wall-run through increasingly brutal obstacle courses. Minimal design, maximum satisfaction.",
    externalUrl: "https://www.coolmathgames.com/0-ovo",
    rating: 4.4, added: "2026-03-14"
  },
  {
    id: "bloody-day",
    title: "Bloody Day",
    genre: "Action",
    description: "Stick figure mayhem with over-the-top gore. Shoot, slash, and obliterate everything in sight. Simple but endlessly satisfying carnage.",
    externalUrl: "https://kbhgames.com/game/bloody-day",
    rating: 4.1, added: "2026-02-20"
  },
  {
    id: "calamity-king",
    title: "Calamity King",
    genre: "Action",
    description: "Run, gun, and wreak havoc as the Calamity King. Fast-paced side-scrolling action with tonnes of enemies and explosive weapons.",
    externalUrl: "https://kbhgames.com/game/calamity-king",
    rating: 3.9, added: "2026-02-15"
  },
  {
    id: "thing-thing-1",
    title: "Thing-Thing Arena",
    genre: "Action",
    description: "Arena survival shooter with a customizable stick figure. Mow down waves of enemies, collect weapons, and see how long you can last. A Newgrounds era classic.",
    externalUrl: "https://kbhgames.com/game/thing-thing-arena",
    rating: 4.0, added: "2026-01-20"
  },
  {
    id: "thing-thing-2",
    title: "Thing-Thing Arena 2",
    genre: "Action",
    description: "More arenas, more weapons, more chaos. The sequel improves on every aspect — bigger maps, more enemy types, and the same satisfying gunplay.",
    externalUrl: "https://kbhgames.com/game/thing-thing-arena-2",
    rating: 4.1, added: "2026-01-22"
  },
  {
    id: "thing-thing-3",
    title: "Thing-Thing 3",
    genre: "Action",
    description: "The Thing-Thing series goes full story mode. Battle through levels, unlock new weapons, and survive increasingly brutal encounters in this stick figure saga.",
    externalUrl: "https://kbhgames.com/game/thing-thing-arena-3",
    rating: 4.2, added: "2026-01-25"
  },
  {
    id: "pacman",
    title: "Pac-Man",
    genre: "Action",
    description: "The original arcade legend. Navigate the maze, eat the dots, dodge the ghosts. Deceptively simple, timeless, and still as addictive as it was in 1980.",
    externalUrl: "https://freepacman.org/",
    rating: 4.5, added: "2026-02-01"
  },
  {
    id: "undyne-fight",
    title: "Undyne: The Unfair Fight",
    genre: "Action",
    description: "Fan-made Undertale boss fight — Undyne cranked up to maximum brutality. Dodge relentless spear attacks in a neon-lit arena. Incredibly hard. Incredibly good.",
    externalUrl: "https://doodle-pile.gitlab.io/unfair-undyne/v0.99/",
    rating: 4.5, added: "2026-03-01"
  },
  {
    id: "sans-fight",
    title: "Sans: The Final Boss",
    genre: "Action",
    description: "The most notorious boss fight in gaming history, recreated in the browser. Sans hits like a truck. Every attack pattern is a puzzle. Get dunked on.",
    externalUrl: "https://jcw87.github.io/c2-sans-fight/",
    rating: 4.8, added: "2026-03-01"
  },
  {
    id: "escape-road",
    title: "Escape Road",
    genre: "Action",
    description: "High-speed police chase. Weave through traffic, avoid roadblocks, and keep your foot on the gas. One wrong move and it's over. Tense, fast, relentless.",
    externalUrl: "https://escaperoad.io/escape-road",
    rating: 4.2, added: "2026-03-08"
  },
  {
    id: "blood-money",
    title: "Blood Money",
    genre: "Action",
    description: "Top-down heist shooter. Grab the cash, eliminate threats, and get out alive. Fast and brutal — no room for hesitation.",
    externalUrl: "https://blood-money.io/",
    rating: 4.0, added: "2026-03-05"
  },

  // ── SIFT HEADS SERIES ──

  {
    id: "sift-heads-0",
    title: "Sift Heads 0",
    genre: "Action",
    description: "Where it all began. The origin story of Vinnie, Kiro, and Shorty. Point-and-click assassin gameplay that launched one of Flash gaming's most iconic series.",
    externalUrl: "https://kbhgames.com/game/sift-heads-0",
    rating: 4.0, added: "2026-01-01"
  },
  {
    id: "sift-heads-1-remastered",
    title: "Sift Heads 1: Remastered",
    genre: "Action",
    description: "The classic first episode, fully remastered. Vinnie takes his first contracts in a dark and gritty city. Slick animations, brutal kills, iconic style.",
    externalUrl: "https://kbhgames.com/game/sift-heads-1-remastered",
    rating: 4.2, added: "2026-01-03"
  },
  {
    id: "sift-heads-2",
    title: "Sift Heads 2",
    genre: "Action",
    description: "Vinnie's back and the city is dirtier than ever. More missions, new characters, and the same ruthless click-to-kill gameplay that made the series a legend.",
    externalUrl: "https://kbhgames.com/game/sift-heads-2",
    rating: 4.2, added: "2026-01-05"
  },
  {
    id: "sift-heads-3",
    title: "Sift Heads 3",
    genre: "Action",
    description: "The criminal underworld gets deeper. Vinnie faces bigger targets and higher stakes. More weapons, more story, more carnage.",
    externalUrl: "https://kbhgames.com/game/sift-heads-3",
    rating: 4.3, added: "2026-01-07"
  },
  {
    id: "sift-heads-4",
    title: "Sift Heads 4",
    genre: "Action",
    description: "Vinnie travels internationally for the first time. New locations, a vendetta storyline, and the series' sharpest gameplay yet.",
    externalUrl: "https://kbhgames.com/game/sift-heads-4",
    rating: 4.3, added: "2026-01-09"
  },
  {
    id: "sift-heads-5",
    title: "Sift Heads 5",
    genre: "Action",
    description: "The original series finale. Vinnie settles scores in a climactic showdown. High production values, full voice acting, and satisfying endings for every thread.",
    externalUrl: "https://kbhgames.com/game/sift-heads-5",
    rating: 4.4, added: "2026-01-11"
  },
  {
    id: "sift-heads-world",
    title: "Sift Heads World",
    genre: "Action",
    description: "The world expands. Vinnie, Kiro, and Shorty go global in this massive continuation. Bigger maps, free-roam elements, and the series' most cinematic story yet.",
    externalUrl: "https://kbhgames.com/game/sift-heads-world",
    rating: 4.4, added: "2026-01-13"
  },
  {
    id: "sift-heads-world-2",
    title: "Sift Heads World 2",
    genre: "Action",
    description: "The crew digs deeper into the criminal conspiracy. New missions, new enemies, and the dark atmosphere that defines Sift Heads at its best.",
    externalUrl: "https://kbhgames.com/game/sift-heads-world-2",
    rating: 4.3, added: "2026-01-15"
  },
  {
    id: "sift-heads-world-3",
    title: "Sift Heads World 3",
    genre: "Action",
    description: "Betrayal, revenge, and bullets. The story takes a dark turn as alliances shatter. Some of the series' best mission design lives here.",
    externalUrl: "https://kbhgames.com/game/sift-heads-world-3",
    rating: 4.3, added: "2026-01-17"
  },
  {
    id: "sift-heads-world-4",
    title: "Sift Heads World 4",
    genre: "Action",
    description: "The conspiracy grows. New mechanics, new threats, and escalating stakes. Vinnie's world is falling apart and every contract feels personal.",
    externalUrl: "https://kbhgames.com/game/sift-heads-world-4",
    rating: 4.2, added: "2026-01-19"
  },
  {
    id: "sift-heads-world-5",
    title: "Sift Heads World 5",
    genre: "Action",
    description: "The penultimate chapter. The crew is scattered, the enemy is everywhere, and the city is a warzone. Brutal, cinematic, and relentless.",
    externalUrl: "https://kbhgames.com/game/sift-heads-world-act-5",
    rating: 4.3, added: "2026-01-21"
  },
  {
    id: "sift-heads-world-6",
    title: "Sift Heads World 6",
    genre: "Action",
    description: "The final chapter of the World arc. Everything comes to a head in a violent, satisfying conclusion. The series goes out with maximum impact.",
    externalUrl: "https://kbhgames.com/game/sift-heads-world-act-6",
    rating: 4.4, added: "2026-01-23"
  },
  {
    id: "sift-heads-cartels-1",
    title: "Sift Heads: Cartels Act 1",
    genre: "Action",
    description: "A new chapter in the Sift Heads saga. The crew takes on the drug cartels in gritty, high-stakes missions with the series' signature style.",
    externalUrl: "https://kbhgames.com/game/sift-heads-cartels",
    rating: 4.2, added: "2026-01-25"
  },
  {
    id: "sift-heads-cartels-2",
    title: "Sift Heads: Cartels Act 2",
    genre: "Action",
    description: "The cartel war escalates. Bigger firefights, deeper story, and the same visceral click-to-kill gameplay that made Sift Heads a Flash gaming institution.",
    externalUrl: "https://kbhgames.com/game/sift-heads-cartels-act-2",
    rating: 4.2, added: "2026-01-27"
  },
  {
    id: "sift-heads-assault-1",
    title: "Sift Heads: Assault",
    genre: "Action",
    description: "Sift Heads goes full run-and-gun. Blast through side-scrolling levels as Vinnie takes the fight directly to the streets.",
    externalUrl: "https://kbhgames.com/game/sift-heads-assault",
    rating: 4.1, added: "2026-01-29"
  },
  {
    id: "sift-heads-assault-2",
    title: "Sift Heads: Assault 2",
    genre: "Action",
    description: "More run-and-gun mayhem. New weapons and harder enemies keep the Assault format fresh. Fast, violent, and satisfying.",
    externalUrl: "https://kbhgames.com/game/sift-heads-assault-2",
    rating: 4.1, added: "2026-01-31"
  },
  {
    id: "sift-heads-assault-3",
    title: "Sift Heads: Assault 3",
    genre: "Action",
    description: "The Assault trilogy closes out. The biggest maps, the most enemies, and the most explosive finale. A great send-off for the spin-off series.",
    externalUrl: "https://kbhgames.com/game/sift-heads-assault-3",
    rating: 4.2, added: "2026-02-02"
  },

  // ══════════════════════════════════════════
  // PUZZLE
  // ══════════════════════════════════════════

  {
    id: "we-become-what-we-behold",
    title: "We Become What We Behold",
    genre: "Puzzle",
    description: "A short, disturbing game about news cycles, social media, and the feedback loops of fear and outrage. Made by Nicky Case. Takes 5 minutes and will make you think for days.",
    externalUrl: "https://ncase.itch.io/wbwwb",
    rating: 4.8, added: "2026-03-15"
  },
  {
    id: "evolution-of-trust",
    title: "The Evolution of Trust",
    genre: "Puzzle",
    description: "An interactive guide to the game theory of cooperation and betrayal. Play the Prisoner's Dilemma against different strategies and discover why trust breaks down — and how to rebuild it.",
    externalUrl: "https://ncase.me/trust/",
    rating: 4.9, added: "2026-03-15"
  },
  {
    id: "adventures-with-anxiety",
    title: "Adventures with Anxiety!",
    genre: "Puzzle",
    description: "Play as Anxiety itself in this interactive story about a wolf trying to protect someone it loves. Unexpectedly touching, darkly funny, and genuinely insightful.",
    externalUrl: "https://ncase.me/anxiety/",
    rating: 4.7, added: "2026-03-15"
  },
  {
    id: "ncase-door",
    title: "The Door",
    genre: "Puzzle",
    description: "An intimate interactive story by Nicky Case. Stand at the threshold of a moment that changes everything. Short, heavy, and beautifully crafted.",
    externalUrl: "https://ncase.me/door/",
    rating: 4.5, added: "2026-03-15"
  },
  {
    id: "deepest-sword",
    title: "Deepest Sword",
    genre: "Puzzle",
    description: "Wield an absurdly long sword and figure out how to kill dragons with it. A physics puzzle game with hilariously creative solutions. Deceptively clever.",
    externalUrl: "https://kbhgames.com/game/deepest-sword",
    rating: 4.6, added: "2026-03-15"
  },
  {
    id: "there-is-no-game",
    title: "There Is No Game",
    genre: "Puzzle",
    description: "There is no game here. Do not click anything. Definitely do not try to play whatever this isn't. A meta puzzle game that breaks the fourth wall hilariously.",
    externalUrl: "https://kbhgames.com/game/there-is-no-game",
    rating: 4.7, added: "2026-03-14"
  },
  {
    id: "tetris",
    title: "Tetris",
    genre: "Puzzle",
    description: "Stack tetrominoes, clear lines, fight the stack. One of the greatest games ever made — deceptively simple, endlessly deep, and eternally perfect. No argument.",
    externalUrl: "https://tetris.com/play-tetris",
    rating: 4.9, added: "2026-03-13"
  },
  {
    id: "two-thousand-forty-eight",
    title: "2048",
    genre: "Puzzle",
    description: "Slide tiles, merge numbers, reach 2048. Simple to learn, nearly impossible to master. The kind of puzzle game that hijacks your brain until you hit the target.",
    externalUrl: "https://play2048.co/",
    rating: 4.4, added: "2026-02-28"
  },
  {
    id: "impossible-quiz",
    title: "The Impossible Quiz",
    genre: "Puzzle",
    description: "A quiz where the answers are never what you expect. Absurdist logic, hidden tricks, and answers that will genuinely make you laugh. Don't trust anything.",
    externalUrl: "https://kbhgames.com/game/the-impossible-quiz",
    rating: 4.5, added: "2026-02-25"
  },
  {
    id: "worlds-hardest-game",
    title: "World's Hardest Game",
    genre: "Puzzle",
    description: "Navigate a red square through moving blue circles. No attack button. No lives. Just you, your reflexes, and the crushing realization that you're not as good as you think.",
    externalUrl: "https://worldshardest-game.com/",
    rating: 4.3, added: "2026-02-22"
  },
  {
    id: "worlds-easiest-game",
    title: "The World's Easiest Game",
    genre: "Puzzle",
    description: "A quiz so easy it's almost offensive. Then it isn't. A masterclass in subverting expectations — what starts as mockery becomes something genuinely tricky.",
    externalUrl: "https://kbhgames.com/game/the-worlds-easyest-game",
    rating: 4.0, added: "2026-02-18"
  },
  {
    id: "quick-draw",
    title: "Quick, Draw!",
    genre: "Puzzle",
    description: "Draw something. Google's AI tries to guess what it is in 20 seconds. A weirdly compelling game that turns doodling into a challenge against a neural network.",
    externalUrl: "https://quickdraw.withgoogle.com/",
    rating: 4.3, added: "2026-02-15"
  },
  {
    id: "line-rider",
    title: "Line Rider",
    genre: "Puzzle",
    description: "Draw a track, watch a sled rider follow every line you place. The possibilities are infinite. People have created epic synchronized music videos with this. What will you build?",
    externalUrl: "https://www.linerider.com",
    rating: 4.4, added: "2026-03-12"
  },
  {
    id: "level-devil",
    title: "Level Devil",
    genre: "Puzzle",
    description: "A platformer that actively tries to kill you through deception. The level itself is the enemy — floors collapse, ceilings drop, and nothing is safe. Pure evil game design.",
    externalUrl: "https://leveldevil-game.io/",
    rating: 4.5, added: "2026-03-10"
  },
  {
    id: "sniper-assassin",
    title: "Sniper Assassin",
    genre: "Puzzle",
    description: "Puzzle-sniper gameplay. Read mission briefings, analyze your targets, and take the perfect shot at the perfect moment. Methodical, atmospheric, and dark.",
    externalUrl: "https://kbhgames.com/game/sniper-assassin",
    rating: 4.2, added: "2026-02-05"
  },
  {
    id: "sniper-assassin-2",
    title: "Sniper Assassin 2",
    genre: "Puzzle",
    description: "More contracts, more complex scenarios. The sequel adds story depth and trickier puzzle setups. One of the best sniper puzzle series ever made in Flash.",
    externalUrl: "https://kbhgames.com/game/sniper-assassin-2",
    rating: 4.2, added: "2026-02-07"
  },
  {
    id: "sniper-assassin-3",
    title: "Sniper Assassin 3",
    genre: "Puzzle",
    description: "The story gets darker. The targets get harder to read. Sniper Assassin 3 is the point where the series found its emotional core alongside its sharp gameplay.",
    externalUrl: "https://kbhgames.com/game/sniper-assassin-3",
    rating: 4.3, added: "2026-02-09"
  },
  {
    id: "sniper-assassin-4",
    title: "Sniper Assassin 4",
    genre: "Puzzle",
    description: "Revenge, betrayal, and precision kills. The fourth entry raises the narrative stakes while introducing the most creative puzzle scenarios in the series.",
    externalUrl: "https://kbhgames.com/game/sniper-assassin-4",
    rating: 4.3, added: "2026-02-11"
  },
  {
    id: "sniper-assassin-5",
    title: "Sniper Assassin 5: Final Mission",
    genre: "Puzzle",
    description: "The saga ends. Everything converges in a brutal final mission that brings the story of the Sniper Assassin to its inevitable, violent conclusion.",
    externalUrl: "https://kbhgames.com/game/sniper-assassin-5-final-mission",
    rating: 4.4, added: "2026-02-13"
  },
  {
    id: "tactical-assassin",
    title: "Tactical Assassin",
    genre: "Puzzle",
    description: "Read the brief. Find the target. Make the shot. No room for error — tactical assassination as a pure puzzle game. Cold, precise, and deeply satisfying.",
    externalUrl: "https://kbhgames.com/game/tactical-assassin",
    rating: 4.1, added: "2026-02-04"
  },
  {
    id: "sneaky-sniper-2",
    title: "Sneaky Sniper 2",
    genre: "Puzzle",
    description: "Hidden object meets sniper game. Find and eliminate targets hidden within busy scenes. Requires sharp eyes and patience — and a willingness to do terrible things.",
    externalUrl: "https://kbhgames.com/game/sneaky-sniper-2",
    rating: 4.0, added: "2026-02-03"
  },
  {
    id: "clear-vision",
    title: "Clear Vision",
    genre: "Puzzle",
    description: "Stick figure sniper puzzle game with a surprisingly compelling narrative. Between contracts, you live a normal life. Then you go back to murdering people.",
    externalUrl: "https://kbhgames.com/game/clear-vision",
    rating: 4.1, added: "2026-02-17"
  },
  {
    id: "clear-vision-2",
    title: "Clear Vision 2",
    genre: "Puzzle",
    description: "The story of Vincent the sniper continues. More contracts, more moral greyness, and the same satisfying puzzle-sniper gameplay that made the original a hit.",
    externalUrl: "https://kbhgames.com/game/clear-vision-2",
    rating: 4.1, added: "2026-02-19"
  },

  // ══════════════════════════════════════════
  // ADVENTURE
  // ══════════════════════════════════════════

  {
    id: "run-3",
    title: "Run 3",
    genre: "Adventure",
    description: "Sprint through a collapsing tunnel in outer space. Rotate the world around you, leap between platforms, and keep moving forward into the infinite void. Hypnotic and oddly calming.",
    externalUrl: "https://www.coolmathgames.com/0-run-3",
    rating: 4.5, added: "2026-03-15"
  },
  {
    id: "super-mario",
    title: "Super Mario",
    genre: "Adventure",
    description: "The most iconic platformer ever made, playable in the browser. Jump on goombas, find the flagpole, rescue the princess. Some things never get old.",
    externalUrl: "https://supermario-game.com/",
    rating: 4.8, added: "2026-03-10"
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    genre: "Adventure",
    description: "Tap to fly. Don't hit the pipes. Watch your soul leave your body on gap number 4. The game that broke a million phones and spawned a thousand clones.",
    externalUrl: "https://flappybird.io/",
    rating: 4.1, added: "2026-03-08"
  },
  {
    id: "hollow-knight-web",
    title: "Hollow Knight",
    genre: "Adventure",
    description: "The beloved metroidvania — explore the dark, beautiful underground kingdom of Hallownest. Challenging combat, atmospheric world-building, and a hauntingly good soundtrack.",
    externalUrl: "https://hollowknight.io/",
    rating: 4.9, added: "2026-03-12"
  },
  {
    id: "fireboy-and-watergirl",
    title: "Fireboy and Watergirl",
    genre: "Adventure",
    description: "Classic co-op puzzle platformer. Control two elemental characters — solo or with a friend — and navigate challenges where fire and water must work in perfect harmony.",
    externalUrl: "https://www.fireboy-and-watergirl.com",
    rating: 4.4, added: "2026-03-14"
  },
  {
    id: "cookie-clicker",
    title: "Cookie Clicker",
    genre: "Adventure",
    description: "Click a cookie. Buy grandmas. Unlock dark rituals. Ascend to godhood. The idle game that launched a genre and broke countless minds.",
    externalUrl: "https://orteil.dashnet.org/cookieclicker/",
    rating: 4.3, added: "2026-03-13"
  },
  {
    id: "oregon-trail",
    title: "The Oregon Trail",
    genre: "Adventure",
    description: "You have died of dysentery. Hunt for food, ford rivers, and watch your party succumb to illness on the grueling journey west. A piece of gaming history.",
    externalUrl: "https://oregontrail.ws/games/the-oregon-trail/play/",
    rating: 4.4, added: "2026-02-28"
  },
  {
    id: "fnaf-1",
    title: "Five Nights at Freddy's",
    genre: "Adventure",
    description: "Survive five nights as a security guard at a haunted animatronic restaurant. Watch the cameras. Manage the doors. Try not to die. Genuinely terrifying.",
    externalUrl: "https://fnafgame.io/fnaf",
    rating: 4.7, added: "2026-03-08"
  },
  {
    id: "fnaf-2",
    title: "Five Nights at Freddy's 2",
    genre: "Adventure",
    description: "More animatronics, no doors. The sequel cranks the difficulty and the dread. Keep the music box wound up or face something far worse than anything in the first game.",
    externalUrl: "https://fnafgame.io/fnaf-2",
    rating: 4.6, added: "2026-03-09"
  },
  {
    id: "fnaf-3",
    title: "Five Nights at Freddy's 3",
    genre: "Adventure",
    description: "30 years later. One animatronic. Springtrap stalks the halls of Fazbear's Fright while you maintain broken systems and pray the audio lures him away. Deeply unsettling.",
    externalUrl: "https://fnafgame.io/fnaf-3",
    rating: 4.5, added: "2026-03-10"
  },
  {
    id: "amanda-adventurer",
    title: "Amanda the Adventurer",
    genre: "Adventure",
    description: "A seemingly innocent children's cartoon that gets deeply, horribly wrong. Interact with Amanda and discover what's lurking behind the cheerful facade.",
    externalUrl: "https://fnafgame.io/amanda-the-adventurer",
    rating: 4.5, added: "2026-03-07"
  },
  {
    id: "friday-night-funkin",
    title: "Friday Night Funkin'",
    genre: "Adventure",
    description: "Rhythm battle game with a killer soundtrack and instantly iconic characters. Hit the arrows, flex on your rivals, and win the girl's heart through the power of music.",
    externalUrl: "https://kbhgames.com/game/friday-night-funkin",
    rating: 4.7, added: "2026-03-11"
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    genre: "Adventure",
    description: "Run from the inspector along endless subway tracks. Dodge trains, collect coins, and keep the streak alive. The definitive endless runner, now in browser.",
    externalUrl: "https://escaperoad.io/subway-surfers",
    rating: 4.2, added: "2026-03-06"
  },
  {
    id: "undead-invasion",
    title: "Undead Invasion",
    genre: "Adventure",
    description: "Zombie survival action with RPG elements. Fight off waves of the undead, level up, and try to carve out a path to salvation through an infested world.",
    externalUrl: "https://www.undead-invasion.com/",
    rating: 4.1, added: "2026-03-04"
  },
  {
    id: "undead-corridor",
    title: "Undead Corridor",
    genre: "Adventure",
    description: "Run. Shoot. Survive. A relentless zombie corridor shooter where every room is a gauntlet and every second counts. Don't stop moving.",
    externalUrl: "https://escaperoad.io/undead-corridor",
    rating: 4.0, added: "2026-03-03"
  },
  {
    id: "breaking-the-bank",
    title: "Breaking the Bank",
    genre: "Adventure",
    description: "Henry Stickmin's very first heist. Choose your approach and watch hilariously animated outcomes — most of which end in spectacular failure. A Flash classic.",
    externalUrl: "https://kbhgames.com/game/breaking-the-bank",
    rating: 4.3, added: "2026-02-10"
  },
  {
    id: "escaping-the-prison",
    title: "Escaping the Prison",
    genre: "Adventure",
    description: "Henry Stickmin needs to break out. Every wrong choice is a brilliant fail animation. Choose wisely — or just choose wrong on purpose, it's funnier.",
    externalUrl: "https://kbhgames.com/game/escaping-the-prison",
    rating: 4.4, added: "2026-02-12"
  },
  {
    id: "stealing-the-diamond",
    title: "Stealing the Diamond",
    genre: "Adventure",
    description: "Henry Stickmin sets his sights on the world's biggest diamond. Pick your path through increasingly absurd heist attempts. The production values noticeably jump here.",
    externalUrl: "https://kbhgames.com/game/stealing-the-diamond",
    rating: 4.4, added: "2026-02-14"
  },
  {
    id: "infiltrating-the-airship",
    title: "Infiltrating the Airship",
    genre: "Adventure",
    description: "Henry infiltrates a government airship. Multiple diverging paths, branching story routes, and some of the series' funniest fail animations. A massive step up.",
    externalUrl: "https://kbhgames.com/game/infiltrating-the-airship",
    rating: 4.5, added: "2026-02-16"
  },
  {
    id: "fleeing-the-complex",
    title: "Fleeing the Complex",
    genre: "Adventure",
    description: "The biggest Henry Stickmin game yet. Multiple full story routes, dozens of endings, incredible fail animations. The ultimate evolution of the choose-your-own-adventure format.",
    externalUrl: "https://kbhgames.com/game/fleeing-the-complex",
    rating: 4.7, added: "2026-02-18"
  },

  // ══════════════════════════════════════════
  // MULTIPLAYER
  // ══════════════════════════════════════════

  {
    id: "agar",
    title: "Agar.io",
    genre: "Multiplayer",
    description: "Eat cells smaller than you. Don't get eaten by cells larger than you. The cell-eating .io game that launched a thousand clones. Simple, elegant, and still one of the best.",
    externalUrl: "https://agar.io",
    rating: 4.4, added: "2026-03-15"
  },
  {
    id: "zombs-royale",
    title: "Zombs Royale",
    genre: "Multiplayer",
    description: "Top-down 2D battle royale. Drop in, loot fast, and shoot everything that moves. Simple enough to pick up in seconds, competitive enough to sink hours into.",
    externalUrl: "https://zombsroyale.io",
    rating: 4.3, added: "2026-03-15"
  },
  {
    id: "battle-dudes",
    title: "Battle Dudes",
    genre: "Multiplayer",
    description: "Team-based multiplayer brawler right in your browser. Cap flags, frag enemies, and assert dominance over strangers. Smooth, chaotic, and perfect for a quick session.",
    externalUrl: "https://battledudes.io",
    rating: 4.1, added: "2026-03-15"
  },
  {
    id: "chess",
    title: "Chess.com",
    genre: "Multiplayer",
    description: "The greatest strategy game ever invented, now online. Play against friends, strangers, or AI at any skill level. The rabbit hole of openings, tactics, and endgames goes infinitely deep.",
    externalUrl: "https://www.chess.com/play",
    rating: 4.8, added: "2026-03-15"
  },
  {
    id: "zombie-craft",
    title: "Zombie Craft.io",
    genre: "Multiplayer",
    description: "Build, survive, and fight off the undead alongside other players. Craft weapons and defenses in a persistent world that's always on the edge of collapse.",
    externalUrl: "https://www.crazygames.com/game/zombiecraftio",
    rating: 4.0, added: "2026-03-14"
  },
  {
    id: "diep",
    title: "Diep.io",
    genre: "Multiplayer",
    description: "Tank shooter meets RPG progression. Destroy shapes to level up, allocate stat points, evolve your tank class. One of the deepest and most replayable .io games ever made.",
    externalUrl: "https://diep.io",
    rating: 4.5, added: "2026-03-14"
  },
  {
    id: "slither",
    title: "Slither.io",
    genre: "Multiplayer",
    description: "Snake, but massive and multiplayer. Grow your serpent by eating glowing orbs and trap other players into running into your body. The undisputed king of .io games.",
    externalUrl: "https://slither.io",
    rating: 4.4, added: "2026-03-13"
  },
  {
    id: "gartic",
    title: "Gartic.io",
    genre: "Multiplayer",
    description: "Online Pictionary with strangers. Draw it, guess it, lose it. Results range from genuine masterpieces to absolute disasters — both equally hilarious.",
    externalUrl: "https://gartic.io",
    rating: 4.5, added: "2026-03-12"
  },
  {
    id: "warbot",
    title: "Warbot.io",
    genre: "Multiplayer",
    description: "Build and pilot a war robot in real-time multiplayer arena combat. Customize your loadout, smash opponents into scrap, and dominate the battlefield.",
    externalUrl: "https://warbot.io",
    rating: 4.0, added: "2026-03-12"
  },
  {
    id: "zombs",
    title: "Zombs.io",
    genre: "Multiplayer",
    description: "Build a base, survive the night, fight off endless zombie waves — with other players. Cooperative tower defense in a world that never stops trying to kill everyone.",
    externalUrl: "https://zombs.io",
    rating: 4.1, added: "2026-03-11"
  },
  {
    id: "skribbl",
    title: "Skribbl.io",
    genre: "Multiplayer",
    description: "Draw a word, have your friends guess what it is. Simple premise, infinite chaos when nobody can draw. Best played with people you actually know.",
    externalUrl: "https://skribbl.io",
    rating: 4.6, added: "2026-03-10"
  },
  {
    id: "eight-ball-pool",
    title: "8 Ball Pool",
    genre: "Multiplayer",
    description: "Classic 8-ball pool, online. Challenge players worldwide, develop your aim, upgrade your cue. The definitive browser billiards experience and a perennial time sink.",
    externalUrl: "https://8ballpool.com/game",
    rating: 4.3, added: "2026-03-09"
  },
  {
    id: "taggame",
    title: "Taggame.io",
    genre: "Multiplayer",
    description: "Online tag. With strangers. On the internet. It's exactly what it sounds like and exactly as chaotic as you'd expect. Pure, distilled childhood fun.",
    externalUrl: "https://taggame.io",
    rating: 4.0, added: "2026-03-08"
  },
  {
    id: "soccer-random",
    title: "Soccer Random",
    genre: "Multiplayer",
    description: "Two-player soccer with totally unpredictable physics, random character sizes, and chaotic momentum. Nothing about this is realistic and everything about it is fun.",
    externalUrl: "https://soccerrandom.io/",
    rating: 4.4, added: "2026-03-07"
  },
  {
    id: "volleyball-random",
    title: "Volleyball Random",
    genre: "Multiplayer",
    description: "Volleyball with the same delightful chaos as Soccer Random. Wobbly characters, unpredictable balls, and two-player couch competition at its purest.",
    externalUrl: "https://soccerrandom.io/volley-random",
    rating: 4.3, added: "2026-03-07"
  },
  {
    id: "basket-random",
    title: "Basket Random",
    genre: "Multiplayer",
    description: "Basketball with ragdoll physics and absolutely no respect for the laws of sport. Chaotic, funny, and perfect for one-on-one sessions.",
    externalUrl: "https://basketrandom.io/",
    rating: 4.3, added: "2026-03-07"
  },
  {
    id: "boxing-random",
    title: "Boxing Random",
    genre: "Multiplayer",
    description: "Punch your opponent into submission with physics that make zero sense. Same energy as the Random series — pure, unhinged two-player fun.",
    externalUrl: "https://www.twoplayergames.org/game/boxing-random",
    rating: 4.2, added: "2026-03-06"
  },
  {
    id: "rooftop-snipers",
    title: "Rooftop Snipers",
    genre: "Multiplayer",
    description: "Two snipers on a rooftop. One shot sends the other flying off the edge. Simple two-button controls, wildly satisfying physics, and endless local multiplayer laughs.",
    externalUrl: "https://www.twoplayergames.org/game/rooftop-snipers",
    rating: 4.5, added: "2026-03-05"
  },
  {
    id: "get-away-shootout",
    title: "Get Away Shootout",
    genre: "Multiplayer",
    description: "Race to the helicopter while shooting your opponent. Two-player mayhem with guns, hooks, and desperate scrambles for the extraction point. Chaotic gold.",
    externalUrl: "https://getawayshootoutonline.github.io/",
    rating: 4.4, added: "2026-03-05"
  },
  {
    id: "uno-online",
    title: "UNO Online",
    genre: "Multiplayer",
    description: "The legendary card game, online. Play against real people, draw four when least expected, and destroy friendships with a well-timed skip. Wild card, obviously.",
    externalUrl: "https://unonline.io/",
    rating: 4.3, added: "2026-03-04"
  },
  {
    id: "poxel",
    title: "Poxel.io",
    genre: "Multiplayer",
    description: "Multiplayer voxel sandbox shooter. Build, explore, and battle in a blocky world with other players. Creative destruction has never been this satisfying.",
    externalUrl: "https://poxel.io/",
    rating: 4.0, added: "2026-03-03"
  },
  {
    id: "ragdoll-hit",
    title: "Ragdoll Hit",
    genre: "Multiplayer",
    description: "Launch ragdolls and smash them into each other for maximum chaos. Physics-based multiplayer carnage with the same irresistible pull as all great .io games.",
    externalUrl: "https://ragdollhit2.io/",
    rating: 4.1, added: "2026-03-02"
  },
  {
    id: "bloxd",
    title: "Bloxd.io",
    genre: "Multiplayer",
    description: "Voxel multiplayer world building and survival. Think Minecraft but in the browser, instantly accessible, and full of other players doing weird stuff.",
    externalUrl: "https://bloxd.io/",
    rating: 4.4, added: "2026-03-01"
  }
];
