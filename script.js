/* =====================================================================
   CONTENT: edit this section to add real images and links.
   Empty image paths keep the section hidden until real media is added.
   Example: main: 'assets/projects/temperature-converter-main.png'
   Links appear only when github / live are filled in.
   ===================================================================== */
const SKILLS = [
  ['Programming', ['C', 'Java', 'Python', 'PHP', 'JavaScript']],
  ['Web Development', ['HTML', 'CSS', 'JavaScript', 'PHP', 'AngularJS']],
  ['Database', ['MySQL']],
  ['UI/UX & Design', ['Figma', 'Canva', 'Adobe Photoshop', 'Adobe Illustrator', 'Blender']],
  ['Tools', ['Git', 'GitHub', 'VS Code']],
];
const INTERESTS = ['UI/UX Design', 'Front-End Development', 'Software Development', 'Web Development', 'Product Design', 'Continuous Learning'];

const PROJECTS = [
  { n: '01', title: 'Temperature Converter', cat: 'Software Development', tech: 'Java', slug: 'temperature-converter',
    desc: 'A Java-based application for converting temperatures between different units.',
    features: ['Converts temperature values between units', 'Takes a value as user input'], main: 'assets/projects/temperature-converter-main.svg', shots: [], github: '', live: '' },
  { n: '02', title: 'CRUD Application', cat: 'Software Development', tech: 'Programming / Database concepts', slug: 'crud-operation',
    desc: 'A practical implementation demonstrating Create, Read, Update, and Delete operations.',
    features: ['Create records', 'Read records', 'Update records', 'Delete records'], main: 'assets/projects/crud-operation-main.svg', shots: [], github: '', live: '' },
  { n: '03', title: 'Guessing Game', cat: 'Programming', tech: 'Programming', slug: 'guessing-game',
    desc: 'An interactive programming project demonstrating user input, conditions, and logical programming concepts.',
    features: ['Handles user input', 'Uses conditions and game logic'], main: 'assets/projects/guessing-game-main.svg', shots: [], github: '', live: '' },
  { n: '04', title: 'Random Number Pattern', cat: 'Programming', tech: 'Programming', slug: 'random-number-pattern',
    desc: 'A programming exercise focused on loops, logic, random number generation, and pattern-based output.',
    features: ['Generates random numbers', 'Prints pattern-based output with loops'], main: 'assets/projects/random-number-pattern-main.svg', shots: [], github: '', live: '' },
];

/* UI/UX phone showcase: add real screens here when your project is ready.
   Example: images: ['assets/uiux/finance-home.png', ...] (one per screen, in order).
   gallery: [] holds large project images for the strip under the phone. */
