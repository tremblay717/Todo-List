import './style.css';
import basicHtml from './template.js';
import projects from './projects.js';

basicHtml(); //Displaying the basic html template through a function call

// Basis Constructor for project
function Project(title, description, dueDate, priority) {

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
}

//Creating a few random projects to display it on our screen
const home = new Project('Home', 'Renovating my Home', '2023-12-31', 'Low');
const school = new Project('School', 'Finishing my degree', '2023-12-31', 'Low');
const groceries = new Project('Groceries', 'Buy my groceries', '2023-01-01', 'High');
const car = new Project('New Car', 'Buy a new car', '2023-12-31', 'Medium');
const running = new Project('Half-marathon', 'Running a half-marathon', '2023-09-30', 'High');
const everest = new Project('Climbing Everest', 'Climbing Mount Everest', '2025-06-30', 'Medium');
const job = new Project('New Job', 'Change for a better job', '2022-12-31', 'Low');
const coding = new Project('Coding', 'Learn to code', '2023-10-31', 'Medium');

//Objects are stored in this array, so we can update our display at any time when calling specific functions.
let projectList = [home, school, groceries, car, running, everest, job, coding];

projects(projectList); //Displaying our objects on screen

function editProject() {

    const projectBoxes = document.getElementsByClassName('projectBox');

    for (let i = 0; i < projectBoxes.length; i++) {

        projectBoxes[i].id = projectList[i].title; // The ID is the object's title
        const boxID = projectBoxes[i].id

        projectBoxes[i].onclick = function () {

            if (document.getElementById('editingForm') != null) {
                return;
            } else {

                const editing = document.getElementById(boxID);

                const editingForm = document.createElement('div'); // Container that contains a form
                editingForm.id = 'editingForm';

                editingForm.textContent = projectList[i].title;

                document.getElementById('mainSection').appendChild(editingForm)

                // Div to hold our button - Push or cancel changes
                const buttonDiv = document.createElement('div');
                buttonDiv.className = 'buttonDiv';
                editingForm.appendChild(buttonDiv);

                const editButton = document.createElement('button');
                editButton.className = 'editButton';

                editButton.textContent = 'Confirm Change(s)';
                buttonDiv.appendChild(editButton);

                const cancelButton = document.createElement('button');
                cancelButton.className = 'cancelButton';
                cancelButton.id = 'cancelButton';
                cancelButton.textContent = 'Cancel Change(s)';
                buttonDiv.appendChild(cancelButton);

                cancelButton.onclick = function(){ // Function to cancel changes
                    editingForm.remove();
                }
            }
     
     
     
     
     
     
     
     
     
     
     
     
     
        }
    }
}


editProject();
