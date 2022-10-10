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

//Objects are stored in this array, r we can update our display at any time when calling specific functions.
let projectList = [home, school, groceries, car, running, everest, job, coding];

for (let i = 0; i < projectList.length; i++) {

    const myProject = projectList[i];

    if (JSON.parse(window.localStorage.getItem(myProject)) === null) {
        continue;
    } else {
        window.localStorage.setItem(projectList[i].title, JSON.stringify(myProject));
    }
}


projects(projectList); //Displaying our objects on screen

function editProject() {

    const projectBoxes = document.getElementsByClassName('projectBox');

    for (let i = 0; i < projectBoxes.length; i++) {

        projectBoxes[i].id = projectList[i].title; // The ID is the object's title
        const boxID = projectBoxes[i].id

        projectBoxes[i].onclick = function () {

            if (document.getElementById('editingDiv') != null || document.getElementById('newProjectDiv')) {
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

                        document.getElementById('leftBar').removeChild(resetDiv); //Removing the reset div 
                        document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
                        document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

                        projects(projectList); // Calling the projects function - updated elements on screen
                        document.getElementById('leftBar').appendChild(resetDiv); // appending the reset div
                        newProject();
                        editProject(); // Calling editProject function - so we may reuse it for further editing.
                        resetProjects();
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

                const deleteTitle = projectList[i].title // this variable stores the right object title before removing it from our list

                deleteButton.onclick = function () {

                    const newprojectList = projectList.filter(Project => Project.title != projectList[i].title);
                    projectList = newprojectList;

                    window.localStorage.removeItem(deleteTitle);

                    editingDiv.remove(); // Deleting form
                    document.getElementById('leftBar').removeChild(resetDiv); //Removing the reset div 
                    document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
                    document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

                    projects(projectList); // Calling the projects function - updated elements on screen
                    document.getElementById('leftBar').appendChild(resetDiv); // appending the reset div
                    newProject();
                    editProject(); // Calling editProject function - so we may reuse it for further editing.
                    resetProjects();
                }
            }
        }
    }
}

function newProject() {

    const addProject = document.getElementById('newProject');

    addProject.onclick = function () {

        if (document.getElementById('newProjectDiv') != null || document.getElementById('editingDiv') != null) {
            return;
        } else {

            if (document.getElementById('editingDiv') != null) {
                document.getElementById('editingDiv').remove();
            }

            const newProjectDiv = document.createElement('div'); // Container that contains a form
            newProjectDiv.id = 'newProjectDiv';
            // editingDiv.textContent = projectList[i].title;
            document.getElementById('mainSection').appendChild(newProjectDiv)

            const newForm = document.createElement('form');
            newForm.id = 'newForm'
            newProjectDiv.appendChild(newForm)

            const projectTitle = document.createElement('span');
            projectTitle.textContent = "Add a new Project"
            newForm.appendChild(projectTitle);

            const formUL = document.createElement('ul');
            newForm.appendChild(formUL);

            const titleLi = document.createElement('li');

            const titleLabel = document.createElement('label');
            titleLabel.textContent = " Project Title:";

            const titleInput = document.createElement('input');
            titleInput.placeholder = 'Computer'

            titleLi.appendChild(titleLabel);
            titleLi.appendChild(titleInput);
            formUL.appendChild(titleLi);

            const descriptionLi = document.createElement('li');

            const descriptionLabel = document.createElement('label');
            descriptionLabel.textContent = "Project Description:";

            const descriptionInput = document.createElement('input');
            descriptionInput.placeholder = "Buy a new computer";

            descriptionLi.appendChild(descriptionLabel);
            descriptionLi.appendChild(descriptionInput);
            formUL.appendChild(descriptionLi);

            const dateLi = document.createElement('li');

            const dateLabel = document.createElement('label');
            dateLabel.textContent = "Project Due Date:";

            const dateInput = document.createElement('input');
            dateInput.style.width = '125px';
            dateInput.type = 'date'

            dateLi.appendChild(dateLabel);
            dateLi.appendChild(dateInput);
            formUL.appendChild(dateLi);

            const priorityLi = document.createElement('li');

            const priorityLabel = document.createElement('label');
            priorityLabel.textContent = "Project Priority:";

            const prioritySelect = document.createElement('select');
            prioritySelect.id = 'prioritySelect';
            prioritySelect.style.width = '130px';

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
            priorityLi.appendChild(prioritySelect);
            formUL.appendChild(priorityLi);

            // Div to hold our button - Push or Cancel changes
            const buttonDiv = document.createElement('div');
            buttonDiv.className = 'buttonDiv';
            newForm.appendChild(buttonDiv);

            const confirmButton = document.createElement('div');
            confirmButton.className = 'editButton';

            confirmButton.textContent = 'Confirm Project';
            buttonDiv.appendChild(confirmButton);

            confirmButton.onclick = function () {

                if (titleInput.value == "" && descriptionInput.value == "" && dateInput.value == "" && prioritySelect.value == "") {
                    return;
                } else {
                    const newObject = new Project(titleInput.value, descriptionInput.value, dateInput.value, prioritySelect.value);

                    window.localStorage.setItem(newObject.title, JSON.stringify(newObject));

                    projectList.push(newObject);
                    newProjectDiv.remove(); // Deleting form
                    document.getElementById('leftBar').removeChild(resetDiv); //Removing the reset div 
                    document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
                    document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

                    projects(projectList); // Calling the projects function - updated elements on screen
                    document.getElementById('leftBar').appendChild(resetDiv); // appending the reset div
                    newProject();
                    editProject(); // Calling editProject function - so we may reuse it for further editing.
                    resetProjects();
                }
            }

            const cancelButton = document.createElement('div');
            cancelButton.className = 'cancelButton';
            cancelButton.id = 'cancelButton';
            cancelButton.textContent = 'Cancel';
            buttonDiv.appendChild(cancelButton);

            cancelButton.onclick = function () { // Function to cancel changes
                newProjectDiv.remove(); // Deleting form
                newProject();
                editProject(); // Calling editProject function - so we may reuse it for further editing.

            }
        }
    }
}

const resetDiv = document.createElement('div');
resetDiv.id = 'resetDiv';
document.getElementById('leftBar').appendChild(resetDiv);

const resetProject = document.createElement('span');
resetProject.id = 'resetProjects';
resetProject.textContent = 'Reset projects to default';
resetDiv.appendChild(resetProject);

function resetProjects() {

    const reset = document.getElementById('resetProjects');

    console.log('test');
    reset.onclick = function () {

        window.localStorage.clear();

        let projectList = [home, school, groceries, car, running, everest, job, coding];

        for (let i = 0; i < projectList.length; i++) {

            const myProject = projectList[i];

            window.localStorage.setItem(projectList[i].title, JSON.stringify(myProject));

        }

        document.getElementById('leftBar').removeChild(resetDiv); //Removing the reset div 
        document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
        document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

        projects(projectList); // Calling the projects function - updated elements on screen
        document.getElementById('leftBar').appendChild(resetDiv); // appending the reset div
        newProject();
        editProject(); // Calling editProject function - so we may reuse it for further editing.
        resetProjects();

    }
}


newProject();
editProject();
resetProjects();