const UIUX = [
  { n: '01', title: 'Mobile Finance', tools: 'Figma (edit to match your project)', approach: '', case: '', images: [], gallery: [],
    tabs: ['Home', 'Stats', 'Activity', 'Analytics', 'Profile'], screens: [
      ['Home', 'Welcome back', 'Total balance', '$12,480.00', 'Sample data', [['Income', '$3,200'], ['Spending', '$1,150']], [['Groceries', 'Today', '-$54.20'], ['Salary', 'Yesterday', '+$3,200'], ['Transport', 'Monday', '-$12.50']], 'Send money'],
      ['Dashboard', 'This month', 'Monthly budget', '$2,400', '$1,150 spent', [['Saved', '$450'], ['Remaining', '$1,250']], [['Food', '48% of spend', '$520'], ['Bills', '30% of spend', '$330'], ['Leisure', '12% of spend', '$130']], 'Edit budget'],
      ['Transactions', 'Recent activity', 'Today', '3 payments', 'Across 2 accounts', [['Money in', '$3,200'], ['Money out', '$66.70']], [['Groceries', 'Card', '-$54.20'], ['Coffee', 'Card', '-$4.00'], ['Metro', 'Wallet', '-$8.50']], 'Filter'],
      ['Analytics', 'Spending trends', 'This week', '$286', 'Lower than last week', [['Highest', 'Food'], ['Lowest', 'Travel']], [['Mon', 'Spending', '$40'], ['Tue', 'Spending', '$72'], ['Wed', 'Spending', '$31']], 'View report'],
      ['Profile', 'Account', 'Your plan', 'Standard', 'Sample account', [['Cards', '2'], ['Goals', '3']], [['Personal info', 'Name, email', '›'], ['Security', 'PIN, biometrics', '›'], ['Notifications', 'Alerts', '›']], 'Log out']] },
  { n: '02', title: 'Productivity', tools: 'Figma (edit to match your project)', approach: '', case: '', images: [], gallery: [],
    tabs: ['Home', 'Tasks', 'Calendar', 'Stats', 'Profile'], screens: [
      ['Home', 'Today’s focus', 'Tasks due today', '5 tasks', '2 completed', [['Focus', '1h 20m'], ['Streak', '4 days']], [['Review notes', '10:00 AM', 'Done'], ['Design wireframe', '1:00 PM', 'Next'], ['Practice Java', '6:00 PM', 'Later']], 'Add task'],
      ['Tasks', 'All tasks', 'In progress', '3 tasks', 'Sorted by time', [['Open', '3'], ['Done', '2']], [['Draft layout', 'Design', 'High'], ['Fix bug', 'Code', 'Medium'], ['Read article', 'Learning', 'Low']], 'New task'],
      ['Calendar', 'This week', 'Next event', 'Study session', 'Tomorrow, 5:00 PM', [['Events', '4'], ['Free', '2 days']], [['Mon', 'Lab work', '9:00'], ['Tue', 'Study session', '17:00'], ['Thu', 'Project work', '14:00']], 'Add event'],
      ['Statistics', 'Your progress', 'Completed', '18 tasks', 'This month', [['On time', '14'], ['Late', '4']], [['Design', 'Category', '6'], ['Code', 'Category', '8'], ['Learning', 'Category', '4']], 'Export'],
      ['Profile', 'Settings', 'Workspace', 'Personal', 'Sample account', [['Lists', '4'], ['Reminders', 'On']], [['Notifications', 'Daily digest', '›'], ['Theme', 'Light', '›'], ['Help', 'Guides', '›']], 'Log out']] },
  { n: '03', title: 'E-Commerce', tools: 'Figma (edit to match your project)', approach: '', case: '', images: [], gallery: [],
    tabs: ['Home', 'Shop', 'Item', 'Cart', 'Pay'], screens: [
      ['Home', 'Discover', 'Featured', 'New arrivals', 'Sample catalogue', [['Categories', '6'], ['Offers', '2']], [['Everyday Tote', 'Bags', '$49'], ['Desk Lamp', 'Home', '$32'], ['Canvas Shoes', 'Footwear', '$58']], 'Browse all'],
      ['Products', 'All products', 'Showing', '24 items', 'Sorted by popular', [['Filter', 'Price'], ['Sort', 'Popular']], [['Ceramic Mug', 'Kitchen', '$14'], ['Notebook Set', 'Stationery', '$11'], ['Backpack', 'Bags', '$64']], 'Apply filters'],
      ['Product Details', 'Everyday Tote', 'Price', '$49.00', 'In stock', [['Colour', 'Sand'], ['Size', 'M']], [['Description', 'Roomy daily tote', '›'], ['Delivery', '3 to 5 days', '›'], ['Reviews', 'Sample', '›']], 'Add to cart'],
      ['Cart', 'Your cart', 'Subtotal', '$98.00', '2 items', [['Items', '2'], ['Shipping', 'Free']], [['Everyday Tote', 'Qty 1', '$49'], ['Desk Lamp', 'Qty 1', '$32'], ['Gift wrap', 'Optional', '$17']], 'Checkout'],
      ['Checkout', 'Almost there', 'Order total', '$98.00', 'Sample order', [['Address', 'Saved'], ['Payment', 'Card']], [['Shipping', 'Home address', '›'], ['Payment method', 'Card ending 0000', '›'], ['Promo code', 'None', '›']], 'Place order']] },
];

