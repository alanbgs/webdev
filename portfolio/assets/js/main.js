// main.js - Portfolio Website
import { renderNavbar } from './components/navbar.js';
import { renderAbout } from './components/about.js';
import { renderProjects } from './components/projects.js';
import { renderSkills } from './components/skills.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderAbout();
  renderProjects();
  renderSkills();
  renderContact();
  renderFooter();
});
