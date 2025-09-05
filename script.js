// Smooth scrolling for internal links
const internalLinks = document.querySelectorAll('a[href^="#"]');
internalLinks.forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Progress bar update on scroll
const progressBar = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / docHeight) * 100;
  progressBar.style.width = scrolled + '%';
});

// FAQ accordion
const questions = document.querySelectorAll('.faq-question');
questions.forEach(q => {
  q.addEventListener('click', () => {
    q.classList.toggle('open');
    const answer = q.nextElementSibling;
    if (q.classList.contains('open')) {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    } else {
      answer.style.maxHeight = null;
    }
  });
});
