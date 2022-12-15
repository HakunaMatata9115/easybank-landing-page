const sidebarMenuButton = document.querySelector('.gnb-icon-button')
const sidebarMenu = document.querySelector('.sidebar')
const sidebarOverlay = document.querySelector('.overlay')
const sidebarList = document.querySelector('.sidebar-nav-list')

function ToggleSidebarMenuBtn() {
  sidebarMenu.classList.toggle('is-active')
  sidebarOverlay.classList.toggle('is-active')
}

sidebarMenuButton.addEventListener('click', ToggleSidebarMenuBtn)

function closeSidebarMenu() {
  sidebarMenu.classList.remove('is-active')
  sidebarOverlay.classList.remove('is-active')
}

sidebarOverlay.addEventListener('click', closeSidebarMenu)
sidebarList.addEventListener('click', closeSidebarMenu)
