import './style.css';
import basicHtml from './template.js';
import projects from './projects.js';

basicHtml(); // Displaying the basic html template through a function

function Project(title, description, dueDate, priority) {

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

//Creating a few random projects to complete
const home = new Project('Home', 'Renovating my Home', '2023-12-31', 'Low');
const school = new Project('School', 'Finishing my degree', '2023-12-31', 'Low');
const groceries = new Project('Groceries', 'Buy my groceries', '2023-01-01', 'High');
const car = new Project('New Car', 'Buy a new car', '2023-12-31', 'Medium');

let projectList = [home, school, groceries, car]; //Objects are stored in this array, so we can update our display at any time when calling specific functions

//Displaying our objects on screen
projects(projectList);