/* ── Grid constants ── */
const GRID_COLS = 6;     // must satisfy GRID_COLS * GRID_ROWS >= WORK.length
const GRID_ROWS = 2;
const COL_STEP  = 560;   // card 280 + gap 280
const ROW_STEP  = 480;   // card 210 + gap 270
const TILE_W    = GRID_COLS * COL_STEP;   // 3360
const TILE_H    = GRID_ROWS * ROW_STEP;   // 960
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
  },
  {
    id: 'connect-social',
    title: 'Connect Social',
    headline: 'Quiet confidence,<br>in a category that shouts.',
    client: 'Connect Social', date: '2026', type: 'Brand identity, design system',
    role: 'Brand design lead',
    description: 'Connect Social is a performance marketing agency for high-growth e-commerce, DTC and subscription brands. They keep the roster small on purpose. The brand had to feel like the work — measured, sharp, and quietly better than everyone else’s.',
    thumb: 'images/cs-attention.jpg',
    hero:  'images/cs-logo.jpg',
    liveUrl: 'https://danielthorne.com/projects/connect-social',
    tags: ['Brand Identity', 'Design System', 'Performance Marketing'],
    blocks: [
      { kind: 'media', layout: 'full', items: [
        { src: 'images/cs-logo.jpg', caption: 'Primary lockup — the existing mark, rebuilt into a system' } ] },

      { kind: 'text', label: '01 — Positioning',
        heading: 'If Vercel and Stripe ran a performance marketing agency',
        body: ['That was the brief, more or less. The category defaults to loud: neon dashboards, guru energy, screenshots of ad spend. Connect Social wanted the opposite — selective, engineered, expensive-feeling. A brand that reads as the sharpest partner in the room rather than the one selling hardest.',
               'The logo stayed. Everything else — colour, type, layout, graphic language — was open. The work leans almost entirely black and white and lets typography carry the weight, with a single acid lime held back for moments that need to land.'] },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/cs-attention.jpg', caption: 'Campaign statement — attention that lasts' } ] },

      { kind: 'text', label: '02 — Type & palette',
        heading: 'Three typefaces, each with a job',
        body: ['Space Grotesk sets display and marketing headlines in all caps. Host Grotesk handles every piece of standard communication — body, subheads, buttons, navigation. Geist Mono is reserved for anything structural or factual: dates, prices, metrics, tags, page numbers.',
               'The palette is four values. Lime is an accent, never a background wash; it is the only colour in a system otherwise built from ink, light and a single warm grey.'] },

      { kind: 'media', layout: 'pair', items: [
        { src: 'images/cs-type.jpg',  caption: 'Typeface roles' },
        { src: 'images/cs-icons.jpg', caption: 'Iconography & overlay elements' } ] },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/cs-palette.jpg', caption: 'Lime EBFF00 · Dark 070707 · Light F8F8F8 · Grey CBC7BC' } ] },

      { kind: 'quote', text: 'Measured, sharp, and quietly better than everyone else’s.', by: 'Brand principle' },

      { kind: 'text', label: '03 — Photography',
        heading: 'Documentary, not stock',
        body: 'Black-and-white, cinematic, editorial. Urban environments and candid people in motion, shot with high contrast, deep blacks and visible grain. Motion blur is encouraged. Colour stays out of the photography entirely so the accent can do its job on top of it.' },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/cs-photography.jpg', caption: 'Photography direction' } ] },

      { kind: 'text', label: '04 — In use',
        heading: 'Holds up in a Meta feed and a boardroom PDF',
        body: 'The system had to survive both extremes: a paid social placement scrolled past in half a second, and a deck opened across a table. Same grid, same restraint, different volume.' },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/cs-growth.jpg', caption: 'Deck system — slide example' } ] },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/cs-posters.jpg', caption: 'Out-of-home and paid social' } ] }
    ]
  },
  {
    id: 'taiga-data',
    title: 'Taiga Data',
    headline: 'Making c-store data<br>legible.',
    client: 'Taiga Data', date: '2025 — 2026', type: 'Rebrand & website',
    role: 'Brand and web design',
    description: 'Taiga is a front-office data platform built exclusively for convenience store retailers — fuel, loyalty, POS and ATG systems pulled into one place. A full rebrand, then a marketing site designed around the people who actually have to read the numbers.',
    thumb: 'images/taiga-browser.jpg',
    hero:  'images/taiga-browser.jpg',
    liveUrl: 'https://danielthorne.com/projects/taiga-data',
    tags: ['Rebrand', 'Web Design', 'Data Platform'],
    blocks: [
      { kind: 'media', layout: 'full', items: [
        { src: 'images/taiga-browser.jpg', caption: 'Homepage' } ] },

      { kind: 'text', label: '01 — Rebrand',
        heading: 'A mark that grows out of the name',
        body: ['Taiga is the boreal forest — the largest land biome on earth, and a fitting image for a platform that sits over an entire enterprise. The mark stacks into a conifer built from data strata, and the wordmark is set in a soft geometric sans that keeps a B2B product from feeling clinical.',
               'The palette runs deep pine through to a signal chartreuse, with soft greens and a lavender reserved for data moments. It is colour used to separate and clarify, never to decorate.'] },

      { kind: 'media', layout: 'pair', items: [
        { src: 'images/taiga-brandgrid.jpg', caption: 'Identity system' },
        { src: 'images/taiga-palette.jpg',   caption: 'Palette' } ] },

      { kind: 'text', label: '02 — The site',
        heading: 'Built for operators, not analysts',
        body: 'Convenience retail runs on thin margins and fast decisions. The site leads with outcomes rather than architecture — what changes on the floor, in the fuel pricing, in the promo calendar — and only then explains the platform underneath.' },

      { kind: 'scroller', src: 'images/taiga-page-full.jpg', url: 'taigadata.com',
        caption: 'Full homepage — scroll' },

      { kind: 'stats', items: [
        { n: '22M+',  l: 'Transactions monitored daily' },
        { n: '200+',  l: 'Stores nationwide' },
        { n: '2.1M',  l: 'Transactions processed yearly' },
        { n: '15K+',  l: 'Customers' } ] },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/taiga-cards.jpg', caption: 'Proof section — colour as a sorting device' } ] },

      { kind: 'text', label: '03 — Audience routes',
        heading: 'One platform, five ways in',
        body: 'Retail, IT, Operators, Leadership and Core Platform each got their own page. Same spine, different evidence — an IT director and a store operator arrive with completely different questions, and the site answers each without making either read the other’s.' },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/taiga-pages.png', float: true, caption: 'Retail · IT · Operators' } ] },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/taiga-integrations.jpg', caption: 'Integrations — fuel pumps, loyalty, POS, ATG' } ] },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/taiga-footer.jpg', caption: 'Footer and closing call to action' } ] }
    ]
  },
  {
    id: 'adv',
    title: 'ADV',
    headline: 'Advantage,<br>you.',
    client: 'ADV', date: '2024', type: 'Brand identity',
    role: 'Brand design lead',
    description: 'ADV builds premium, functional tennis gear for players dedicated to a lifetime of play. The brand needed to sit next to the heritage names on a pro-shop wall without borrowing any of their language — daring, experimental, and unmistakably its own.',
    thumb: 'images/adv-mission.jpg',
    hero:  'images/adv-logo.jpg',
    liveUrl: 'https://danielthorne.com/projects/adv',
    tags: ['Brand Identity', 'Sport', 'Social System'],
    blocks: [
      { kind: 'media', layout: 'full', items: [
        { src: 'images/adv-logo.jpg', caption: 'Identity' } ] },

      { kind: 'text', label: '01 — Vision & mission',
        heading: 'A brand for a lifetime of play',
        body: 'Tennis branding tends to split into two camps: country-club heritage or hyper-technical performance. ADV sits between them — engineered gear with the attitude of a club crew, spoken in near-black and a spring green that reads instantly on clay, hard court and feed alike.' },

      { kind: 'media', layout: 'pair', items: [
        { src: 'images/adv-vision.jpg',  caption: 'Vision' },
        { src: 'images/adv-mission.jpg', caption: 'Mission' } ] },

      { kind: 'quote', text: 'To be the daring, innovative and experimental brand for racquet sports athletes.', by: 'ADV — vision' },

      { kind: 'text', label: '02 — The system',
        heading: 'Rules tight enough to hand over',
        body: 'Clear space, minimum sizes, line weights, the approved and unapproved treatments of the mark, and a single geometric sans carrying every tier of type. The guide was built so a social manager could open it on a Friday and ship correct work without asking anyone.' },

      { kind: 'media', layout: 'pair', items: [
        { src: 'images/adv-guide.jpg', caption: 'Logo rules' },
        { src: 'images/adv-type.jpg',  caption: 'Type scale' } ] },

      { kind: 'text', label: '03 — Social',
        heading: 'Templates that survive contact with a feed',
        body: 'A kit of post formats — pill labels, outlined type lockups, organic photo masks and vertical location rules — that let the team produce a month of content in an afternoon and still look like one brand.' },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/adv-social.png', float: true, caption: 'Instagram templates' } ] },

      { kind: 'media', layout: 'inset', items: [
        { src: 'images/adv-contents.jpg', caption: 'Brand book' } ] }
    ]
  },
  {
    id: 'beri',
    title: 'Beri',
    headline: 'Experience the<br>wonders of Amla.',
    client: 'Beri by Dr. Kanodia', date: '2024 — 2025', type: 'Brand lead — packaging, campaign, site',
    role: 'Brand & creative direction',
    description: 'Beri is Amla-enhanced skincare from Dr. Kanodia, built on a fruit used for thousands of years and grown on one of the first Amla orchards in America. I led the brand end to end — packaging, digital marketing, visual direction, and the creative direction of the photography that had to hold it all together.',
    thumb: 'images/beri-product.jpg',
    hero:  'images/beri-product.jpg',
    liveUrl: 'https://danielthorne.com/projects/beri',
    tags: ['Brand Direction', 'Packaging', 'Art Direction', 'Web Design'],
    blocks: [
      { kind: 'media', layout: 'mid', items: [
        { src: 'images/beri-product.jpg', caption: 'Amla Youth Serum — 30ml' } ] },

      { kind: 'text', label: '01 — The brand',
        heading: 'Organic purity, mystic allure',
        body: ['Amla is a remarkable fruit — among the richest plant sources of antioxidants on earth, with an ORAC value that makes pomegranate and goji look ordinary. The brand had to carry both halves of that story: the botanical heritage and the clinical result.',
               'Freight Display Pro sets everything brand-facing with a quiet editorial confidence, with Sharp Grotesk handling details and sub-headings. The palette is a deep Beri Green against a warm cream, with sage as the bridge between them.'] },

      { kind: 'media', layout: 'pair', items: [
        { src: 'images/beri-logos.jpg',  caption: 'Wordmark construction' },
        { src: 'images/beri-colors.jpg', caption: 'Beri Green 1D382A · Sage 9CB797 · Light FFFCDD' } ] },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/beri-type.jpg', caption: 'Typography' } ] },

      { kind: 'quote', text: 'An enchanting blend of organic purity and mystic allure.', by: 'Brand principle' },

      { kind: 'text', label: '02 — Packaging',
        heading: 'A letter in every box',
        body: 'The insert card carries a note from Dr. Kanodia about his mother introducing him to Amla as a child — the reason the orchard and the product exist. It turns the unboxing into the one moment where the brand gets to speak in the first person.' },

      { kind: 'media', layout: 'inset', items: [
        { src: 'images/beri-pack-box.jpg', caption: 'Bottle and carton' } ] },

      { kind: 'media', layout: 'mid', items: [
        { src: 'images/beri-card.png', float: true, caption: 'Insert card — recto and verso' } ] },

      { kind: 'text', label: '03 — Visual direction',
        heading: 'Wonder, rejuvenation, home',
        body: 'The direction brief was bold and specific: high contrast, rich colour, innovative lighting, euphoric filters, natural elements — and story first, always. Every shot had to feel like it was taken somewhere real rather than staged against seamless.' },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/beri-photo.jpg', caption: 'Visual direction' } ] },

      { kind: 'media', layout: 'pair', items: [
        { src: 'images/beri-photogrid.jpg',   caption: 'Photography categories' },
        { src: 'images/beri-social-dir.jpg',  caption: 'Social guidelines' } ] },

      { kind: 'text', label: '04 — Campaign',
        heading: 'Teaching the fruit, selling the serum',
        body: 'The launch campaign led with education — a series comparing Amla’s antioxidant value against the fruits people already believe in — then closed on the product and the claim: brighter, firmer, stronger skin, powered by nature and science.' },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/beri-social.png', float: true, caption: 'Paid and organic social' } ] },

      { kind: 'media', layout: 'narrow', items: [
        { src: 'images/beri-ad.jpg', caption: 'Static ad — 9:16' } ] },

      { kind: 'text', label: '05 — The site',
        heading: 'amlaberi.com',
        body: ['The storefront had to do what the insert card does — lead with the fruit, not the formula. The homepage opens on Amla itself and only then earns its way to the serum, with the antioxidant proof points sitting between the two.',
               'Freight Display carries the long-form voice throughout, set against the same cream and deep green, and the footer closes on the wordmark at full scale.'] },

      { kind: 'scroller', src: 'images/beri-site-full.jpg', url: 'amlaberi.com',
        caption: 'amlaberi.com — full homepage, scroll' },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/beri-site-amla.jpg', caption: 'The case for Amla' } ] },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/beri-site-doctor.jpg', caption: 'The doctor behind the orchard' } ] },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/beri-site-footer.jpg', caption: 'Footer' } ] },

      { kind: 'media', layout: 'full', items: [
        { src: 'images/beri-hero-fruit.jpg', caption: 'Amla Youth Serum' } ] }
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
const blurOverlay  = document.getElementById('blur-overlay');