/* Design gallery: set src (assets/design/...) and alt for each real artwork. */
const DESIGNS = [
  { title: 'Wedding Invitation', category: 'Invitations', filter: 'Invitations', image: 'assets/design/invitation-card-design.svg', description: 'Wedding invitation design', size: 'large', alt: 'Elegant wedding invitation card design in cream and gold tones' },
  { title: 'Arabic Calligraphy', category: 'Calligraphy', filter: 'Calligraphy', image: 'assets/design/arabic-calligraphy-01.svg', description: 'Arabic calligraphy composition', size: 'tall', alt: 'Arabic calligraphy artwork in a traditional ornamental composition' },
  { title: 'Poster Design', category: 'Posters', filter: 'Posters', image: 'assets/design/poster-01.svg', description: 'Modern poster design', size: 'wide', alt: 'Modern poster design with stylish typography and soft color palette' },
  { title: 'Custom Name Calligraphy', category: 'Custom Calligraphy', filter: 'Calligraphy', image: 'assets/design/custom-name-calligraphy.svg', description: 'Custom name artwork', size: 'small', alt: 'Custom name artwork rendered in Arabic-inspired calligraphy' },
  { title: 'Wedding & Nikkah', category: 'Invitations', filter: 'Invitations', image: 'assets/design/nikkah-01.svg', description: 'Wedding and nikkah concept', size: 'medium', alt: 'Wedding and nikkah design concept with floral and elegant details' },
  { title: 'Digital Artwork', category: 'Digital Art', filter: 'Digital Art', image: 'assets/design/digital-art-01.svg', description: 'Digital composition study', size: 'large', alt: 'Digital artwork composition with layered shapes and soft gradients' },
];

/* Optional concept visuals can stay here for projects that need a temporary mockup, but they are hidden when a real image is added. */
const CONCEPTS = {
  'temperature-converter': '<header><i></i><i></i><i></i><b>Temperature Converter</b></header><div class="bd"><div class="row2"><span>Value</span><b>25 °C</b></div><div class="big2">77 °F</div><div class="row2"><span>Kelvin</span><b>298.15 K</b></div><span class="pill">Convert</span></div>',
  'crud-operation': '<header><i></i><i></i><i></i><b>Records</b></header><div class="bd"><div class="row2"><b>Sample record 1</b><span>Edit · Delete</span></div><div class="row2"><b>Sample record 2</b><span>Edit · Delete</span></div><div class="row2"><b>Sample record 3</b><span>Edit · Delete</span></div><span class="pill">+ Create</span></div>',
  'guessing-game': '<header><i></i><i></i><i></i><b>Guessing Game</b></header><div class="bd"><p style="margin:0">Guess a number between 1 and 100</p><div class="row2"><span>Your guess</span><b>42</b></div><div class="big2">Too low</div><span class="pill">Attempts: 3</span></div>',
  'random-number-pattern': '<header><i></i><i></i><i></i><b>Pattern output</b></header><div class="bd"><pre>7\n4 9\n2 8 5\n6 1 3 9</pre><span class="pill">Random values</span></div>',
};

/* ===================================================================== */
document.documentElement.classList.add('js');
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
function el(tag, cls, text) { const e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
function realImg(src, alt) { const i = new Image(); i.src = src; i.alt = alt; i.loading = 'lazy'; i.decoding = 'async'; return i; }
/* Lightbox for real images */
const lb = $('#lb');
function zoomable(fig, src, alt) { fig.classList.add('zoomable'); fig.tabIndex = 0; fig.setAttribute('role', 'button'); fig.setAttribute('aria-label', 'Enlarge image: ' + alt);
  const open = () => { $('#lbImg').src = src; $('#lbImg').alt = alt; lb.showModal(); };
  fig.addEventListener('click', open); fig.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } }); }
$('#lbClose').onclick = () => lb.close(); lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
function slot(fig, src, alt) { if (src) { fig.append(realImg(src, alt)); zoomable(fig, src, alt); } return fig; }

