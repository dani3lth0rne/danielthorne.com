/* ── Grid constants ── */
const GRID_COLS = 4;
const GRID_ROWS = 2;
const COL_STEP  = 400;   // card 280 + gap 120
const ROW_STEP  = 330;   // card 210 + gap 120
const TILE_W    = GRID_COLS * COL_STEP;   // 1600
const TILE_H    = GRID_ROWS * ROW_STEP;   // 660
const TILES_X   = 9;
const TILES_Y   = 7;
const CANVAS_W  = TILES_X * TILE_W;       // 14400
const CANVAS_H  = TILES_Y * TILE_H;       // 4620

/* ── Project data ── */
const WORK = [
  {
    id: 'stockpile',
    title: 'Stockpile',
    client: 'Stockpile', date: 'Feb 2024', type: 'In-House',
    description: 'Personal finance platform that empowers people to reach investment, budgeting, spending and savings goals. Contributed to launching new budgeting and investment solutions for desktop and mobile, building a new design system and synthesizing research for feature creation.',
    thumb: 'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d51ab84b549decb6b8173b_Stockpile-Thumbnail.png',
    hero:  'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d6e56b2a007e7ea8deb2b2_Mainimage-Stockpile.png',
    liveUrl: 'https://danielthorne.com/projects/stockpile',
    tags: ['Product Design', 'FinTech'],
    sections: [
      {
        heading: 'Budgeting Capabilities',
        body: 'Stockpile introduced new features requiring impressive UI/UX design. The budgeting page incorporated an entirely new design system derived from the existing one.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d62d2e261959bf9d1a42b1_Budget-CS.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d62e94d2de6b278b35a759_Budget-Desktop.png'
        ]
      },
      {
        heading: 'Reintroducing a New Way to Invest',
        body: 'The mobile investing experience needed modernization. New components were introduced to the design library, creating a robust and streamlined mobile experience, while reworking desktop to align with business objectives and research findings.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d6322a4a2620490fd42e16_Portfolio-CS.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d631d963eafe47cf2bacb3_Portfolio-Desktop.png'
        ]
      },
      {
        heading: 'Familiar Flows',
        body: 'Following portfolio redesign, an individual stock page was developed using consistent design patterns, serving as the location for trade actions and detailed stock reporting.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d633a1a0147f74cf373844_Indiv-Stock-CS.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d633ac1c7a7b25457c9731_Indiv-Stock-Desktop.png'
        ]
      }
    ]
  },
  {
    id: 'jp-morgan',
    title: 'JP Morgan',
    client: 'JP Morgan / Aumni', date: 'Nov 2025', type: 'In-House',
    description: 'When I joined Aumni, it was a read-only platform — accurate but inflexible. As part of the product team, I helped introduce interactive features that let investors upload and compare their own cap tables and update valuations in real time, transforming Aumni into a trusted, dynamic workspace for investors.',
    thumb: 'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6908d4af3f31876796d9306d_JPM.png',
    hero:  'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/690964b23050004f0701c122_JPM-wide.png',
    liveUrl: 'https://danielthorne.com/projects/jp-morgan',
    tags: ['Product Design', 'Finance'],
    sections: [
      {
        heading: 'The Problem',
        body: 'Investors faced conflicting needs: confidence that information was sourced from verified legal documents, flexibility for data input when documentation was unavailable, and speed for urgent portfolio questions without manual extraction delays. The read-only model couldn\'t reconcile trust and control simultaneously.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/69097595742d3907cc7d661d_OLD.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/690973455f11b2a17ce1e89c_JPM-Home.png'
        ]
      },
      {
        heading: 'The Insight',
        body: 'Interviews with a16z, General Catalyst, and Forerunner revealed investors viewed data as "living." They required platforms offering source-backed accuracy alongside real-time workspace functionality — a trusted, transparent system of contribution rather than simple data editability.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/690973455f45a96a851264d2_JPM-Capitalization.png'
        ]
      },
      {
        heading: 'Cap Table Comparison',
        body: 'Investors could upload and compare cap tables, revealing ownership evolution across funding rounds, visual dilution, investor changes, and control shifts. Clear distinction between Aumni-sourced and user-entered data maintained transparency — the first time users saw their data reflected live in the platform.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6909734534d1beaf32005e7c_JPM-Compare.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6909734510d2f5dd29bfe3ad_JPM-Rounds.png'
        ]
      }
    ]
  },
  {
    id: 'rentler',
    title: 'Rentler',
    client: 'Rentler', date: 'Jan 2024', type: 'In-House',
    description: 'Work focused on the Rentability Report feature — a revenue driver that was buried, friction-heavy, and delivered data in dense PDFs lacking visual emphasis or narrative flow.',
    thumb: 'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d655160a6f3ae503c1c49a_Rentler-Thumbnail.png',
    hero:  'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d655123ecbea326b897f7f_Rentler-Main%20Image.png',
    liveUrl: 'https://danielthorne.com/projects/rentler',
    tags: ['Product Design', 'PropTech'],
    sections: [
      {
        heading: 'The Challenge',
        body: 'Three core problems: the Rentability Report was buried within specific property details, a lengthy clickstream discouraged users from starting the process, and dense PDFs overwhelmed users with data lacking visual emphasis or narrative flow.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640bb_RENTABILITY%20REPORT%20-%20CS%20PHOTO.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640c3_OLD%20Flow.png'
        ]
      },
      {
        heading: 'Solution',
        body: 'Strategic resurfacing within the UI for better discoverability, a one-third reduction in clicks through the request process, and conversion of the PDF into a concise, visually appealing dashboard with a clear story and call to action.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640c2_Flow%20Map%20NEW.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640c5_New%20Flow.png'
        ]
      },
      {
        heading: 'Results',
        body: '23% increase in Rentability Report usage. 41% increase in report request initiation. 33% reduction in clicks to request. 60% reduction in report length.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640c1_REPORT%20updates.png'
        ]
      }
    ]
  },
  {
    id: 'encyclopedia-galactica',
    title: 'Encyclopedia Galactica',
    client: 'xAI', date: 'Nov 2025', type: 'Side Project',
    description: 'UI redesign for Grokopedia\'s transition to Encyclopedia Galactica — enhancing clarity, navigation, summaries, and AI content integration across the platform.',
    thumb: 'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6920f458cdfe86285b478043_thumbnail%20-%20xai.png',
    hero:  'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6920ee06561cae08eb9bc9b0_EG-1.png',
    liveUrl: 'https://danielthorne.com/projects/encyclopedia-galactica',
    tags: ['Product Design', 'AI'],
    sections: [
      {
        heading: 'Problem',
        body: 'The original interface tried to present everything at once, which made it feel crowded, difficult to navigate, and mentally taxing for users.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6920ee0fd52e91fc65a4176d_EG-2.png'
        ]
      },
      {
        heading: 'Solution',
        body: 'Progressive disclosure methodology enabled users to access deeper details only when needed rather than displaying all information simultaneously. New concise summaries and AI-generated content help users quickly understand topics without extensive text review.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6920f14548abf95331ea41e4_EG-3.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6920f145f92c703aa2b72563_EG-4.png'
        ]
      }
    ]
  },
  {
    id: 'truerent',
    title: 'TrueRent',
    client: 'TrueRent', date: 'Nov 2023', type: 'In-House',
    description: 'Property management tool redesigned to improve usability and streamline workflows across property managers, landlords, tenants, owners, and service professionals. Note: TrueRent branding replaces the actual client identity for legal reasons.',
    thumb: 'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d5176e3ed1ea9ee11616fc_TC%20Thumbnail.png',
    hero:  'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640ac_Computer-Mockup.png',
    liveUrl: 'https://danielthorne.com/projects/truerent',
    tags: ['Product Design', 'PropTech'],
    sections: [
      {
        heading: 'Dashboard Redesign',
        body: 'Surfaced hidden actionable information into widgets, created sections displaying recent data for decision-making, incorporated onboarding steps and marketing prompts, and prioritized account setup during the 14-day free trial period.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640ad_New%20Dashboard.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640ae_Dashboard%2C%20Choose%20Plan.png'
        ]
      },
      {
        heading: 'Properties Page',
        body: 'Users reported confusion about where to start or take action, needing to go to multiple places to complete one action. The redesign reorganized information architecture, consolidated roll-up sections with collapsible detail views in modals, and organized multi-level property information by category.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640b6_Old%20Properties.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640b8_Properties.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640b7_Properties%20Details.png'
        ]
      },
      {
        heading: 'Navigation',
        body: 'Redesigned top and side navigation for clarity, added an action button for frequent user tasks, and introduced an Onboarding Nav Butler widget to guide account setup completion.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640b9_Top%20Nav.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e71640ba_Nav.png'
        ]
      }
    ]
  },
  {
    id: 'chekez',
    title: 'Chekez',
    client: 'Startup', date: 'Jun 2022', type: 'UI/UX, Brand Identity',
    description: 'Automated AI-powered task management software that detects and adopts tasks from your various platforms and stores them in one common place. Presented to Adobe\'s Workfront team, who praised its ability to solve issues they were currently facing.',
    thumb: 'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d6409e2d808a7db5ec0e9d_Chekez-THumbnail.png',
    hero:  'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d6409b929cbda67c465ab3_Chekez-Main%20Image.png',
    liveUrl: 'https://danielthorne.com/projects/chekez',
    tags: ['Product Design', 'Productivity', 'Brand'],
    sections: [
      {
        heading: 'Task Detection',
        body: 'The system detects tasks across various apps and compiles them into a single accessible platform. With a Slack integration, assignments are recognized automatically, with prompts for seamless addition to the to-do list and direct navigation to the Chekez app.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e7164002_Artboard%202.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e7164003_Artboard%203.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e7164004_Artboard%206.png'
        ]
      },
      {
        heading: 'Interaction Flows',
        body: 'A series of pop-up interactions guide users through task adoption, ensuring nothing falls through the cracks across their workflow.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e7164009_1%20Pop%20Up.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e7164005_Pop%20Up%20%E2%80%93%201.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e7164006_Pop%20Up%20%E2%80%93%202.png'
        ]
      },
      {
        heading: 'Task Views',
        body: 'Multiple view modes accommodate different working styles: list, kanban, calendar, activity, and files.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e716400b_Project%20Tasks.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e716400c_Kanban.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e716400d_Calendar.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65c12dd251274ce8e7164023_Activity.png'
        ]
      }
    ]
  },
  {
    id: 'form-builder',
    title: 'Form Builder',
    client: 'Bonsai', date: 'Nov 2025', type: 'Product Design',
    description: 'Clean, drag-and-drop form builder with a unique split-panel layout that keeps the workflow light and intuitive. The whole UI leans into a calm, minimal feel — soft edges, clear blocks, and a layout that just makes sense visually.',
    thumb: 'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6920fc6e5de94e8fe13350cc_Form%20Builder-1.png',
    hero:  'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6920f9496cddf9e3e59fc26d_Form%20Builder.png',
    liveUrl: 'https://danielthorne.com/projects/form-builder',
    tags: ['Product Design', 'SaaS'],
    sections: [
      {
        heading: 'Split-Panel Layout',
        body: 'A two-panel approach: components on the left, workspace on the right. The interface eliminates typical form-building friction, featuring a straightforward and playful interaction model that requires no tutorial.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6920fc4b29ed85f8ac4f6292_Form.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/6920fc4497ba652bbde58467_Form-1.png'
        ]
      }
    ]
  },
  {
    id: 'rexchanger',
    title: 'Rexchanger',
    client: 'Rexchanger', date: 'Jun 2022', type: 'UI/UX, Brand Identity',
    description: 'Brand, interface, and app flow redesign transitioning from dull aesthetics to adventurous outdoor gear experiences. Covered logo, colors, typography, mobile UI, and app navigation for a gear-sharing startup.',
    thumb: 'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d651d728b3bad81d4d461f_rexchangerthumbnail.png',
    hero:  'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d651d3ec55f14359d7b318_rexchanger.png',
    liveUrl: 'https://danielthorne.com/projects/rexchanger',
    tags: ['Product Design', 'Brand'],
    sections: [
      {
        heading: 'Brand & Design System',
        body: 'The original logo felt outdated and disconnected from the outdoors. The new version uses bold, modern typography suggesting strength and reliability, with a green palette reflecting natural environments, a more robust component library, clear hierarchy, and standardized type and colors.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d651bea7fbe5afda4a0669_rexchangerDS.png'
        ]
      },
      {
        heading: 'App Flow',
        body: 'Streamlined navigation with a prominent search bar, clearly defined categories, simplified menu access, a gear-scanning feature before rental, and a simplified checkout process.',
        images: [
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d6487b4b96768d36b65e85_Flows_Flow1.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d651e5419e674c34b19233_Flows_flow2.png',
          'https://cdn.prod.website-files.com/65c12dd251274ce8e7163f43/65d652564d841ed72025ef47_flow3%402x.png'
        ]
      }
    ]
  }
];

