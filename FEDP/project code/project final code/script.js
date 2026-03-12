// Simple example: confirm before login redirect
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.querySelector('#loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      alert('Welcome back to the House of Artworks!');
    });
  }
});
