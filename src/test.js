import './style.css'
import Bbq from './bbq.jpg'
import homeSection from './home.js'
import menuSection from './menu.js'
import aboutSection from './about.js'

// Setting up the html

// This is the header bar *****************************************************************************************************************************************************************

const headerBar = document.createElement('div')
headerBar.id = 'headerBar'

const leftHeader = document.createElement('div')
leftHeader.setAttribute('style', 'width:50%')

const restaurantTitle = document.createElement('span')
restaurantTitle.className = 'RestaurantTitle'
restaurantTitle.textContent = "Al's SteakHouse"
leftHeader.appendChild(restaurantTitle)

const rightHeader = document.createElement('div')
rightHeader.setAttribute('style', 'display:flexjustify-content:centerwidth:50%')

const headerUL = document.createElement('ul')
headerUL.setAttribute('style', 'display:flex flex-direction:rowcolor:whitegap:5%')

const home = document.createElement('li')
home.className = 'headerLi'
home.id = 'headerLiHome'
home.textContent = 'Home'

const menu = document.createElement('li')
menu.className = 'headerLi'
menu.id = 'headerLiMenu'
menu.textContent = 'Menu'

const about = document.createElement('li')
about.className = 'headerLi'
about.textContent = 'About'
about.id = 'headerLiAbout'

const menuList = [home, menu, about]

for (let i = 0; i < menuList.length; i++) {
  headerUL.appendChild(menuList[i])
}
rightHeader.appendChild(headerUL)

// Background Image for the landing page
const bbq = new Image()
bbq.src = Bbq

headerBar.appendChild(leftHeader)
headerBar.appendChild(rightHeader)
document.body.appendChild(headerBar)

/***************************************************************************************************************************************************************************************/
// Main section

const mainSection = document.createElement('div')
mainSection.id = 'mainSection'
document.body.appendChild(mainSection)

// By default, we populate the main section with the home page
mainSection.appendChild(homeSection())

home.onclick = function () {
  const li = document.querySelectorAll('li')
  const children = mainSection.children
  if (document.getElementById('homeDiv') === null) {
    for (let i = 0; i < li.length; i++) {
      li[i].style.color = 'white'
    }
    for (let i = 0; i < children.length; i++) {
      children[i].remove()
    }
    mainSection.appendChild(homeSection())
  } else return
}

menu.onclick = function () {
  const li = document.querySelectorAll('li')
  const children = mainSection.children
  if (document.getElementById('menuDiv') === null) {
    for (let i = 0; i < li.length; i++) {
      li[i].style.color = 'white'
    }

    for (let i = 0; i < children.length; i++) {
      children[i].remove()
    }
    mainSection.appendChild(menuSection())
  } else return
}

about.onclick = function () {
  const li = document.querySelectorAll('li')
  const children = mainSection.children
  if (document.getElementById('aboutDiv') === null) {
    for (let i = 0; i < li.length; i++) {
      li[i].style.color = 'white'
    }

    for (let i = 0; i < children.length; i++) {
      children[i].remove()
    }
    mainSection.appendChild(aboutSection())
  }
}