const PERSONAL = [
  { id: 'photo-1', type: 'photo', title: 'New York',         thumb: null, x: -120, y: -130, dur: 6.4, delay: 0.3 },
  { id: 'photo-2', type: 'photo', title: 'Coast, California',thumb: null, x: 380,  y: -60,  dur: 7.2, delay: 1.2 },
  { id: 'photo-3', type: 'photo', title: 'Utah, Winter',     thumb: null, x: 640,  y: 280,  dur: 7.6, delay: 0.6 },
  {
    id: 'paper-1', type: 'paper',
    title: 'On the Future of Urban Design and the Spaces Between Buildings',
    excerpt: 'A meditation on how cities breathe, and what we lose when we stop paying attention to the gaps.',
    tilt: 'perspective(700px) rotateX(4deg) rotateY(-5deg) rotateZ(-2deg)',
    x: -380, y: 200, dur: 6.9, delay: 0.9
  },
  {
    id: 'paper-2', type: 'paper',
    title: 'Notes on Making Things',
    excerpt: 'Thinking through craft, constraints, and what design owes to the people who live inside it.',
    tilt: 'perspective(700px) rotateX(-3deg) rotateY(4deg) rotateZ(1.5deg)',
    x: 240, y: 400, dur: 5.9, delay: 2.2
  }
];

