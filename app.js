const INFO = {
  rotary: ['Rotary evaporator guide', 'A short guide to setting up and running a rotary evaporator safely in a chemical lab. Demo link: no file is attached.'],
  keyboard: ['Brand new keyboard', 'A slim keyboard with quiet keys and a long battery life. Demo text for the layout.'],
  games: ['Games, our passion', 'Controllers and accessories for people who love to play. Demo text for the layout.'],
  imac: ['Retina display', 'A closer look at the patent story and what it could mean for the screen in your pocket. Demo link: no file is attached.'],
  cloud: ['iCloud', 'Keep documents, notes and contacts in sync across your devices. Demo text for the layout.']
};
const dlg = document.getElementById('more');
document.querySelectorAll('[data-more]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const [t, b] = INFO[a.dataset.more];
    document.getElementById('more-title').textContent = t;
    document.getElementById('more-body').textContent = b;
    dlg.showModal();
  });
});
document.getElementById('more-close').addEventListener('click', () => dlg.close());
dlg.addEventListener('click', (e) => { if (e.target === dlg) dlg.close(); });

const btn = document.getElementById('theme');
function applyTheme(dark) {
  document.documentElement.classList.toggle('dark', dark);
  btn.setAttribute('aria-pressed', String(dark));
  btn.textContent = dark ? 'Light' : 'Dark';
  try { localStorage.setItem('cg-theme', dark ? 'dark' : 'light'); } catch (e) {}
}
let saved = null;
try { saved = localStorage.getItem('cg-theme'); } catch (e) {}
applyTheme(saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
btn.addEventListener('click', () => applyTheme(!document.documentElement.classList.contains('dark')));
