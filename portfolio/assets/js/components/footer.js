// footer.js
export function renderFooter() {
  const footer = document.getElementById('footer');
  const year = new Date().getFullYear();
  footer.innerHTML = `&copy; ${year} Your Name. All rights reserved.`;
}