/* ── State ── */
let panX = 0, panY = 0;
let dragging = false;
let startX = 0, startY = 0;
let didDrag = false;
let activeItem = null;

const artboardWrap = document.getElementById('artboard-wrap');
const artboard     = document.getElementById('artboard');
const modalOverlay = document.getElementById('modal-overlay');
const modalInner   = document.getElementById('modal-inner');
const modalClose   = document.getElementById('modal-close-btn');
const modalLink    = document.getElementById('modal-link-btn');
const hint         = document.getElementById('hint');
const toast        = document.getElementById('toast');

/* ── Build artboard ── */

// Local tile positions: 4×2 grid
const TILE_POSITIONS = [];
for (let r = 0; r < GRID_ROWS; r++) {
  for (let c = 0; c < GRID_COLS; c++) {
    TILE_POSITIONS.push({ x: c * COL_STEP, y: r * ROW_STEP });
  }
}

// Per-slot jitter — seed is item index only, so every tile copy has the same offset.
// This makes the canvas visually periodic (repeats every TILE_W × TILE_H),
// enabling seamless teleportation at edges.
function slotJitter(idx, range) {
  const s = Math.sin(idx * 127.1 + 311.7) * 43758.5453123;
  return (s - Math.floor(s) - 0.5) * 2 * range;
}
const SLOT_JX = WORK.map((_, i) => slotJitter(i,      48));  // ±48px horizontal
const SLOT_JY = WORK.map((_, i) => slotJitter(i + 50, 36));  // ±36px vertical

