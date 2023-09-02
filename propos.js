window.addEventListener('scroll', function() {
    var stickyImage = document.querySelector('.fixed-image');
    var scrollDistance = window.innerHeight * 1; // 40% of viewport height

    if (window.pageYOffset >= scrollDistance) {
        stickyImage.classList.add('sticky');
    } else {
        stickyImage.classList.remove('sticky');
    }
});

window.addEventListener('scroll', function() {
    var stickyImage = document.querySelector('.image-two-container');
    var scrollDistance = window.innerHeight * 1; // 40% of viewport height

    if (window.pageYOffset >= scrollDistance) {
        stickyImage.classList.add('sticky');
    } else {
        stickyImage.classList.remove('sticky');
    }
});

window.addEventListener("scroll", showmatch)
function showmatch() {
  var reveals = document.querySelectorAll('.showmatch')

  for(var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight
    var revealtop = reveals[i].getBoundingClientRect().top
    var revealpoint = 100
  

  if(revealtop < windowheight - revealpoint) {
    reveals[i].classList.add('active')
  } else {
    reveals[i].classList.remove('active')
  }
}
};

const navnToggle = document.querySelector('.nav-toggle')
const linked = document.querySelector('.links')

navnToggle.addEventListener('click', function() {
  linked.classList.toggle('appear')
})

const nav = document.querySelector('.nav-toggle')
nav.addEventListener('click', function() {
  nav.classList.toggle('rotate')
})