function smoothScroll(event) {
  event.preventDefault(); // Prevent default anchor click behavior
  const targetId = event.currentTarget.getAttribute("href"); // Get the target section's id
  const targetSection = document.querySelector(targetId); // Get the target section element

  // Scroll to the target section smoothly
  targetSection.scrollIntoView({
      behavior: "smooth"
  });
}

function scrollToAbout() {
  document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function scrollToHome() {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
}

function scrollToContact() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}