function makeWorkItem(project, absX, absY) {
  const el = document.createElement('div');
  el.className = 'artboard-item mode-work';
  el.style.left = absX + 'px';
  el.style.top  = absY + 'px';

  const card = document.createElement('div');
  card.className = 'item-card';

  const img = document.createElement('img');
  img.src = project.thumb;
  img.alt = project.title;
  img.loading = 'lazy';
  img.draggable = false;

  card.append(img);
  card.addEventListener('click', () => { if (!didDrag) openWorkModal(project); });
  el.append(card);
  return el;
}

function makePhotoItem(p, absX, absY) {
  const el = document.createElement('div');
  el.className = 'artboard-item mode-personal';
  el.style.cssText = `left:${absX}px; top:${absY}px;`;

  const card = document.createElement('div');
  card.className = 'item-photo';

  const media = p.thumb
    ? `<img src="${p.thumb}" alt="${p.title}" draggable="false">`
    : `<div class="photo-placeholder"><span>Photo</span></div>`;

  card.innerHTML = `${media}<div class="photo-label">${p.title}</div>`;
  card.addEventListener('click', () => { if (!didDrag) openPersonalModal(p); });
  el.append(card);
  return el;
}

function makePaperItem(p, absX, absY) {
  const el = document.createElement('div');
  el.className = 'artboard-item mode-personal';
  el.style.cssText = `left:${absX}px; top:${absY}px;`;

  const card = document.createElement('div');
  card.className = 'item-paper';
  card.style.transform = p.tilt;
  card.innerHTML = `
    <div>
      <div class="paper-rule"></div>
      <div class="paper-title">${p.title}</div>
      <div class="paper-excerpt">${p.excerpt}</div>
    </div>
    <div class="paper-footer">Essay</div>
  `;
  card.addEventListener('click', () => { if (!didDrag) openPaperModal(p); });
  el.append(card);
  return el;
}

