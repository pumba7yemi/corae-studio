
// tracker.js
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-track-click]').forEach(button => {
    button.addEventListener('click', () => {
      fetch('/analytics', {
        method: 'POST',
        body: JSON.stringify({ event: 'button_click', timestamp: Date.now() }),
        headers: { 'Content-Type': 'application/json' }
      });
    });
  });
});
