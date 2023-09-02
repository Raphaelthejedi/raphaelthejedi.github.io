const nav = document.querySelector('.nav-toggle')

nav.addEventListener('click', function() {
    nav.classList.toggle('rotate')
})

const navnToggle = document.querySelector('.nav-toggle')
const linked = document.querySelector('.links')

navnToggle.addEventListener('click', function() {
  linked.classList.toggle('appear')
})