/* ── Cursor lens ── */
let lastMouseX = -600, lastMouseY = -600;

document.addEventListener('mousemove', e => {
  lastMouseX = e.clientX;
  lastMouseY = e.clientY;
  // Don't update the lens while dragging — it fights the pan and displaces items
  if (!dragging) {
    blurOverlay.style.setProperty('--cx', e.clientX + 'px');
    blurOverlay.style.setProperty('--cy', e.clientY + 'px');
  }
});

/* ── Build artboard ── */

// Local tile positions: GRID_COLS × GRID_ROWS grid — one slot per work item.
const TILE_POSITIONS = [];
for (let r = 0; r < GRID_ROWS; r++) {
  for (let c = 0; c < GRID_COLS; c++) {
    TILE_POSITIONS.push({ x: c * COL_STEP, y: r * ROW_STEP });
  }
}
// Every item needs a slot; without one the tile builder throws mid-drag and the
// canvas stops rendering. Fail loudly here instead.
if (TILE_POSITIONS.length < WORK.length) {
  console.error(`Grid has ${TILE_POSITIONS.length} slots but WORK has ${WORK.length} items — ` +
                `raise GRID_COLS/GRID_ROWS and extend SLOT_DUR/SLOT_DEL.`);
}

// Per-slot jitter — seed is item index only, so every tile copy has the same offset.
// This makes the canvas visually periodic (repeats every TILE_W × TILE_H),
// enabling seamless teleportation at edges.
function slotJitter(idx, range) {
  const s = Math.sin(idx * 127.1 + 311.7) * 43758.5453123;
  return (s - Math.floor(s) - 0.5) * 2 * range;
}
const SLOT_JX  = WORK.map((_, i) => slotJitter(i,      48));
const SLOT_JY  = WORK.map((_, i) => slotJitter(i + 50, 36));
const SLOT_DUR = [7.2, 9.1, 6.8, 8.6, 7.9, 8.3, 6.5, 9.4, 7.6, 8.9, 7.0, 9.7]; // per slot
const SLOT_DEL = [0,   1.6, 3.1, 0.8, 4.2, 2.2, 1.1, 3.7, 2.6, 0.4, 3.4, 1.9]; // per slot

