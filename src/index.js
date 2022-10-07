import './style.css';

//Top bar header
const header = document.createElement('div');
header.className = 'header';
document.body.appendChild(header);

// Page Title
const hero = document.createElement('span');
hero.className = 'hero';
hero.textContent = 'Todo List';
header.appendChild(hero);

// Splitting the rest of the page in two sections
const mainSection = document.createElement('div');
mainSection.id = 'mainSection';
document.body.appendChild(mainSection);

//1st part is a left bar
const leftBar = document.createElement('div');
leftBar.className = 'leftBar';
mainSection.appendChild(leftBar);

const projectDiv = document.createElement('div');
projectDiv.className = 'projectDiv';
leftBar.appendChild(projectDiv);

// 2nd part is as div taking 75% of the page's width
const todoSection = document.createElement('div');
todoSection.style.backgroundColor = '#FFEC89';
todoSection.style.width = '100%';
todoSection.style.minHeight = '100vh'
mainSection.appendChild(todoSection);
