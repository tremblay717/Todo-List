import './style.css';
import UserIcon from './utilisateur.png';
import projects from './projects.js';

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
leftBar.id = 'leftBar';
leftBar.className = 'leftBar';
mainSection.appendChild(leftBar);

function Project(title, description, dueDate, priority) {

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

const home = new Project('Home', 'Renovating my Home', '2023-12-31', 'Low');

const school = new Project('School', 'Finishing my degree', '2023-12-31', 'Low');

const groceries = new Project('Groceries', 'Buy my groceries', '2023-01-01', 'High');

const car = new Project('New Car', 'Buy a new car', '2023-12-31', 'Medium');

let projectList = [home, school, groceries, car];

projects(projectList);

