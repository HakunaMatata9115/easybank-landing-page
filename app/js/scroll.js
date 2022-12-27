const topButton = document.querySelector('.footer-top-btn')
const home = document.querySelector('body > header > nav > ul > li:nth-child(1)')
const sidebarHome = document.querySelector('body > aside > nav > ul > li:nth-child(1)')

function handleScrollTop(e) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

topButton.addEventListener('click', handleScrollTop)
home.addEventListener('click', handleScrollTop)
sidebarHome.addEventListener('click', handleScrollTop)