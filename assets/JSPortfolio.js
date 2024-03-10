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


// Get all sections in the document
const sections = document.querySelectorAll('section');

// Function to find the index of the currently visible section
function findVisibleSectionIndex() {
    for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            return i;
        }
    }
    return -1;
}

// Function to scroll to the next or previous section based on the direction
function scrollToSection(direction) {
    const currentIndex = findVisibleSectionIndex();
    let nextIndex = currentIndex + direction;
    
    // Ensure nextIndex is within the bounds of the sections array
    nextIndex = Math.max(0, Math.min(sections.length - 1, nextIndex));

    // Scroll to the next or previous section
    sections[nextIndex].scrollIntoView({
        behavior: 'smooth'
    });
}

// Event listener for the 'wheel' event
window.addEventListener('wheel', function(event) {
    if (event.deltaY < 0) {
        // Scroll up
        scrollToSection(-1);
    } else {
        // Scroll down
        scrollToSection(1);
    }
});
