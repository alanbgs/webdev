// projects.js
export function renderProjects() {
  const projects = document.getElementById('projects');
  projects.innerHTML = `
    <h2>Projects</h2>
    <div class="project-list">
      <div class="project-item">
        <h3>Project One</h3>
        <p>A modern web app built with JavaScript, HTML, and CSS. Features dynamic content and responsive design.</p>
      </div>
      <div class="project-item">
        <h3>Project Two</h3>
        <p>Portfolio website template with interactive sections and modular JS components.</p>
      </div>
      <!-- Add more projects as needed -->
    </div>
  `;
}