SKILLS.forEach(([name, items]) => { const r = el('div', 'sk reveal'); r.append(el('h3', '', name)); const u = el('ul', 'tags'); items.forEach(i => u.append(el('li', '', i))); r.append(u); $('#skillList').append(r); });
INTERESTS.forEach(i => $('#interests').append(el('li', '', i)));

PROJECTS.forEach(p => {
  const a = el('article', 'proj'), m = el('div', 'pmeta');
  m.append(el('span', 'pnum', 'Project ' + p.n), el('h3', '', p.title), el('span', 'cat', p.cat), el('p', '', p.desc), el('p', 'small', 'Technology: ' + p.tech));
  const u = el('ul', 'feat'); p.features.forEach(f => u.append(el('li', '', f))); m.append(u);
  if (p.github || p.live) { const l = el('div', 'links'); [['GitHub', p.github], ['Live Project', p.live]].forEach(([t, h]) => { if (h) { const x = el('a', 'btn btn-sm btn-ghost', t); x.href = h; x.target = '_blank'; x.rel = 'noopener'; l.append(x); } }); m.append(l); }

  const md = el('div', 'pmedia');
  const showMain = !!p.main;
  const showShots = p.shots.some(Boolean);
  if (showMain || showShots) {
    if (showMain) {
      const mf = el('figure', 'media main-img');
      slot(mf, p.main, p.title + ' screenshot');
      md.append(mf);
    }
    if (showShots) {
      const sh = el('div', 'shots');
      p.shots.forEach((s, i) => { if (s) sh.append(slot(el('figure', 'media'), s, p.title + ' screenshot ' + (i + 1))); });
      md.append(sh);
    }
  }

  a.append(m, md); $('#projects').append(a);
});

function renderDesignGallery(filter = 'All') {
  const gallery = $('#gallery');
  if (!gallery) return;
  gallery.remove();
}

const DESIGN_FILTERS = ['All', 'Invitations', 'Posters', 'Calligraphy', 'Digital Art'];
function setupDesignGallery() {
  const filterWrap = $('#designFilters');
  if (!filterWrap) return;
  filterWrap.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const current = button.dataset.filter;
      filterWrap.querySelectorAll('button').forEach(btn => {
        const active = btn === button;
        btn.classList.toggle('is-active', active);
        btn.setAttribute('aria-pressed', String(active));
      });
      renderDesignGallery(current);
    });
  });
}

function openDesignLightbox(items, index) {
  const modal = $('#designLightbox');
  const img = $('#designLightboxImage');
  const title = $('#designLightboxTitle');
  const category = $('#designLightboxCategory');
  const description = $('#designLightboxDescription');
  if (!modal || !img || !title || !category || !description) return;

  const item = items[index] || items[0];
  img.src = item.image;
  img.alt = item.alt || item.title;
  title.textContent = item.title;
  category.textContent = item.category;
  description.textContent = item.description;
  modal.dataset.index = String(index);
  modal.dataset.filter = $('#designFilters .is-active')?.dataset.filter || 'All';
  modal.showModal();
}

function navigateDesignLightbox(direction) {
  const modal = $('#designLightbox');
  if (!modal) return;
  const currentFilter = $('#designFilters .is-active')?.dataset.filter || 'All';
  const items = currentFilter === 'All' ? DESIGNS : DESIGNS.filter(item => item.filter === currentFilter);
  const currentIndex = Number(modal.dataset.index || 0);
  const nextIndex = (currentIndex + direction + items.length) % items.length;
  openDesignLightbox(items, nextIndex);
}

$('#designPrev')?.addEventListener('click', () => navigateDesignLightbox(-1));
$('#designNext')?.addEventListener('click', () => navigateDesignLightbox(1));
$('#designLightboxClose')?.addEventListener('click', () => $('#designLightbox')?.close());
$('#designLightbox')?.addEventListener('click', e => { if (e.target === $('#designLightbox')) $('#designLightbox').close(); });
document.addEventListener('keydown', e => {
  if (!$('#designLightbox') || !$('#designLightbox').open) return;
  if (e.key === 'Escape') $('#designLightbox').close();
  if (e.key === 'ArrowRight') navigateDesignLightbox(1);
  if (e.key === 'ArrowLeft') navigateDesignLightbox(-1);
});
setupDesignGallery();

