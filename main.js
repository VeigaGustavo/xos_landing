// Calendário de frequência de exemplo (outubro começa numa quinta → 3 vazios)
(function buildCalendar() {
  const cal = document.getElementById('cal');
  if (!cal) return;

  const offset = 3;
  const days = 31;
  const today = 22;
  const studied = new Set([1, 2, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22]);
  const rest = new Set([6, 10]);

  for (let i = 0; i < offset; i++) cal.appendChild(document.createElement('i'));
  for (let d = 1; d <= days; d++) {
    const el = document.createElement('span');
    el.textContent = d;
    if (d > today) el.className = 'future';
    else if (studied.has(d)) el.className = 'on';
    else if (rest.has(d)) el.className = 'rest';
    if (d === today) el.classList.add('today');
    cal.appendChild(el);
  }
})();

// Animações ao rolar
(function reveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  items.forEach((el) => io.observe(el));
})();

// Frases da essência acendem em sequência
(function essence() {
  const list = document.querySelector('.essence');
  if (!list) return;
  const lines = list.querySelectorAll('li');
  const io = new IntersectionObserver(
    ([e]) => {
      if (!e.isIntersecting) return;
      lines.forEach((li, i) => setTimeout(() => li.classList.add('lit'), i * 260));
      io.disconnect();
    },
    { threshold: 0.4 }
  );
  io.observe(list);
})();
