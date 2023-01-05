# Frontend Mentor - Easybank landing page solution

[Go to the project wiki :kr:](https://github.com/Hyeyoung-Lucia/easybank-landing-page.wiki.git)

<p align="center">
  <img src="./assets/screenshots/screenshot.gif">
</p>

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

✅ View the optimal layout for the site depending on their device's screen size

✅ See hover states for all interactive elements on the page

✅ The JavaScript required is for the mobile navigation toggle

✅ scroll → navbar menu home & bottom arrow button click → move to top

✅ navbar sticky

### Mobile screenshot

<p align="center">
  <img src="./assets/screenshots/mobile.gif">
</p>

### Links

- Solution URL: [solution URL here](https://www.frontendmentor.io/solutions/easybank-landing-page-0ARcKerJ1C)
- Live Site URL: [https://hyeyoung-lucia.github.io/easybank-landing-page/](https://hyeyoung-lucia.github.io/easybank-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

✨ main features below:

- Implement a sidebar menu toggle function.

```js
// sidebar.js

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
```

- Implement scroll top function when users click the bottom-arrow button or the home of navigation menu.

```js
//scroll.js

const topButton = document.querySelector('.footer-top-btn')
const home = document.querySelector(
  'body > header > nav > ul > li:nth-child(1)'
)
const sidebarHome = document.querySelector(
  'body > aside > nav > ul > li:nth-child(1)'
)

function handleScrollTop(e) {
  e.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

topButton.addEventListener('click', handleScrollTop)
home.addEventListener('click', handleScrollTop)
sidebarHome.addEventListener('click', handleScrollTop)
```

### Continued development

- After deployment I got an error related SVG file to convert icon-font, I have to solve this problem.

### Useful resources

- [Sass Guidelines](https://sass-guidelin.es/)
- [Install node-sass](https://www.npmjs.com/package/node-sass) → Command Line Interface part

## Author

Hyeyoung Lee

- Frontend Mentor - [@Hyeyoung-Lucia](https://www.frontendmentor.io/profile/Hyeyoung-Lucia)
