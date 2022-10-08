import './style.css';
import UserIcon from './utilisateur.png';
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

//Right Part - Header
const rightHeaderDiv = document.createElement('div');
rightHeaderDiv.className = 'righHeaderDiv';
header.appendChild(rightHeaderDiv);

const userIcon = new Image();
userIcon.id = 'userIcon';
userIcon.src = UserIcon;
rightHeaderDiv.appendChild(userIcon)

const userName = document.createElement('span');
userName.className = 'userName';
userName.textContent = '@guestUser';
rightHeaderDiv.appendChild(userName);

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


    const box = document.createElement('box');
    box.className = 'projectBox';
    box.id = this.title;


    const boxTitle = document.createElement('span');
    boxTitle.textContent = "Title: " + this.title;

    const boxDescription = document.createElement('span');
    boxDescription.textContent = "Description: " + this.description;


    const boxDate = document.createElement('span');
    boxDate.textContent = "Due date: " + this.dueDate;

    const boxPriority = document.createElement('span');
    boxPriority.textContent = "Priority: " + this.priority;

    const boxContent = [boxTitle, boxDescription, boxDate, boxPriority];

    for (let i = 0; i < boxContent.length; i++) {
        box.appendChild(boxContent[i]);
    }


    todoSection.appendChild(box)






}


const home = new CreateProject('Home', 'Renovating my Home', '2023-12-31', 'Low');

const school = new CreateProject('School', 'Finishing my degree', '2023-12-31', 'Low');

const groceries = new CreateProject('Groceries', 'Buy my groceries', '2023-01-01', 'High');

const car = new CreateProject('New Car', 'Buy a new car', '2023-12-31', 'Medium');



// Main Section