function makeAura(src) {
  const aura = document.createElement('div');
  aura.className = 'card-aura';
  const ai = document.createElement('img');
  ai.src = src; ai.alt = ''; ai.draggable = false; ai.setAttribute('aria-hidden', 'true');
  aura.append(ai);
  return aura;
}

function makeWorkItem(project, absX, absY, idx) {
  const el = document.createElement('div');
  el.className = 'artboard-item mode-work';
  el.style.cssText = `left:${absX}px; top:${absY}px; --float-dur:${SLOT_DUR[idx]}s; --float-delay:${SLOT_DEL[idx]}s;`;

  const card = document.createElement('div');
  card.className = 'item-card';

  const img = document.createElement('img');
  img.className = 'card-img';
  img.src = project.thumb;
  img.alt = project.title;
  img.loading = 'lazy';
  img.draggable = false;

  card.append(makeAura(project.thumb), img);
  card.addEventListener('click', () => { if (!didDrag) openWorkModal(project); });
  el.append(card);
  return el;
}

function makePhotoItem(p, absX, absY, dur = 7, delay = 0) {
  const el = document.createElement('div');
  el.className = 'artboard-item mode-personal';
  el.style.cssText = `left:${absX}px; top:${absY}px; --float-dur:${dur}s; --float-delay:${delay}s;`;

  const card = document.createElement('div');
  card.className = 'item-photo';

  if (p.thumb) {
    const img = document.createElement('img');
    img.className = 'card-img';
    img.src = p.thumb; img.alt = p.title; img.draggable = false;
    card.append(makeAura(p.thumb), img);
  } else {
    card.innerHTML = `<div class="photo-placeholder"><span>Photo</span></div>`;
  }

  const label = document.createElement('div');
  label.className = 'photo-label';
  label.textContent = p.title;
  card.append(label);

  card.addEventListener('click', () => { if (!didDrag) openPersonalModal(p); });
  el.append(card);
  return el;
}

