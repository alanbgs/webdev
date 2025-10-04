// contact.js
export function renderContact() {
  const contact = document.getElementById('contact');
  contact.innerHTML = `
    <h2>Contact</h2>
    <form id="contactForm">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>
      <label for="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      <button type="submit">Send</button>
    </form>
    <div id="formMessage"></div>
  `;
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMessage').textContent = 'Thank you for your message!';
    form.reset();
  });
}
