const sidebarMenuButton = document.querySelector('.gnb-icon-button')
const sidebarMenu = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')
const sidebarList = document.querySelector('.sidebar-nav-list')
const sidebarHamburgerMenu = document.querySelector('#hamburger-btn')

function toggleSidebarMenuBtn() {
  sidebarMenu.classList.toggle('is-active')
  sidebarOverlay.classList.toggle('is-active')
  sidebarMenuButton.classList.toggle('toggle')
  sidebarHamburgerMenu.classList.toggle('toggle')
}

function handleChangeBtn() {
  toggleSidebarMenuBtn()
}

sidebarMenuButton.addEventListener('click', toggleSidebarMenuBtn)
sidebarHamburgerMenu.addEventListener('click', handleChangeBtn)

function closeSidebarMenu() {
  sidebarMenu.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
  sidebarMenuButton.classList.toggle('toggle')
  sidebarHamburgerMenu.classList.toggle('toggle')
}

sidebarOverlay.addEventListener('click', closeSidebarMenu)
sidebarList.addEventListener('click', closeSidebarMenu)
