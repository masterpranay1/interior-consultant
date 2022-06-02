const hamburger = document.querySelector('#hamburger')
const closeIcon = document.querySelector('#close-icon')
const nav = document.querySelector('nav')

hamburger.addEventListener('click', () => {
  nav.id = 'mobile-nav'
})

closeIcon.addEventListener('click', () => {
  nav.id = ''
})