/* Phone */
const phone = $('#phone'), screen = $('#screen'), info = $('#uiInfo'), hint = $('#hint');
function appScreen(s) {
  const [name, sub, cl, big, note, stats, rows, btn] = s, x = el('section', 'scr'); x.dataset.name = name; x.setAttribute('aria-label', name + ' screen');
  const sb = el('div', 'sb'); sb.append(el('span', '', '9:41'), el('span', '', '5G ▮▮▮')); sb.setAttribute('aria-hidden', 'true');
  const pc = el('div', 'pc'); pc.append(el('small', '', cl), el('strong', '', big), el('span', '', note));
  const st = el('div', 'st2'); stats.forEach(([a, b]) => { const d = el('div'); d.append(el('small', '', a), el('b', '', b)); st.append(d); });
  const ul = el('ul', 'rows'); rows.forEach(([a, b, c]) => { const li = el('li'), d = el('div'); d.append(el('b', '', a), el('small', '', b)); li.append(el('span', 'ic', a[0]), d, el('em', '', c)); ul.append(li); });
  const bt = el('button', 'pbtn', btn); bt.type = 'button';
  x.append(sb, el('h4', '', name), el('p', 'ss', sub), pc, st, ul, bt); return x;
}
function showUI(i) {
  const u = UIUX[i]; screen.textContent = ''; info.textContent = ''; screen.dataset.touched = '';
  u.screens.forEach((s, k) => {
    if (u.images[k]) { const x = el('section', 'scr imgscr'); x.dataset.name = s[0]; x.append(realImg(u.images[k], u.title + ' ' + s[0] + ' screen')); screen.append(x); } else screen.append(appScreen(s));
  });
  const tb = el('nav', 'tabbar'); tb.setAttribute('aria-hidden', 'true'); u.tabs.forEach((t, k) => tb.append(el('span', k ? '' : 'on', t))); screen.append(tb);
  const sw = el('div', 'switch'); sw.setAttribute('role', 'group'); sw.setAttribute('aria-label', 'Choose UI/UX project');
  UIUX.forEach((x, k) => { const b = el('button', '', 'UI/UX ' + x.n + ' · ' + x.title); b.type = 'button'; b.setAttribute('aria-pressed', k === i); b.onclick = () => showUI(k); sw.append(b); });
  const tabs = el('div', 'tabs'); tabs.setAttribute('role', 'group'); tabs.setAttribute('aria-label', 'Jump to screen');
  $$('.scr', screen).forEach((s, k) => { const b = el('button', k ? '' : 'on', s.dataset.name); b.type = 'button'; b.onclick = () => screen.scrollTo({ top: s.offsetTop, behavior: reduce ? 'auto' : 'smooth' }); tabs.append(b); });
  const cs = el('button', 'btn', 'View Case Study'); cs.type = 'button'; cs.onclick = () => openCase(i);
  const infoContent = [];
  if (u.approach) infoContent.push(el('p', '', u.approach));
  infoContent.push(el('p', 'small', 'Tools: ' + u.tools));
  info.append(sw, el('h3', '', 'UI/UX ' + u.n + ' — ' + u.title), ...infoContent, tabs, cs);
  const g = $('#uiGal'); g.textContent = '';
  for (let k = 0; k < 3; k++) {
    if (u.gallery[k]) g.append(slot(el('figure', 'media'), u.gallery[k], u.title + ' design image ' + (k + 1)));
  }
  screen.scrollTop = 0; hint.classList.remove('gone');
  const ss = $$('.scr', screen);
  screen.onscroll = () => { let a = 0; ss.forEach((s, k) => { if (screen.scrollTop >= s.offsetTop - 80) a = k; }); $$('button', tabs).forEach((b, k) => b.classList.toggle('on', k === a)); $$('span', tb).forEach((s, k) => s.classList.toggle('on', k === a)); };
}
['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(ev => screen.addEventListener(ev, () => hint.classList.add('gone'), { passive: true }));

/* Case study dialog */
const dlg = $('#case');
function openCase(i) {
  const u = UIUX[i], b = $('#caseBody'); b.textContent = ''; const t = el('h2', '', 'UI/UX ' + u.n + ' — ' + u.title); t.id = 'caseTitle';
  b.append(t);
  ['Project Cover', 'Overview', 'Problem', 'Design Direction', 'Wireframes / Screens', 'Final UI', 'Interactive Mobile Preview', 'Key Learnings'].forEach(h => {
    const s = el('div', 'case-sec'); s.append(el('h4', '', h));
    if (h === 'Interactive Mobile Preview') { const a = el('a', '', 'Open the phone preview'); a.href = '#uiux'; a.onclick = () => dlg.close(); s.append(a); }
    else if (u.case) s.append(el('p', '', u.case));
    b.append(s);
  }); dlg.showModal();
}
$('#caseClose').onclick = () => dlg.close(); dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); });

