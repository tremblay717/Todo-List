import './style.css';
import basicHtml from './template.js';
import Project  from './Project.js';
import projects from './projects.js';
import editProject from './editProject.js';
import newProject from './newProject.js';
import resetProjects from './resetProjects.js'

basicHtml(); //Displaying the basic html template through a function call

//Creating a few random projects to display it on our screen
const home = new Project('Home', 'Renovating my Home', '2023-12-31', 'Low', 'Not Started');
const school = new Project('School', 'Finishing my degree', '2023-12-31', 'Low', 'Not Started');
const groceries = new Project('Groceries', 'Buy my groceries', '2023-01-01', 'High', 'Not Started');
const car = new Project('New Car', 'Buy a new car', '2023-12-31', 'Medium', 'Not Started');
const running = new Project('Half-marathon', 'Running a half-marathon', '2023-09-30', 'High', 'Not Started');
const everest = new Project('Climbing Everest', 'Climbing Mount Everest', '2025-06-30', 'Medium', 'Not Started');
const job = new Project('New Job', 'Change for a better job', '2022-12-31', 'Low', 'Not Started');
const coding = new Project('Coding', 'Learn to code', '2023-10-31', 'Medium', 'Not Started');




//Default Objects are stored in this array, we can update our display at any time when calling specific functions.
let projectList = [home, school, groceries, car, running, everest, job, coding];

for (let i = 0; i < projectList.length; i++) {

    const myProject = projectList[i];

    if (JSON.parse(window.localStorage.getItem(myProject)) === null) { // If the user previously deleted an object or loads the page for the first time, it won't see any objects on screen, unless they click on the default projects span in the left panel
        continue;
    } else {
        window.localStorage.setItem(projectList[i].title, JSON.stringify(myProject)); // The Objects are stored in local storage
    }
}

let items = { // Retrieving the local Storage everytime the page is loaded
    ...localStorage
};

let testList = [];

for (let i = 0; i < localStorage.length; i++) {

    const item = JSON.parse(items[Object.keys(items)[i]]); // We store each object in localStorage in an array;

    testList.push(item);
}

projects();
newProject();
editProject();
resetProjects();