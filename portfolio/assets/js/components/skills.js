// skills.js
export function renderSkills() {
  const skills = document.getElementById('skills');
  skills.innerHTML = `
    <h2>Skills</h2>
    <ul class="skills-list">
      <li>JavaScript (ES6+)</li>
      <li>HTML5 & CSS3</li>
      <li>React.js</li>
      <li>Node.js</li>
      <li>Responsive Design</li>
      <li>Git & GitHub</li>
      <li>API Integration</li>
    </ul>
  `;
}