function makePaperItem(p, absX, absY, dur = 7, delay = 0) {
  const el = document.createElement('div');
  el.className = 'artboard-item mode-personal';
  el.style.cssText = `left:${absX}px; top:${absY}px; --float-dur:${dur}s; --float-delay:${delay}s;`;

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
        artboard.append(makeWorkItem(project, ox + lx + SLOT_JX[idx], oy + ly + SLOT_JY[idx], idx));
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
        const dur   = [6.4, 7.8, 8.2, 7.1, 9.0][idx];
        const delay = [0.4, 1.8, 3.2, 0.9, 2.6][idx];
        if (p.type === 'photo') artboard.append(makePhotoItem(p, ox + pos.x, oy + pos.y, dur, delay));
        if (p.type === 'paper') artboard.append(makePaperItem(p, ox + pos.x, oy + pos.y, dur, delay));
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

  // startX/Y must move OPPOSITE to panX/Y so the drag anchor stays consistent
  if (panX > -TILE_W)        { panX -= TILE_W; startX += TILE_W; }
  if (panX < minX + TILE_W)  { panX += TILE_W; startX -= TILE_W; }
  if (panY > -TILE_H)        { panY -= TILE_H; startY += TILE_H; }
  if (panY < minY + TILE_H)  { panY += TILE_H; startY -= TILE_H; }
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
  // Move lens off-screen while dragging so it doesn't conflict with panning
  blurOverlay.style.setProperty('--cx', '-9999px');
  blurOverlay.style.setProperty('--cy', '-9999px');
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
  setTimeout(() => {
    didDrag = false;
    // Restore lens to wherever the cursor landed
    blurOverlay.style.setProperty('--cx', lastMouseX + 'px');
    blurOverlay.style.setProperty('--cy', lastMouseY + 'px');
  }, 50);
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
  modalOverlay.scrollTop = 0;
  modalOverlay.classList.add('open');
  document.body.classList.add('modal-open');
  blurOverlay.classList.add('hidden');
  document.addEventListener('keydown', onKey);
}

