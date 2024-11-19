// Select the navbar element
const navbar = document.getElementById('navbar');

// Function to toggle navbar class based on scroll position
function toggleNavbarClass() {
  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
    navbar.classList.remove('navbar-default');
  } else {
    navbar.classList.remove('navbar-scroll');
    navbar.classList.add('navbar-default');
  }
}

// // Listen to scroll events
// window.addEventListener('scroll', toggleNavbarClass);


// const hamBtn = document.getElementById('hamburger-menu');
// const box2 = document.getElementById('box2');
// const navbarcolor = document.getElementById('navbar');

// // Add event listener to hamBtn
// hamBtn.addEventListener('click', function () {
//   // Toggle the 'highlight' class on box2
//   box2.classList.toggle('highlight');
//   hamBtn.classList.toggle('active');
//   navbarcolor.classList.toggle('active');
// });
window.addEventListener('scroll', toggleNavbarClass);

const hamBtn = document.getElementById('hamburger-menu');
const box2 = document.getElementById('box2');
const navbarcolor = document.getElementById('navbar');
let hoverEnabled = true;

// Add event listeners for hover to open
hamBtn.addEventListener('mouseover', function () {
  if (hoverEnabled) {
    box2.classList.add('highlight');
    hamBtn.classList.add('active');
    navbarcolor.classList.add('active');
  }
});

// Add event listener for click to close
hamBtn.addEventListener('click', function () {
  // Toggle the classes
  box2.classList.toggle('highlight');
  hamBtn.classList.toggle('active');
  navbarcolor.classList.toggle('active');

  // Disable hover temporarily
  hoverEnabled = false;

  // Set a timeout to re-enable hover after a short delay
  setTimeout(function () {
    hoverEnabled = true;
  }, 1500); // Adjust the time (1s) as needed
});


const hoverImage = document.getElementById('hoverImage');
const anchorTags = document.querySelectorAll('.hover-item');

// Set the default image (logo) on page load
hoverImage.src = './assets/images/logo.webp';
hoverImage.style.display = 'block';
hoverImage.style.opacity = 1;

anchorTags.forEach(anchor => {
  anchor.addEventListener('mouseenter', function () {
    const imgSrc = anchor.getAttribute('data-img');
    hoverImage.src = imgSrc;
    hoverImage.style.display = 'block';
    hoverImage.style.opacity = 1;
  });

  anchor.addEventListener('mousemove', function (event) {
    hoverImage.style.top = `${event.clientY + 20}px`;
    hoverImage.style.left = `${event.clientX + 20}px`;
  });

  anchor.addEventListener('mouseleave', function () {
    hoverImage.src = './assets/images/logo.webp';
    hoverImage.style.opacity = 1;  // Keep the image visible with the logo
  });
});





const menuButton = document.getElementById('secon-btn-id');
const menu = document.getElementById('ul-id');

menuButton.addEventListener('click', function (event) {
  menu.classList.toggle('active');
  menuButton.classList.toggle('active');
});

const menuButton2 = document.getElementById('secon-btn-id2');
const menu2 = document.getElementById('ul-id2');
const menuButton3 = document.getElementById('secon-btn-id3');
const menu3 = document.getElementById('ul-id3');

menuButton2.addEventListener('mouseenter', function () {
  menu2.classList.add('active');
  menuButton2.classList.add('active');

});

menuButton2.addEventListener('mouseleave', function () {
  menu2.classList.remove('active');
  menuButton2.classList.remove('active');

});

menuButton3.addEventListener('mouseenter', function () {
  menu3.classList.add('active');
  menuButton3.classList.add('active');

});

menuButton3.addEventListener('mouseleave', function () {
  menu3.classList.remove('active');
  menuButton3.classList.remove('active');

});
/***************************
progressbar

***************************/
gsap.to('.mil-progress', {
  height: '100%',
  ease: 'sine',
  scrollTrigger: {
    scrub: 0.3
  }
});