function buildArtboard() {
  for (let row = 0; row < TILES_Y; row++) {
    for (let col = 0; col < TILES_X; col++) {
      const ox = col * TILE_W;
      const oy = row * TILE_H;
      WORK.forEach((project, idx) => {
        const { x: lx, y: ly } = TILE_POSITIONS[idx];
        artboard.append(makeWorkItem(project, ox + lx + SLOT_JX[idx], oy + ly + SLOT_JY[idx]));
      });
    }
  }

  // Personal items tiled the same way
  const P_POSITIONS = [
    { x: 200,  y: 80  },
    { x: 880,  y: 180 },
    { x: 1280, y: 40  },
    { x: 440,  y: 420 },
    { x: 980,  y: 380 },
  ];
  for (let row = 0; row < TILES_Y; row++) {
    for (let col = 0; col < TILES_X; col++) {
      const ox = col * TILE_W;
      const oy = row * TILE_H;
      PERSONAL.forEach((p, idx) => {
        const pos = P_POSITIONS[idx];
        if (p.type === 'photo') artboard.append(makePhotoItem(p, ox + pos.x, oy + pos.y));
        if (p.type === 'paper') artboard.append(makePaperItem(p, ox + pos.x, oy + pos.y));
      });
    }
  }
}

/* ── Pan ── */
function applyTransform() {
  artboard.style.transform = `translate(${panX}px, ${panY}px)`;
}

// Silently teleport by one tile when approaching edges.
// Since jitter is per-slot (same in every tile), the visual is identical
// every TILE_W × TILE_H — the user never sees the jump.
function wrapEdges() {
  const minX = -(CANVAS_W - window.innerWidth);
  const minY = -(CANVAS_H - window.innerHeight);

  if (panX > -TILE_W)          { panX -= TILE_W; startX -= TILE_W; }
  if (panX < minX + TILE_W)    { panX += TILE_W; startX += TILE_W; }
  if (panY > -TILE_H)          { panY -= TILE_H; startY -= TILE_H; }
  if (panY < minY + TILE_H)    { panY += TILE_H; startY += TILE_H; }
}

function centerCanvas() {
  panX = window.innerWidth  / 2 - CANVAS_W / 2;
  panY = window.innerHeight / 2 - CANVAS_H / 2;
  applyTransform();
}

artboardWrap.addEventListener('mousedown', e => {
  if (e.button !== 0) return;
  dragging = true;
  didDrag  = false;
  startX = e.clientX - panX;
  startY = e.clientY - panY;
  artboardWrap.classList.add('dragging');
});

document.addEventListener('mousemove', e => {
  if (!dragging) return;
  const nx = e.clientX - startX;
  const ny = e.clientY - startY;
  if (Math.abs(nx - panX) > 3 || Math.abs(ny - panY) > 3) didDrag = true;
  panX = nx; panY = ny;
  wrapEdges();
  applyTransform();
  if (didDrag) dismissHint();
});

document.addEventListener('mouseup', () => {
  dragging = false;
  artboardWrap.classList.remove('dragging');
  setTimeout(() => { didDrag = false; }, 50);
});

artboardWrap.addEventListener('touchstart', e => {
  if (e.touches.length !== 1) return;
  dragging = true; didDrag = false;
  startX = e.touches[0].clientX - panX;
  startY = e.touches[0].clientY - panY;
}, { passive: true });

document.addEventListener('touchmove', e => {
  if (!dragging || e.touches.length !== 1) return;
  e.preventDefault();
  const nx = e.touches[0].clientX - startX;
  const ny = e.touches[0].clientY - startY;
  if (Math.abs(nx - panX) > 3 || Math.abs(ny - panY) > 3) didDrag = true;
  panX = nx; panY = ny;
  wrapEdges();
  applyTransform();
  if (didDrag) dismissHint();
}, { passive: false });