function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.classList.remove('modal-open');
  blurOverlay.classList.remove('hidden');
  document.removeEventListener('keydown', onKey);
  activeItem = null;
}

function onKey(e) { if (e.key === 'Escape') closeModal(); }

modalClose.addEventListener('click', closeModal);
// Close when clicking the overlay backdrop — anywhere outside the modal frame
// Close on any click outside the content column — including the gutters to its
// left and right. (.modal-frame spans the full width, so testing against it
// would never match a gutter click; .modal-inner hugs the content.)
modalOverlay.addEventListener('click', e => {
  if (modalInner.contains(e.target)) return;
  if (e.target.closest('.modal-controls')) return;   // the buttons handle themselves
  closeModal();
});

/* ── Case-study block renderers ──
   Blocks carry a `kind`. Legacy entries (plain {heading, body, images})
   are normalised into blocks so both schemas render through one path. */

const paras = t => (Array.isArray(t) ? t : [t]).map(x => `<p class="cs-p">${x}</p>`).join('');

function figure(item) {
  const src = typeof item === 'string' ? item : item.src;
  const cap = typeof item === 'string' ? '' : item.caption;
  const float = typeof item === 'object' && item.float ? ' float' : '';
  return `<figure class="cs-fig${float}">
    <img src="${src}" alt="${cap || ''}" loading="lazy">
    ${cap ? `<figcaption class="cs-cap">${cap}</figcaption>` : ''}
  </figure>`;
}

