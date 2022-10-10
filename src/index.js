import './style.css';
import basicHtml from './template.js';
import projects from './projects.js';
import editProject from './editProject.js';
import newProject from './newProject.js';
import resetProjects from './resetProjects.js'

basicHtml(); //Displaying the basic html template through a function call

// Basis Constructor for project
function Project(title, description, dueDate, priority, status) {

    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status

}

//Creating a few random projects to display it on our screen
const home = new Project('Home', 'Renovating my Home', '2023-12-31', 'Low', 'Not Started');
const school = new Project('School', 'Finishing my degree', '2023-12-31', 'Low', 'Not Started');
const groceries = new Project('Groceries', 'Buy my groceries', '2023-01-01', 'High', 'Not Started');
const car = new Project('New Car', 'Buy a new car', '2023-12-31', 'Medium', 'Not Started');
const running = new Project('Half-marathon', 'Running a half-marathon', '2023-09-30', 'High', 'Not Started');
const everest = new Project('Climbing Everest', 'Climbing Mount Everest', '2025-06-30', 'Medium', 'Not Started');
const job = new Project('New Job', 'Change for a better job', '2022-12-31', 'Low', 'Not Started');
const coding = new Project('Coding', 'Learn to code', '2023-10-31', 'Medium', 'Not Started');

//Objects are stored in this array, r we can update our display at any time when calling specific functions.
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


projects(); //Displaying our objects on screen

// function newProject(list) {
//     const test = list
//     const addProject = document.getElementById('newProject');

//     addProject.onclick = function (data) {

//         if (document.getElementById('newProjectDiv') != null || document.getElementById('editingDiv') != null) {
//             return;
//         } else {

//             if (document.getElementById('editingDiv') != null) {
//                 document.getElementById('editingDiv').remove();
//             }

//             const newProjectDiv = document.createElement('div'); // Container that contains a form
//             newProjectDiv.id = 'newProjectDiv';
//             // editingDiv.textContent = projectList[i].title;
//             document.getElementById('mainSection').appendChild(newProjectDiv)

//             const newForm = document.createElement('form');
//             newForm.id = 'newForm'
//             newProjectDiv.appendChild(newForm)

//             const projectTitle = document.createElement('span');
//             projectTitle.textContent = "Add a new Project"
//             newForm.appendChild(projectTitle);

//             const formUL = document.createElement('ul');
//             newForm.appendChild(formUL);

//             const titleLi = document.createElement('li');

//             const titleLabel = document.createElement('label');
//             titleLabel.textContent = " Project Title:";

//             const titleInput = document.createElement('input');
//             titleInput.placeholder = 'Computer'

//             titleLi.appendChild(titleLabel);
//             titleLi.appendChild(titleInput);
//             formUL.appendChild(titleLi);

//             const descriptionLi = document.createElement('li');

//             const descriptionLabel = document.createElement('label');
//             descriptionLabel.textContent = "Project Description:";

//             const descriptionInput = document.createElement('input');
//             descriptionInput.placeholder = "Buy a new computer";

//             descriptionLi.appendChild(descriptionLabel);
//             descriptionLi.appendChild(descriptionInput);
//             formUL.appendChild(descriptionLi);

//             const dateLi = document.createElement('li');

//             const dateLabel = document.createElement('label');
//             dateLabel.textContent = "Project Due Date:";

//             const dateInput = document.createElement('input');
//             dateInput.style.width = '125px';
//             dateInput.type = 'date'

//             dateLi.appendChild(dateLabel);
//             dateLi.appendChild(dateInput);
//             formUL.appendChild(dateLi);

//             const priorityLi = document.createElement('li');

//             const priorityLabel = document.createElement('label');
//             priorityLabel.textContent = "Project Priority:";

//             const prioritySelect = document.createElement('select');
//             prioritySelect.id = 'prioritySelect';
//             prioritySelect.style.width = '130px';

//             const optionLow = document.createElement('option');
//             optionLow.value = "Low";
//             optionLow.textContent = 'Low'
//             prioritySelect.appendChild(optionLow)

//             const optionMedium = document.createElement('option');
//             optionMedium.value = "Medium";
//             optionMedium.textContent = "Medium";
//             prioritySelect.appendChild(optionMedium);

//             const optionHigh = document.createElement('option');
//             optionHigh.value = "High";
//             optionHigh.textContent = "High";
//             prioritySelect.appendChild(optionHigh);

//             priorityLi.appendChild(priorityLabel);
//             priorityLi.appendChild(prioritySelect);
//             formUL.appendChild(priorityLi);

