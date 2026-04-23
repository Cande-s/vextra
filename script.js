/* =====================================================
   DIANISMA – script.js
   Navbar scroll effect | Mobile menu | Reveal | Form
   ===================================================== */

// --- NAVBAR SCROLL ---
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}, { passive: true });

// --- HAMBURGER MENU ---
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
});

// Close mobile menu on link click
document.querySelectorAll('.mobile-link, .mobile-cta-wrap a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.classList.remove('open');
  });
});

// --- SCROLL REVEAL (Intersection Observer) ---
const revealEls = document.querySelectorAll(
  '.stat-card, .service-card, .process-card, .work-card, .about-text, .about-stats, .contact-info, .contact-form, .cta-text, .cta-banner .btn-primary'
);

revealEls.forEach((el, i) => {
  el.classList.add('reveal');
  if (i % 3 === 1) el.classList.add('reveal-delay-1');
  if (i % 3 === 2) el.classList.add('reveal-delay-2');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => observer.observe(el));

// --- CONTACT FORM ---
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById('submit-btn');
  const btnText = document.getElementById('btn-text');
  const success = document.getElementById('formSuccess');

  const name = form.name.value.trim();
  const projectName = form.projectName.value.trim();
  const project = form.project.value.trim();

  // Validación de campos vacíos
  if (!name || !projectName || !project) {
    alert('Es importante que se llenen todas así podemos ayudarlo y ofrecer ideas desde el comienzo.');
    return;
  }

  btn.disabled = true;
  btnText.textContent = 'Enviando…';

  // Build mailto link
  const subject = encodeURIComponent(`${projectName}`);
  const body = encodeURIComponent(
    `Nombre del contacto: ${name}\n\nDetalles del proyecto en mente:\n${project}`
  );

  window.location.href = `mailto:vextrasystems@gmail.com?subject=${subject}&body=${body}`;

  setTimeout(() => {
    success.classList.add('visible');
    form.reset();
    btn.disabled = false;
    btnText.textContent = 'Enviar mensaje';
  }, 800);
}

// --- SMOOTH ACTIVE NAV HIGHLIGHT ---
const sections = document.querySelectorAll('section[id]');
const navLinksList = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinksList.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === '#' + entry.target.id) {
          link.style.color = 'var(--gold)';
        }
      });
    }
  });
}, {
  threshold: 0.4
});
sections.forEach(s => sectionObserver.observe(s));

// --- DYNAMIC GOLD GLOW ON HOVER (cards) ---
document.querySelectorAll('.work-card, .service-card, .stat-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--mouse-x', `${x}%`);
    card.style.setProperty('--mouse-y', `${y}%`);
  });
});