const BLOCK = {
  text: b => `
    ${b.heading ? `<div class="cs-split">
        <div>${b.label ? `<div class="cs-label">${b.label}</div>` : ''}
             <h2 class="cs-h">${b.heading}</h2></div>
        <div>${paras(b.body)}</div>
      </div>`
      : `${b.label ? `<div class="cs-label">${b.label}</div>` : ''}${paras(b.body)}`}`,

  media: b => `<div class="cs-media ${b.layout || 'full'}">
      ${b.items.map(figure).join('')}
    </div>`,

  quote: b => `<blockquote class="cs-quote">${b.text}
      ${b.by ? `<div class="cs-quote-by">${b.by}</div>` : ''}
    </blockquote>`,

  stats: b => `<div class="cs-stats">
      ${b.items.map(s => `<div><div class="cs-stat-n">${s.n}</div>
                               <div class="cs-stat-l">${s.l}</div></div>`).join('')}
    </div>`,

  scroller: b => `<div class="cs-scroll-win">
      <div class="cs-scroll-bar">
        <i style="background:#f0625a"></i><i style="background:#f4bd4f"></i><i style="background:#61c454"></i>
        <span class="cs-scroll-url">${b.url || ''}</span>
      </div>
      <div class="cs-scroll-vp"><img src="${b.src}" alt="${b.caption || ''}" loading="lazy"></div>
    </div>
    ${b.caption ? `<div class="cs-cap">${b.caption}</div>` : ''}`
};

function toBlocks(p) {
  if (p.blocks) return p.blocks;
  // Legacy shape: hero image, then heading/body/images per section.
  const out = [{ kind: 'media', layout: 'full', items: [p.hero] }];
  p.sections.forEach(s => {
    out.push({ kind: 'text', heading: s.heading, body: s.body });
    if (s.images && s.images.length)
      out.push({ kind: 'media', layout: s.images.length === 2 ? 'pair' : 'full', items: s.images });
  });
  return out;
}

function openWorkModal(p) {
  activeItem = p;

  const blocksHTML = toBlocks(p)
    .map(b => `<div class="cs-block">${(BLOCK[b.kind] || BLOCK.text)(b)}</div>`)
    .join('');

  const facts = [
    ['Client', p.client],
    ['Year',   p.date],
    ['Scope',  p.type],
    p.role ? ['Role', p.role] : null
  ].filter(Boolean);

  const wrap = document.createElement('div');
  wrap.className = 'cs-modal';
  wrap.innerHTML = `
    <header class="cs-head">
      <div class="cs-eyebrow">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
      <h1 class="cs-title">${p.headline || p.title}</h1>
      <p class="cs-lede">${p.description}</p>
      <div class="cs-facts">
        ${facts.map(([k, v]) => `<div><div class="cs-fact-k">${k}</div>
                                     <div class="cs-fact-v">${v}</div></div>`).join('')}
      </div>
    </header>
    ${blocksHTML}
    <div class="cs-foot">${p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('')}</div>
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
wrapEdges();

// backdrop-filter on the blur-overlay won't pick up will-change:transform
// layers until their transform is updated at least once. Force it.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    applyTransform();
  });
});