document.addEventListener('touchend', () => {
  dragging = false;
  setTimeout(() => { didDrag = false; }, 50);
});

// Trackpad two-finger pan
artboardWrap.addEventListener('wheel', e => {
  e.preventDefault();
  panX -= e.deltaX;
  panY -= e.deltaY;
  wrapEdges();
  applyTransform();
  dismissHint();
}, { passive: false });

/* ── Hint ── */
let hintGone = false;
function dismissHint() {
  if (hintGone) return;
  hintGone = true;
  hint.classList.add('gone');
}
setTimeout(dismissHint, 6000);

/* ── Mode toggle ── */
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.body.dataset.mode = btn.dataset.mode;
  });
});

/* ── Modal ── */
function openModal(content) {
  modalInner.innerHTML = '';
  modalInner.append(content);
  modalInner.scrollTop = 0;
  modalOverlay.classList.add('open');
  document.addEventListener('keydown', onKey);
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.removeEventListener('keydown', onKey);
  activeItem = null;
}

function onKey(e) { if (e.key === 'Escape') closeModal(); }

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', e => { if (e.target === modalOverlay) closeModal(); });

function openWorkModal(p) {
  activeItem = p;

  const sectionsHTML = p.sections.map(s => `
    <div class="cs-section">
      <div class="cs-section-heading">${s.heading}</div>
      <p class="cs-section-body">${s.body}</p>
      ${s.images.map(img => `<img class="cs-img" src="${img}" alt="" loading="lazy">`).join('')}
    </div>
  `).join('');

  const tagsHTML = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');

  const wrap = document.createElement('div');
  wrap.className = 'cs-modal';
  wrap.innerHTML = `
    <div class="cs-hero"><img src="${p.hero}" alt="${p.title}"></div>
    <div class="cs-body">
      <div class="cs-meta-row">
        <div class="cs-meta-item"><span class="cs-meta-label">Client</span><span class="cs-meta-value">${p.client}</span></div>
        <div class="cs-meta-item"><span class="cs-meta-label">Date</span><span class="cs-meta-value">${p.date}</span></div>
        <div class="cs-meta-item"><span class="cs-meta-label">Type</span><span class="cs-meta-value">${p.type}</span></div>
      </div>
      <h1 class="cs-title">${p.title}</h1>
      <div class="cs-rule"></div>
      <p class="cs-overview">${p.description}</p>
      ${sectionsHTML}
      <div class="modal-tags" style="margin-top:8px">${tagsHTML}</div>
    </div>
  `;

  openModal(wrap);
}

function openPersonalModal(p) {
  activeItem = p;
  const wrap = document.createElement('div');
  wrap.className = 'modal-personal';

  const media = p.thumb
    ? `<img src="${p.thumb}" alt="${p.title}">`
    : `<div style="width:100%;height:380px;background:linear-gradient(135deg,#1a1917,#111);display:flex;align-items:center;justify-content:center;"><span style="font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.18)">Photo</span></div>`;

  wrap.innerHTML = `
    <div class="modal-personal-media">${media}</div>
    <div class="modal-personal-caption">${p.title}</div>
  `;
  openModal(wrap);
}

function openPaperModal(p) {
  activeItem = p;
  const wrap = document.createElement('div');
  wrap.className = 'modal-personal';

  wrap.innerHTML = `
    <div class="modal-paper-content">
      <div class="paper-rule" style="margin-bottom:20px"></div>
      <div class="modal-paper-title">${p.title}</div>
      <p class="modal-paper-body">${p.excerpt}</p>
    </div>
  `;
  openModal(wrap);
}

/* ── Clipboard ── */
modalLink.addEventListener('click', () => {
  const url = activeItem ? activeItem.liveUrl || `${window.location.origin}/#${activeItem.id}` : window.location.href;
  navigator.clipboard.writeText(url).then(() => showToast('Link copied'));
});

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

/* ── Modal tags style (injected inline since already in CSS) ── */

/* ── Init ── */
buildArtboard();
centerCanvas();
// Pre-wrap so we start well inside safe territory
wrapEdges();
