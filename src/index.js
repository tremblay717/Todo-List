import './style.css';
// import projects from './projects.js';

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

// 2nd part is a div taking 75% of the page's width
const todoSection = document.createElement('div');
todoSection.id = 'todoSection';
todoSection.style.backgroundColor = '#FFEC89';
todoSection.style.width = '100%';
todoSection.style.minHeight = '100vh'
mainSection.appendChild(todoSection);

//Span tag for my project list
const myProjects = document.createElement('span');
myProjects.className = 'myProjects';
myProjects.textContent = 'My Projects';
projectDiv.appendChild(myProjects);



function CreateProject(title, description, dueDate, priority) {

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;

    const projectTitle = document.createElement('span');
    projectTitle.className = 'projectTitle'
    projectTitle.textContent = this.title;

    projectDiv.appendChild(projectTitle);

}


const home = new CreateProject('Home', 'Renovating my Home', '2023-12-31', 'Low');

const school = new CreateProject('School', 'Finishing my degree', '2023-12-31', 'Low');

const groceries = new CreateProject('Groceries','Buy my groceries','2023-01-01','High');

const car = new CreateProject('New Car','Buy a new car','2023-12-31','Medium');