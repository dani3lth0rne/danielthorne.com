/* ── Annotation Tool (temporary dev overlay) ── */
(function () {

  let annotating = false;
  let annotations = [];
  let pinCount = 0;
  let hoverEl = null;

  /* ── Inject styles ── */
  const style = document.createElement('style');
  style.textContent = `
    /* Toggle button */
    #ann-toggle {
      position: fixed;
      bottom: 28px;
      left: 28px;
      z-index: 9000;
      display: flex;
      align-items: center;
      gap: 7px;
      padding: 9px 14px 9px 11px;
      background: #1a1a1a;
      color: #f5f4f0;
      border: none;
      border-radius: 100px;
      font: 500 10px/1 -apple-system, "Helvetica Neue", sans-serif;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      transition: background 0.15s ease, transform 0.15s ease;
    }
    #ann-toggle:hover { background: #333; transform: scale(1.03); }
    #ann-toggle.active { background: #e85c2a; }
    #ann-toggle svg { flex-shrink: 0; }

    /* Annotating mode cursor */
    body.annotating { cursor: crosshair !important; }
    body.annotating * { cursor: crosshair !important; }

    /* Hover highlight */
    .ann-highlight {
      outline: 2px solid #e85c2a !important;
      outline-offset: 2px !important;
    }

    /* Pins */
    .ann-pin {
      position: fixed;
      z-index: 8500;
      width: 24px;
      height: 24px;
      border-radius: 50% 50% 50% 0;
      background: #e85c2a;
      color: #fff;
      font: 700 10px/24px -apple-system, sans-serif;
      text-align: center;
      transform: rotate(-45deg);
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      pointer-events: auto;
      cursor: pointer;
      transition: transform 0.15s ease;
    }
    .ann-pin:hover { transform: rotate(-45deg) scale(1.15); }
    .ann-pin span {
      display: block;
      transform: rotate(45deg);
      line-height: 24px;
    }

    /* Pin tooltip on hover */
    .ann-pin::after {
      content: attr(data-comment);
      position: absolute;
      left: 30px;
      top: -4px;
      transform: rotate(45deg);
      background: #1a1a1a;
      color: #f5f4f0;
      font: 400 11px/1.5 -apple-system, sans-serif;
      letter-spacing: 0;
      padding: 7px 10px;
      border-radius: 4px;
      white-space: pre-wrap;
      max-width: 220px;
      min-width: 120px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.15s ease;
      box-shadow: 0 4px 16px rgba(0,0,0,0.2);
    }
    .ann-pin:hover::after { opacity: 1; }

    /* Popover (comment form) */
    #ann-popover {
      position: fixed;
      z-index: 9500;
      background: #fff;
      border: 1px solid #dedad2;
      border-radius: 6px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.18);
      padding: 14px;
      width: 280px;
      display: none;
    }
    #ann-popover.show { display: block; }
    #ann-popover textarea {
      width: 100%;
      height: 80px;
      border: 1px solid #dedad2;
      border-radius: 3px;
      padding: 8px 10px;
      font: 12px/1.55 -apple-system, sans-serif;
      color: #111;
      resize: none;
      outline: none;
    }
    #ann-popover textarea:focus { border-color: #e85c2a; }
    #ann-popover-context {
      font: 10px/1.5 monospace;
      color: #888;
      margin-bottom: 8px;
      padding: 6px 8px;
      background: #f5f4f0;
      border-radius: 3px;
      word-break: break-all;
    }
    #ann-popover-actions {
      display: flex;
      gap: 6px;
      margin-top: 8px;
    }
    #ann-popover-actions button {
      flex: 1;
      padding: 7px;
      border-radius: 3px;
      font: 500 10px/1 -apple-system, sans-serif;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      cursor: pointer;
      border: 1px solid #dedad2;
      background: #fff;
      color: #111;
      transition: background 0.12s;
    }
    #ann-popover-save {
      background: #1a1a1a !important;
      color: #f5f4f0 !important;
      border-color: #1a1a1a !important;
    }
    #ann-popover-save:hover { background: #333 !important; }
    #ann-popover-cancel:hover { background: #f0ede8; }

    /* Side panel */
    #ann-panel {
      position: fixed;
      right: 0; top: 0; bottom: 0;
      z-index: 8800;
      width: 320px;
      background: #fafaf8;
      border-left: 1px solid #dedad2;
      display: none;
      flex-direction: column;
      font-family: -apple-system, "Helvetica Neue", sans-serif;
    }
    #ann-panel.show { display: flex; }
    #ann-panel-header {
      padding: 18px 18px 14px;
      border-bottom: 1px solid #dedad2;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    #ann-panel-header span {
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #111;
    }
    #ann-panel-header button {
      font-size: 10px;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #888;
      cursor: pointer;
      border: none;
      background: none;
      padding: 0;
    }
    #ann-panel-header button:hover { color: #111; }
    #ann-list {
      flex: 1;
      overflow-y: auto;
      padding: 12px;
    }
    .ann-entry {
      padding: 12px;
      margin-bottom: 8px;
      background: #fff;
      border: 1px solid #dedad2;
      border-radius: 4px;
    }
    .ann-entry-num {
      display: inline-block;
      width: 18px; height: 18px;
      border-radius: 50%;
      background: #e85c2a;
      color: #fff;
      font-size: 9px;
      font-weight: 700;
      line-height: 18px;
      text-align: center;
      margin-bottom: 7px;
    }
    .ann-entry-comment {
      font-size: 12px;
      line-height: 1.55;
      color: #111;
      margin-bottom: 6px;
    }
    .ann-entry-context {
      font: 9.5px/1.5 monospace;
      color: #aaa;
      word-break: break-all;
    }
    #ann-copy-all {
      margin: 12px;
      padding: 9px;
      background: #1a1a1a;
      color: #f5f4f0;
      border: none;
      border-radius: 3px;
      font: 500 10px/1 -apple-system, sans-serif;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      cursor: pointer;
      transition: background 0.12s;
    }
    #ann-copy-all:hover { background: #333; }
  `;
  document.head.append(style);

  /* ── Toggle button ── */
  const toggle = document.createElement('button');
  toggle.id = 'ann-toggle';
  toggle.innerHTML = `
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" stroke-width="1.4"/>
      <line x1="6.5" y1="3.5" x2="6.5" y2="9.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
      <line x1="3.5" y1="6.5" x2="9.5" y2="6.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
    </svg>
    Annotate
  `;
  document.body.append(toggle);

  /* ── Side panel ── */
  const panel = document.createElement('div');
  panel.id = 'ann-panel';
  panel.innerHTML = `
    <div id="ann-panel-header">
      <span>Annotations</span>
      <button id="ann-clear">Clear all</button>
    </div>
    <div id="ann-list"></div>
    <button id="ann-copy-all">Copy all for Claude</button>
  `;
  document.body.append(panel);

  /* ── Comment popover ── */
  const popover = document.createElement('div');
  popover.id = 'ann-popover';
  popover.innerHTML = `
    <div id="ann-popover-context"></div>
    <textarea id="ann-popover-text" placeholder="What don't you like about this?"></textarea>
    <div id="ann-popover-actions">
      <button id="ann-popover-cancel">Cancel</button>
      <button id="ann-popover-save">Save</button>
    </div>
  `;
  document.body.append(popover);

  let pendingPin = null;
  let pendingContext = null;

  /* ── Helpers ── */

  function getSelectorPath(el) {
    if (!el || el === document.body) return 'body';
    const parts = [];
    let cur = el;
    while (cur && cur !== document.body) {
      let part = cur.tagName.toLowerCase();
      if (cur.id) {
        part += `#${cur.id}`;
      } else if (cur.classList.length) {
        part += '.' + [...cur.classList].slice(0, 3).join('.');
      }
      parts.unshift(part);
      cur = cur.parentElement;
    }
    return parts.slice(-4).join(' > ');
  }

  function getContext(el) {
    const text = (el.innerText || el.textContent || '').trim().slice(0, 100);
    return {
      tag: el.tagName.toLowerCase(),
      classes: [...el.classList].join(' ').slice(0, 80),
      text: text,
      selector: getSelectorPath(el)
    };
  }

  function formatContext(ctx) {
    let out = `<${ctx.tag}`;
    if (ctx.classes) out += ` .${ctx.classes.replace(/\s+/g, '.')}`;
    out += '>';
    if (ctx.text) out += `\n"${ctx.text.slice(0, 60)}${ctx.text.length > 60 ? '…' : ''}"`;
    return out;
  }

  /* ── Toggle annotate mode ── */
  toggle.addEventListener('click', () => {
    annotating = !annotating;
    toggle.classList.toggle('active', annotating);
    document.body.classList.toggle('annotating', annotating);
    if (!annotating) {
      closePopover();
      if (hoverEl) { hoverEl.classList.remove('ann-highlight'); hoverEl = null; }
    }
    panel.classList.toggle('show', annotations.length > 0 || annotating);
  });

  /* ── Hover highlight ── */
  document.addEventListener('mouseover', e => {
    if (!annotating) return;
    const skip = ['#ann-toggle','#ann-popover','#ann-panel','.ann-pin'];
    if (skip.some(s => e.target.closest(s))) return;
    if (hoverEl) hoverEl.classList.remove('ann-highlight');
    hoverEl = e.target;
    hoverEl.classList.add('ann-highlight');
  });

  document.addEventListener('mouseout', e => {
    if (!annotating) return;
    if (hoverEl) hoverEl.classList.remove('ann-highlight');
    hoverEl = null;
  });

  /* ── Click to place pin ── */
  document.addEventListener('click', e => {
    if (!annotating) return;
    const skip = ['#ann-toggle','#ann-popover','#ann-panel','.ann-pin'];
    if (skip.some(s => e.target.closest(s))) return;

    e.preventDefault();
    e.stopPropagation();

    const ctx = getContext(e.target);

    // place a ghost pin
    if (pendingPin) pendingPin.remove();
    const pin = document.createElement('div');
    pin.className = 'ann-pin';
    pin.style.left = (e.clientX - 12) + 'px';
    pin.style.top  = (e.clientY - 24) + 'px';
    pin.innerHTML  = '<span>?</span>';
    document.body.append(pin);
    pendingPin = pin;
    pendingContext = { ctx, x: e.clientX, y: e.clientY };

    // show popover near click, nudge away from edge
    const pw = 280, ph = 160;
    let px = e.clientX + 20;
    let py = e.clientY - 20;
    if (px + pw > window.innerWidth  - 20) px = e.clientX - pw - 20;
    if (py + ph > window.innerHeight - 20) py = window.innerHeight - ph - 20;
    if (py < 10) py = 10;

    popover.style.left = px + 'px';
    popover.style.top  = py + 'px';
    popover.classList.add('show');
    document.getElementById('ann-popover-context').textContent = formatContext(ctx);
    document.getElementById('ann-popover-text').value = '';
    setTimeout(() => document.getElementById('ann-popover-text').focus(), 50);

  }, true);

  /* ── Save annotation ── */
  document.getElementById('ann-popover-save').addEventListener('click', () => {
    const text = document.getElementById('ann-popover-text').value.trim();
    if (!text) return;
    saveAnnotation(text, pendingContext);
    pendingPin = null;
    closePopover();
  });

  document.getElementById('ann-popover-text').addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      document.getElementById('ann-popover-save').click();
    }
  });

  document.getElementById('ann-popover-cancel').addEventListener('click', () => {
    if (pendingPin) { pendingPin.remove(); pendingPin = null; }
    closePopover();
  });

  function closePopover() {
    popover.classList.remove('show');
  }

  function saveAnnotation(comment, { ctx, x, y }) {
    pinCount++;
    const id = pinCount;

    // update ghost pin to real pin
    const allPins = document.querySelectorAll('.ann-pin span');
    const lastPin = document.querySelectorAll('.ann-pin');
    if (lastPin.length) {
      const last = lastPin[lastPin.length - 1];
      last.querySelector('span').textContent = id;
      last.dataset.comment = comment;
    }

    annotations.push({ id, comment, ctx, x, y });
    renderPanel();
    panel.classList.add('show');
  }

  /* ── Panel ── */
  function renderPanel() {
    const list = document.getElementById('ann-list');
    list.innerHTML = annotations.map(a => `
      <div class="ann-entry">
        <div class="ann-entry-num">${a.id}</div>
        <div class="ann-entry-comment">${a.comment}</div>
        <div class="ann-entry-context">${formatContext(a.ctx)}</div>
      </div>
    `).join('');
  }

  document.getElementById('ann-clear').addEventListener('click', () => {
    annotations = [];
    pinCount = 0;
    document.querySelectorAll('.ann-pin').forEach(p => p.remove());
    renderPanel();
    panel.classList.remove('show');
  });

  /* ── Copy all ── */
  document.getElementById('ann-copy-all').addEventListener('click', () => {
    if (!annotations.length) return;
    const out = annotations.map(a =>
      `[${a.id}] ${a.comment}\n    Element: ${formatContext(a.ctx)}`
    ).join('\n\n');
    navigator.clipboard.writeText(out).then(() => {
      const btn = document.getElementById('ann-copy-all');
      btn.textContent = 'Copied!';
      setTimeout(() => btn.textContent = 'Copy all for Claude', 2000);
    });
  });

})();
