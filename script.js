// JavaScript - script.js

document.getElementById('contactForm').addEventListener('submit', function(e){

  e.preventDefault(); // Prevent page reload

  const email = document.getElementById('email').value;

  const message = document.getElementById('message').value;

  // For demo, we'll just show a confirmation

  document.getElementById('confirmation').innerText = `Thank you, ${email}! Your message has been sent.`;

  // Clear form

  document.getElementById('contactForm').reset();

});