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

                const editingDiv = document.createElement('div'); // Container that contains a form
                editingDiv.id = 'editingDiv';
                // editingDiv.textContent = projectList[i].title;
                document.getElementById('mainSection').appendChild(editingDiv)

                const editingForm = document.createElement('form');
                editingForm.id = 'editingForm'
                editingDiv.appendChild(editingForm)

                const projectTitle = document.createElement('span');
                projectTitle.textContent = "Title: " + projectList[i].title;
                editingForm.appendChild(projectTitle);

                const formUL = document.createElement('ul');
                editingForm.appendChild(formUL);

                const titleLi = document.createElement('li');

                const titleLabel = document.createElement('label');
                titleLabel.textContent = "Edit Project Title:";

                const titleInput = document.createElement('input');
                titleInput.placeholder = projectList[i].title;

                titleLi.appendChild(titleLabel);
                titleLi.appendChild(titleInput);
                formUL.appendChild(titleLi);

                const descriptionLi = document.createElement('li');

                const descriptionLabel = document.createElement('label');
                descriptionLabel.textContent = "Edit Project Description:";

                const descriptionInput = document.createElement('input');
                descriptionInput.placeholder = projectList[i].description;

                descriptionLi.appendChild(descriptionLabel);
                descriptionLi.appendChild(descriptionInput);
                formUL.appendChild(descriptionLi);

                const dateLi = document.createElement('li');

                const dateLabel = document.createElement('label');
                dateLabel.textContent = "Edit Project Due Date:";

                const currentDate = document.createElement('label');
                currentDate.textContent = projectList[i].dueDate;
                currentDate.style.color = 'purple'

                const dateInput = document.createElement('input');
                dateInput.style.width = '125px';
                dateInput.type = 'date'

                dateLi.appendChild(dateLabel);
                dateLi.appendChild(currentDate);
                dateLi.appendChild(dateInput);
                formUL.appendChild(dateLi);

                const priorityLi = document.createElement('li');

                const priorityLabel = document.createElement('label');
                priorityLabel.textContent = "Edit Project Priority:";

                const currentPriority = document.createElement('label');
                currentPriority.textContent = projectList[i].priority;
                currentPriority.style.color = 'purple'

                const prioritySelect = document.createElement('select');
                prioritySelect.id = 'prioritySelect';
                prioritySelect.style.width = '130px';

                const optionDefault = document.createElement('option');
                optionDefault.value = "";
                optionDefault.textContent = "";
                prioritySelect.appendChild(optionDefault)


                const optionLow = document.createElement('option');
                optionLow.value = "Low";
                optionLow.textContent = 'Low'
                prioritySelect.appendChild(optionLow)


                const optionMedium = document.createElement('option');
                optionMedium.value = "Medium";
                optionMedium.textContent = "Medium";
                prioritySelect.appendChild(optionMedium);


                const optionHigh = document.createElement('option');
                optionHigh.value = "High";
                optionHigh.textContent = "High";
                prioritySelect.appendChild(optionHigh);

                priorityLi.appendChild(priorityLabel);
                priorityLi.appendChild(currentPriority);
                priorityLi.appendChild(prioritySelect);
                formUL.appendChild(priorityLi);

                // Div to hold our button - Push or Cancel changes
                const buttonDiv = document.createElement('div');
                buttonDiv.className = 'buttonDiv';
                editingForm.appendChild(buttonDiv);

                const editButton = document.createElement('div');
                editButton.className = 'editButton';

                editButton.textContent = 'Confirm Change(s)';
                buttonDiv.appendChild(editButton);

                editButton.onclick = function () {
                    console.log(titleInput.value, descriptionInput.value, dateInput.value, prioritySelect.value);

                    if (titleInput.value == "" && descriptionInput.value == "" && dateInput.value == "" && prioritySelect.value == "") {
                        return;
                    } else {

                        if (titleInput.value != "") {
                            projectList[i].title = titleInput.value;
                        }

                        if (descriptionInput.value != "") {
                            projectList[i].description = descriptionInput.value;
                        }

                        if (dateInput.value != "") {
                            projectList[i].dueDate = dateInput.value;
                        }
                        if (prioritySelect.value != "") {
                            projectList[i].priority = prioritySelect.value;
                        }

                        editingDiv.remove(); // Deleting form
                        document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
                        document.getElementById('todoSection').remove(); // Removing elements that need to be updated;
                        projects(projectList); // Calling the projects function - updated elements on screen
                        editProject(); // Calling editProject function - so we may reuse it for further editing.
                    }
                }

                const cancelButton = document.createElement('div');
                cancelButton.className = 'cancelButton';
                cancelButton.id = 'cancelButton';
                cancelButton.textContent = 'Cancel Change(s)';
                buttonDiv.appendChild(cancelButton);

                cancelButton.onclick = function () { // Function to cancel changes
                    editingDiv.remove();

                }

                const deleteButton = document.createElement('div');

                deleteButton.className = 'deleteButton';
                deleteButton.id = 'deleteButton';
                deleteButton.textContent = 'Delete Project';
                buttonDiv.appendChild(deleteButton);

                deleteButton.onclick = function () {

                    const newProjectList = projectList.filter(Project => Project.title != projectList[i].title);
                    projectList = newProjectList;

                    editingDiv.remove(); // Deleting form
                    document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
                    document.getElementById('todoSection').remove(); // Removing elements that need to be updated;
                    projects(projectList); // Calling the projects function - updated elements on screen
                    editProject(); // Calling editProject function - so we may reuse it for further editing.
                }
            }
        }
    }
}

editProject();







