// navbar.js
export function renderNavbar() {
  const navbar = document.getElementById('navbar');
  navbar.innerHTML = `
    <a href="#about">About</a>
    <a href="#projects">Projects</a>
    <a href="#skills">Skills</a>
    <a href="#contact">Contact</a>
  `;
}