/* Nav */
const nav = $('#nav'), burger = $('#burger'), menu = $('#menu');
function setMenu(o) { menu.classList.toggle('open', o); burger.setAttribute('aria-expanded', o); burger.setAttribute('aria-label', o ? 'Close menu' : 'Open menu'); document.body.style.overflow = o ? 'hidden' : ''; }
burger.onclick = () => setMenu(!menu.classList.contains('open'));
menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) { setMenu(false); burger.focus(); } });
matchMedia('(min-width:1000px)').addEventListener('change', () => setMenu(false));

/* Observers */
const once = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); once.unobserve(e.target); } }), { threshold: .12 });
$$('.reveal, .proj').forEach(n => once.observe(n));
const pio = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { phone.classList.add('in'); setTimeout(() => { phone.style.transition = 'opacity .9s'; }, 1000); pio.disconnect(); } }), { threshold: .2 });
pio.observe(phone);
const links = $$('nav a[href^="#"]');
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)); }), { rootMargin: '-45% 0px -50% 0px' });
links.forEach(a => { const s = $(a.getAttribute('href')); if (s) spy.observe(s); });

/* Scroll: compact nav + very subtle phone tilt */
const stage = $('.phone-stage'); let tick = false;
function onScroll() {
  nav.classList.toggle('sm', scrollY > 40);
  if (!reduce) { const vh = innerHeight, s = stage.getBoundingClientRect(), q = Math.min(1, Math.max(0, (vh - s.top) / (vh + s.height))); phone.style.setProperty('--rot', ((q - .5) * 4).toFixed(2) + 'deg'); }
  tick = false;
}
addEventListener('scroll', () => { if (!tick) { tick = true; requestAnimationFrame(onScroll); } }, { passive: true }); onScroll();

/* Contact: validate, then mailto (no backend) */
const form = $('#form');
const val = {
  name2: v => v.trim().length >= 2 || 'Enter your name (at least 2 characters).',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Enter a valid email address.',
  subject: v => v.trim().length >= 3 || 'Enter a subject (at least 3 characters).',
  msg: v => v.trim().length >= 10 || 'Write a message of at least 10 characters.',
};
function check(id) { const f = document.getElementById(id), r = val[id](f.value); document.getElementById('e-' + id).textContent = r === true ? '' : r; f.setAttribute('aria-invalid', r !== true); return r === true; }
Object.keys(val).forEach(id => document.getElementById(id).addEventListener('blur', () => check(id)));
form.addEventListener('submit', e => {
  e.preventDefault();
  if (!Object.keys(val).map(check).every(Boolean)) { $('[aria-invalid=true]', form).focus(); return; }
  const g = id => document.getElementById(id).value.trim();
  location.href = 'mailto:fathilahamed2006@gmail.com?subject=' + encodeURIComponent(g('subject') + ' — ' + g('name2')) + '&body=' + encodeURIComponent(g('msg') + '\n\n— ' + g('name2') + '\n' + g('email'));
  $('#note').textContent = 'Your email app should open now. Press send there to deliver the message.';
});
showUI(0);
