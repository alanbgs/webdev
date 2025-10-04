// about.js
export function renderAbout() {
  const about = document.getElementById('about');
  about.innerHTML = `
    <h2>About Me</h2>
    <p>Hello! I'm a passionate web developer with experience in building modern, responsive websites and web applications. I love working with JavaScript and creating interactive user experiences.</p>
    <ul>
      <li><strong>Name:</strong> Your Name</li>
      <li><strong>Location:</strong> Your City, Country</li>
      <li><strong>Email:</strong> your.email@example.com</li>
    </ul>
  `;
}
