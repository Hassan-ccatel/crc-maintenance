document.addEventListener('DOMContentLoaded', () => {
  const details = document.querySelectorAll('.faq-list details');

  details.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;

      details.forEach((other) => {
        if (other !== item) {
          other.removeAttribute('open');
        }
      });
    });
  });

  const form = document.querySelector('.quote-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      if (button) {
        const original = button.textContent;
        button.textContent = 'Request Sent';
        button.disabled = true;
        setTimeout(() => {
          button.textContent = original;
          button.disabled = false;
          form.reset();
        }, 1800);
      }
    });
  }
});