//             const statusLi = document.createElement('li');

//             const statusLabel = document.createElement('label');
//             statusLabel.textContent = "Project Status:";

//             const statusSelect = document.createElement('select');
//             statusSelect.id = 'statusSelect';
//             statusSelect.style.width = '130px';

//             const statusDefault = document.createElement('option');
//             statusDefault.value = "";
//             statusDefault.textContent = "";
//             statusSelect.appendChild(statusDefault)


//             const statusNot = document.createElement('option');
//             statusNot.value = "Not Started";
//             statusNot.textContent = 'Not Started'
//             statusSelect.appendChild(statusNot)


//             const statusProgress = document.createElement('option');
//             statusProgress.value = "In Progress";
//             statusProgress.textContent = "In Progress";
//             statusSelect.appendChild(statusProgress);


//             const statusDone = document.createElement('option');
//             statusDone.value = "Done";
//             statusDone.textContent = "Done";
//             statusSelect.appendChild(statusDone);

//             statusLi.appendChild(statusLabel);
//             statusLi.appendChild(statusSelect);
//             formUL.appendChild(statusLi);

//             // Div to hold our button - Push or Cancel changes
//             const buttonDiv = document.createElement('div');
//             buttonDiv.className = 'buttonDiv';
//             newForm.appendChild(buttonDiv);

//             const confirmButton = document.createElement('div');
//             confirmButton.className = 'editButton';

//             confirmButton.textContent = 'Confirm Project';
//             buttonDiv.appendChild(confirmButton);



//             confirmButton.onclick = function (blabla) {
//                 console.log(data)
//                 console.log(typeof(data))
//                 if (titleInput.value == "" && descriptionInput.value == "" && dateInput.value == "" && prioritySelect.value == "" && statusSelect.value == "") {
//                     return;
//                 } else {
//                     const newObject = new Project(titleInput.value, descriptionInput.value, dateInput.value, prioritySelect.value, statusSelect.value);

//                     window.localStorage.setItem(newObject.title, JSON.stringify(newObject));

//                     data.push(newObject);
//                     console.log(data);
//                     newProjectDiv.remove(); // Deleting form
//                     document.getElementById('leftBar').removeChild(resetDiv); //Removing the reset div 
//                     document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
//                     document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

//                     projects(data); // Calling the projects function - updated elements on screen
//                     document.getElementById('leftBar').appendChild(resetDiv); // appending the reset div
//                     newProject(data);
//                     editProject(data); // Calling editProject function - so we may reuse it for further editing.
//                     resetProjects();
//                 }
//             }

//             const cancelButton = document.createElement('div');
//             cancelButton.className = 'cancelButton';
//             cancelButton.id = 'cancelButton';
//             cancelButton.textContent = 'Cancel';
//             buttonDiv.appendChild(cancelButton);

//             cancelButton.onclick = function () { // Function to cancel changes
//                 newProjectDiv.remove(); // Deleting form
//                 newProject();
//                 editProject(); // Calling editProject function - so we may reuse it for further editing.
//                 resetProjects();
//             }
//         }
//     }
// }

// const resetDiv = document.createElement('div');
// resetDiv.id = 'resetDiv';
// document.getElementById('leftBar').appendChild(resetDiv);

// const resetProject = document.createElement('span');
// resetProject.id = 'resetProjects';
// resetProject.textContent = 'Default Projects';
// resetDiv.appendChild(resetProject);

// function resetProjects() {

//     const reset = document.getElementById('resetProjects');

//     reset.onclick = function () {

//         window.localStorage.clear();

//         let testList = [];

//         for (let i = 0; i < projectList.length; i++) {

//             const myProject = projectList[i];

//             window.localStorage.setItem(projectList[i].title, JSON.stringify(myProject));

//         }

//         let items = {
//             ...localStorage
//         };

//         for (let i = 0; i < localStorage.length; i++) {

//             const item = JSON.parse(items[Object.keys(items)[i]]);
//             testList.push(item);
//         }

//         document.getElementById('leftBar').removeChild(resetDiv); //Removing the reset div 
//         document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
//         document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

//         projects(testList); // Calling the projects function - updated elements on screen
//         document.getElementById('leftBar').appendChild(resetDiv); // appending the reset div
//         // editProject(); // Calling editProject function - so we may reuse it for further editing.
//         newProject(testList);
//         resetProjects(testList);
//         editProject(testList)
//         // document.location.reload()


//     }
// }


newProject(testList);
editProject();
resetProjects();