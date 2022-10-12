import './style.css';
import basicHtml from './template.js';
import projects from './projects.js';
import Project from './Project.js';
import Todo from './editTodo.js';

basicHtml(); //Displaying the basic html template through a function call
projects(); // Populating the left Bar

let items = { // Retrieving the local Storage everytime the page is loaded
    ...localStorage
};

let list = [];

for (let i = 0; i < localStorage.length; i++) {
    const item = JSON.parse(items[Object.keys(items)[i]]); // We store each object in localStorage in an array;
    item.constructor = Project;
    list.push(item);
}

const projectBoxes = document.querySelectorAll('.projectTitle');

for (let i = 0; i < projectBoxes.length; i++) {

    projectBoxes[i].addEventListener('click', editProject, true);
    projectBoxes[i].addEventListener('click', myTodo, false);
}

let currentObject = "";

function editProject() {

    const myObject = list.find(item => item.title == this.id);

    currentObject = myObject;

    if (document.getElementById('fullProjectDiv') != null) {
        document.getElementById('fullProjectDiv').remove();

    } else if (document.getElementById('newProjectDiv') != null) {
        document.getElementById('newProjectDiv').remove();
    }

    const fullProjectDiv = document.createElement('div');
    fullProjectDiv.id = 'fullProjectDiv';
    document.getElementById('todoSection').appendChild(fullProjectDiv);

    const editingDiv = document.createElement('div'); // Container that contains a form
    editingDiv.id = 'editingDiv';
    fullProjectDiv.appendChild(editingDiv);

    const projectDisplay = document.createElement('div');
    projectDisplay.id = 'projectDisplay';
    editingDiv.appendChild(projectDisplay);

    const projectTitle = document.createElement('span');
    projectTitle.id = 'projectTitle';
    projectTitle.textContent = "Title: " + currentObject.title;
    projectDisplay.appendChild(projectTitle);

    const showDetail = document.createElement('span');
    showDetail.id = 'showDetails';
    showDetail.textContent = "Show Project details";
    projectDisplay.appendChild(showDetail);
    showDetail.addEventListener('click', showDetails);
}

function showDetails() {

    if (document.getElementById('editingForm') != null) {
        document.getElementById('editingForm').remove();
    } else {

        const editingForm = document.createElement('form');
        editingForm.id = 'editingForm'
        document.getElementById('editingDiv').appendChild(editingForm)

        const formUL = document.createElement('ul');
        formUL.id = 'formUL';
        editingForm.appendChild(formUL);

        const titleLi = document.createElement('li');

        const titleLabel = document.createElement('label');
        titleLabel.textContent = "Edit Project Title:";

        const titleInput = document.createElement('input');
        titleInput.id = 'titleInputChange';
        titleInput.placeholder = currentObject.title;

        titleLi.appendChild(titleLabel);
        titleLi.appendChild(titleInput);
        formUL.appendChild(titleLi);

        const descriptionLi = document.createElement('li');

        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = "Edit Project Description:";

        const descriptionInput = document.createElement('input');
        descriptionInput.id = "descriptionInput";
        descriptionInput.placeholder = currentObject.description;

        descriptionLi.appendChild(descriptionLabel);
        descriptionLi.appendChild(descriptionInput);
        formUL.appendChild(descriptionLi);

        const dateLi = document.createElement('li');

        const dateLabel = document.createElement('label');
        dateLabel.textContent = "Edit Project Due Date:";

        const currentDate = document.createElement('label');
        currentDate.id = 'currentDate';
        currentDate.textContent = currentObject.dueDate;
        currentDate.style.color = 'purple';

        const dateInput = document.createElement('input');
        dateInput.id = 'dateInput';
        dateInput.style.width = '125px';
        dateInput.type = 'date';

        dateLi.appendChild(dateLabel);
        dateLi.appendChild(currentDate);
        dateLi.appendChild(dateInput);
        formUL.appendChild(dateLi);

        const priorityLi = document.createElement('li');

        const priorityLabel = document.createElement('label');
        priorityLabel.textContent = "Edit Project Priority:";

        const currentPriority = document.createElement('label');
        currentPriority.id = 'currentPriority';
        currentPriority.textContent = currentObject.priority;
        currentPriority.style.color = 'purple';

        const prioritySelect = document.createElement('select');
        prioritySelect.id = 'prioritySelect';
        prioritySelect.style.width = '130px';

        const optionDefault = document.createElement('option');
        optionDefault.value = "";
        optionDefault.textContent = "";
        prioritySelect.appendChild(optionDefault);

        const optionLow = document.createElement('option');
        optionLow.value = "Low";
        optionLow.textContent = 'Low'
        prioritySelect.appendChild(optionLow);

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

        const statusLi = document.createElement('li');

        const statusLabel = document.createElement('label');
        statusLabel.textContent = "Edit Project Status:";

        const currentStatus = document.createElement('label');
        currentStatus.id = 'currentStatus';
        currentStatus.textContent = currentObject.status;
        currentStatus.style.color = 'purple'

        const statusSelect = document.createElement('select');
        statusSelect.id = 'statusSelect';
        statusSelect.style.width = '130px';

        const statusDefault = document.createElement('option');
        statusDefault.value = "";
        statusDefault.textContent = "";
        statusSelect.appendChild(statusDefault);

        const statusNot = document.createElement('option');
        statusNot.value = "Not Started";
        statusNot.textContent = 'Not Started'
        statusSelect.appendChild(statusNot);

        const statusProgress = document.createElement('option');
        statusProgress.value = "In Progress";
        statusProgress.textContent = "In Progress";
        statusSelect.appendChild(statusProgress);

        const statusDone = document.createElement('option');
        statusDone.value = "Done";
        statusDone.textContent = "Done";
        statusSelect.appendChild(statusDone);

        statusLi.appendChild(statusLabel);
        statusLi.appendChild(currentStatus);
        statusLi.appendChild(statusSelect);
        formUL.appendChild(statusLi);

        // Div to hold our button - Push or Cancel changes
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'buttonDiv';
        editingForm.appendChild(buttonDiv);

        const editButton = document.createElement('div');
        editButton.className = 'editButton';
        editButton.addEventListener('click', editDetails);

        editButton.textContent = 'Confirm Change(s)';
        buttonDiv.appendChild(editButton);

        const deleteButton = document.createElement('div');
        deleteButton.className = 'deleteButton';
        deleteButton.id = 'deleteButton';
        deleteButton.textContent = 'Delete Project';
        deleteButton.addEventListener('click', deleteProject);
        buttonDiv.appendChild(deleteButton);
    }
}

function editDetails() {

    const titleInput = document.getElementById('titleInputChange');
    const descriptionInput = document.getElementById('descriptionInput');
    const currentDate = document.getElementById('currentDate');
    const currentPriority = document.getElementById('currentPriority');
    const currentStatus = document.getElementById('currentStatus');
    const dateInput = document.getElementById('dateInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const statusSelect = document.getElementById('statusSelect');

    if (titleInput.value == "" && descriptionInput.value == "" && dateInput.value == "" && prioritySelect.value == "" && statusSelect.value == "") {
        return;
    } else {

        const titleObject = document.getElementById(currentObject.title);
        const projectTitle = document.getElementById('projectTitle');
        // const editObject = list[i].title // this variable stores the right object title before removing it from our list
        window.localStorage.removeItem(currentObject.title);

        if (titleInput.value != "") {
            document.getElementById(currentObject.title).textContent = titleInput.value;
            currentObject.title = titleInput.value;
            document.getElementById('myToDoTItle').textContent = titleInput.value + ":Todo(s)";
        }
        if (descriptionInput.value != "") {
            currentObject.description = descriptionInput.value;
        }
        if (dateInput.value != "") {
            currentObject.dueDate = dateInput.value;
        }
        if (prioritySelect.value != "") {
            currentObject.priority = prioritySelect.value;
        }
        if (statusSelect.value != "") {
            currentObject.status = statusSelect.value;
        }

        window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject));

        projectTitle.textContent = currentObject.title;
        titleObject.id = currentObject.title;
        titleInput.value = "";
        titleInput.placeholder = currentObject.title;

        descriptionInput.placeholder = currentObject.description;
        descriptionInput.value = "";

        currentStatus.textContent = currentObject.status;

        currentDate.textContent = currentObject.dueDate;
        dateInput.value = "";

        currentPriority.textContent = currentObject.priority;
        prioritySelect.value = "";

        currentStatus.textContent = "";
        statusSelect.value = "";
    }
}

function deleteProject() {
    const deleteTitle = currentObject.title;

    window.localStorage.removeItem(deleteTitle);
    document.getElementById('todoSection').removeChild(document.getElementById('fullProjectDiv'));

    document.getElementById(deleteTitle).remove();

}

const addProject = document.getElementById('newProject');
addProject.addEventListener('click', newProject);

function newProject() {


    if (document.getElementById('fullProjectDiv') != null) {

        document.getElementById('fullProjectDiv').remove();
    }

    if (document.getElementById('newProjectDiv') != null || document.getElementById('editingDiv') != null) {
        return;




    } else {


        if (document.getElementById('editingDiv') != null) {
            document.getElementById('editingDiv').remove();
        }


        const newProjectDiv = document.createElement('div'); // Container that contains a form
        newProjectDiv.id = 'newProjectDiv';
        document.getElementById('todoSection').appendChild(newProjectDiv);

        const newForm = document.createElement('form');
        newForm.id = 'newForm';
        newProjectDiv.appendChild(newForm);

        const projectTitle = document.createElement('span');
        projectTitle.textContent = "Add a new Project";
        newForm.appendChild(projectTitle);

        const formUL = document.createElement('ul');
        formUL.id = 'newProjectUl';
        newForm.appendChild(formUL);

        const titleLi = document.createElement('li');

        const titleLabel = document.createElement('label');
        titleLabel.textContent = " Project Title:";

        const titleInput = document.createElement('input');
        titleInput.id = 'titleInput';
        titleInput.placeholder = 'Computer';

        titleLi.appendChild(titleLabel);
        titleLi.appendChild(titleInput);
        formUL.appendChild(titleLi);

        const descriptionLi = document.createElement('li');

        const descriptionLabel = document.createElement('label');
        descriptionLabel.textContent = "Project Description:";

        const descriptionInput = document.createElement('input');
        descriptionInput.id = 'descriptionInput';
        descriptionInput.placeholder = "Buy a new computer";

        descriptionLi.appendChild(descriptionLabel);
        descriptionLi.appendChild(descriptionInput);
        formUL.appendChild(descriptionLi);

        const dateLi = document.createElement('li');

        const dateLabel = document.createElement('label');
        dateLabel.textContent = "Project Due Date:";

        const dateInput = document.createElement('input');
        dateInput.id = 'dateInput';
        dateInput.style.width = '125px';
        dateInput.type = 'date';

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

        const statusLi = document.createElement('li');

        const statusLabel = document.createElement('label');
        statusLabel.textContent = "Project Status:";

        const statusSelect = document.createElement('select');
        statusSelect.id = 'statusSelect';
        statusSelect.style.width = '130px';

        const statusDefault = document.createElement('option');
        statusDefault.value = "";
        statusDefault.textContent = "";
        statusSelect.appendChild(statusDefault);

        const statusNot = document.createElement('option');
        statusNot.value = "Not Started";
        statusNot.textContent = 'Not Started';
        statusSelect.appendChild(statusNot);

        const statusProgress = document.createElement('option');
        statusProgress.value = "In Progress";
        statusProgress.textContent = "In Progress";
        statusSelect.appendChild(statusProgress);

        const statusDone = document.createElement('option');
        statusDone.value = "Done";
        statusDone.textContent = "Done";
        statusSelect.appendChild(statusDone);

        statusLi.appendChild(statusLabel);
        statusLi.appendChild(statusSelect);
        formUL.appendChild(statusLi);

        // Div to hold our button - Push or Cancel changes
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'buttonDiv';
        newForm.appendChild(buttonDiv);

        const confirmButton = document.createElement('div');
        confirmButton.className = 'editButton';
        confirmButton.addEventListener('click', confirmButtonNew);

        confirmButton.textContent = 'Confirm Project';
        confirmButton.id = confirmButton;
        buttonDiv.appendChild(confirmButton);

        const cancelButton = document.createElement('div');
        cancelButton.className = 'cancelButton';
        cancelButton.id = 'cancelButton';
        cancelButton.textContent = 'Cancel';
        cancelButton.addEventListener('click', cancelProject)
        buttonDiv.appendChild(cancelButton);
    }
}

function confirmButtonNew() {
    const titleInput = document.getElementById('titleInput');
    const descriptionInput = document.getElementById('descriptionInput');
    const dateInput = document.getElementById('dateInput');
    const prioritySelect = document.getElementById('prioritySelect');
    const statusSelect = document.getElementById('statusSelect');

    if (titleInput.value == "" || descriptionInput.value == "" || dateInput.value == "" || prioritySelect.value == "" || statusSelect.value == "") {
        return;
    } else {
        const newObject = new Project(titleInput.value, descriptionInput.value, dateInput.value, prioritySelect.value, statusSelect.value, []);
        window.localStorage.setItem(newObject.title, JSON.stringify(newObject));
        const projectTitle = document.createElement('span');
        projectTitle.className = 'projectTitle';
        projectTitle.id = newObject.title
        projectTitle.textContent = newObject.title;
        list.push(newObject);
        document.getElementById('projectDiv').appendChild(projectTitle);
        document.getElementById('newProjectDiv').remove();
        projectTitle.addEventListener('click', editProject, true);
        projectTitle.addEventListener('click', myTodo);
    }
}

function cancelProject() {
    document.getElementById('newProjectDiv').remove();
}

const reset = document.getElementById('resetProjects');
reset.addEventListener('click', resetProjects);

function resetProjects() {


    //Creating a few random projects to display it on our screen
    const home = new Project('Home', 'Renovating my Home', '2023-12-31', 'Low', 'Not Started', []);
    const school = new Project('School', 'Finishing my degree', '2023-12-31', 'Low', 'Not Started', []);
    const groceries = new Project('Groceries', 'Buy my groceries', '2023-01-01', 'High', 'Not Started', []);
    const car = new Project('New Car', 'Buy a new car', '2023-12-31', 'Medium', 'Not Started', []);
    const running = new Project('Half-marathon', 'Running a half-marathon', '2023-09-30', 'High', 'Not Started', []);
    const everest = new Project('Climbing Everest', 'Climbing Mount Everest', '2025-06-30', 'Medium', 'Not Started', []);
    const job = new Project('New Job', 'Change for a better job', '2022-12-31', 'Low', 'Not Started', []);
    const coding = new Project('Coding', 'Learn to code', '2023-10-31', 'Medium', 'Not Started', []);

    let projectList = [home, school, groceries, car, running, everest, job, coding];

    window.localStorage.clear();


    for (let i = 0; i < projectList.length; i++) {

        const myProject = projectList[i];

        window.localStorage.setItem(myProject.title, JSON.stringify(myProject));

    }

    document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
    document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

    if (document.getElementById('fullProjectDiv') != null) {
        document.getElementById('fullProjectDiv').remove();
    }

    projects();

    items = { // Retrieving the local Storage everytime the page is loaded
        ...localStorage
    };

    list = [];

    for (let i = 0; i < localStorage.length; i++) {
        const item = JSON.parse(items[Object.keys(items)[i]]); // We store each object in localStorage in an array;
        item.constructor = Project;
        list.push(item);
    }

    const projectBoxes = document.querySelectorAll('.projectTitle');

    for (let i = 0; i < projectBoxes.length; i++) {

        projectBoxes[i].addEventListener('click', editProject, true);
        projectBoxes[i].addEventListener('click', myTodo, false);
    }

    currentObject = "";

}


function myTodo() {

    const toDoDiv = document.createElement('div'); // Container that contains a form
    toDoDiv.id = 'toDoDiv';
    document.getElementById('fullProjectDiv').append(toDoDiv);

    const todoTitle = document.createElement('span');
    todoTitle.id = 'myToDoTItle';
    todoTitle.textContent = currentObject.title + ": Todo(s)";
    toDoDiv.appendChild(todoTitle);

    const newtoDo = document.createElement('span');
    newtoDo.id = 'newtoDo';
    newtoDo.textContent = "Add to do";
    newtoDo.addEventListener('click', createTodo);

    toDoDiv.appendChild(newtoDo);

    const currentToDoDiv = document.createElement('div');
    currentToDoDiv.id = 'currentToDoDiv';
    toDoDiv.appendChild(currentToDoDiv);

    const toDoBar = document.createElement('box');
    toDoBar.id = 'toDoBar';
    currentToDoDiv.appendChild(toDoBar);

    const barTitle = document.createElement('span');
    barTitle.id = 'barTitle';
    barTitle.textContent = "Title";
    toDoBar.appendChild(barTitle);

    const barDescription = document.createElement('span');
    barDescription.id = 'barDescription';
    barDescription.textContent = "Description";
    toDoBar.appendChild(barDescription);

    const barStatus = document.createElement('span');
    barStatus.id = 'barStatus';
    barStatus.textContent = "Status"
    toDoBar.appendChild(barStatus);

    let currentToDolist = currentObject.todo;

    if (currentToDolist.length > 0) {

        for (let j = 0; j < currentToDolist.length; j++) {

            const toDoBox = document.createElement('box');
            toDoBox.className = 'toDoBox';
            toDoBox.id = currentToDolist[j].title + "_Box";
            currentToDoDiv.appendChild(toDoBox);

            const toDoTitle = document.createElement('span');
            toDoTitle.id = 'toDoTitle';
            toDoTitle.textContent = currentToDolist[j].title
            toDoBox.appendChild(toDoTitle);

            const toDoDescription = document.createElement('p');
            toDoDescription.id = 'toDoDescription';
            toDoDescription.textContent = currentToDolist[j].description;
            toDoBox.appendChild(toDoDescription);

            const toDoStatus = document.createElement('span');
            toDoStatus.id = 'toDoStatus';
            toDoStatus.textContent = currentToDolist[j].status;
            toDoBox.appendChild(toDoStatus);

            const toDoEdit = document.createElement('p');
            toDoEdit.id = currentToDolist[j].title;
            toDoEdit.style.cursor = "pointer";
            toDoEdit.textContent = "Edit";
            toDoEdit.addEventListener('click', changeTodo);
            toDoBox.appendChild(toDoEdit);

        }
    }
}

function createTodo() {

    if (document.getElementById('todoForm') != null) {
        return;
    }

    const todoForm = document.createElement('div');
    todoForm.id = 'todoForm';
    document.getElementById('fullProjectDiv').appendChild(todoForm);

    const toDoUL = document.createElement('ul');
    toDoUL.id = 'toDoUL';
    todoForm.appendChild(toDoUL);

    const toDoTitle = document.createElement('span');
    toDoTitle.id = 'toDoTitle';
    toDoTitle.textContent = 'New Todo';
    toDoUL.appendChild(toDoTitle);

    const toDoTitleLi = document.createElement('li');
    toDoTitleLi.id = 'toDoTitleLi';

    const toDoTitleLabel = document.createElement('label');
    toDoTitleLabel.textContent = "Todo Title:";

    const toDoTitleInput = document.createElement('input');
    toDoTitleInput.id = 'toDoTitleInput';

    toDoTitleLi.appendChild(toDoTitleLabel);
    toDoTitleLi.appendChild(toDoTitleInput);
    toDoUL.appendChild(toDoTitleLi);

    const toDoDescriptionLi = document.createElement('li');
    toDoDescriptionLi.id = 'toDoDescriptionLi'

    const toDoDescriptionLabel = document.createElement('label');
    toDoDescriptionLabel.textContent = "Todo Description:";

    const toDoDescriptionInput = document.createElement('input');
    toDoDescriptionInput.id = 'toDoDescriptionInput';

    toDoDescriptionLi.appendChild(toDoDescriptionLabel);
    toDoDescriptionLi.appendChild(toDoDescriptionInput);
    toDoUL.appendChild(toDoDescriptionLi);

    const toDoStatusLi = document.createElement('li');
    toDoStatusLi.id = 'toDoStatusLi';

    const toDoStatusLabel = document.createElement('label');
    toDoStatusLabel.textContent = "Todo Status:";

    const toDoStatusSelect = document.createElement('select');
    toDoStatusSelect.id = 'toDoStatusSelect';
    toDoStatusSelect.style.width = '130px';

    const toDoStatusNot = document.createElement('option');
    toDoStatusNot.value = "Not Started";
    toDoStatusNot.textContent = 'Not Started'
    toDoStatusSelect.appendChild(toDoStatusNot);

    const toDoStatusProgress = document.createElement('option');
    toDoStatusProgress.value = "In Progress";
    toDoStatusProgress.textContent = "In Progress";
    toDoStatusSelect.appendChild(toDoStatusProgress);

    const toDoStatusDone = document.createElement('option');
    toDoStatusDone.value = "Done";
    toDoStatusDone.textContent = "Done";
    toDoStatusSelect.appendChild(toDoStatusDone);

    toDoStatusLi.appendChild(toDoStatusLabel);
    toDoStatusLi.appendChild(toDoStatusSelect);
    toDoUL.appendChild(toDoStatusLi);

    const toDoButton = document.createElement('span');
    toDoButton.id = 'toDoButton';
    toDoButton.textContent = "Confirm Todo";
    toDoButton.addEventListener('click', generateToDo);
    toDoUL.appendChild(toDoButton);

}


function generateToDo() {

    const toDoTitleInput = document.getElementById('toDoTitleInput');
    const toDoDescriptionInput = document.getElementById('toDoDescriptionInput');
    const toDoStatusSelect = document.getElementById('toDoStatusSelect');


    if (toDoTitleInput.value == "" || toDoDescriptionInput.value == "" || toDoStatusSelect.value == "") {
        return;
    } else {

        const todoList = currentObject.todo;

        const newTodoObject = new Todo(toDoTitleInput.value, toDoDescriptionInput.value, toDoStatusSelect.value);

        todoList.push(newTodoObject);

        currentObject.todo = todoList;

        const toDoBox = document.createElement('box');
        toDoBox.className = 'toDoBox';
        toDoBox.id = toDoTitleInput.value + "_Box";
        document.getElementById('currentToDoDiv').appendChild(toDoBox);

        const toDoTitle = document.createElement('span');
        toDoTitle.id = 'toDoTitle';
        toDoTitle.textContent = toDoTitleInput.value
        toDoBox.appendChild(toDoTitle);

        const toDoDescription = document.createElement('p');
        toDoDescription.id = 'toDoDescription';
        toDoDescription.textContent = toDoDescriptionInput.value;
        toDoBox.appendChild(toDoDescription);

        const toDoStatus = document.createElement('span');
        toDoStatus.id = 'toDoStatus';
        toDoStatus.textContent = toDoStatusSelect.value;
        toDoBox.appendChild(toDoStatus);

        const toDoEdit = document.createElement('p');
        toDoEdit.className = 'toDoEdit'
        toDoEdit.id = newTodoObject.title;
        toDoEdit.style.cursor = "pointer";
        toDoEdit.textContent = "Edit";
        toDoEdit.addEventListener('click', changeTodo);
        toDoBox.appendChild(toDoEdit);

        window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject));

        document.getElementById('todoForm').remove();
    }
}

function changeTodo() {

    if (document.getElementById('todoForm') != null) {

        document.getElementById('todoForm').remove();
    }

    if (document.getElementById('editTodoForm') != null) {
        return;
    } else {

        let currentToDolist = currentObject.todo;

        let currentTodo = currentToDolist.find(item => item.title == this.id)

        const todoForm = document.createElement('div');
        todoForm.id = 'editTodoForm';
        document.getElementById('fullProjectDiv').appendChild(todoForm);

        const toDoUL = document.createElement('ul');
        toDoUL.id = 'toDoUL';
        todoForm.appendChild(toDoUL);

        const editToDoTitle = document.createElement('span');
        editToDoTitle.id = 'editToDoTitle';
        editToDoTitle.textContent = 'Edit Todo: ' + currentTodo.title;
        toDoUL.appendChild(editToDoTitle);

        const toDoTitleLi = document.createElement('li');
        toDoTitleLi.id = 'toDoTitleLi';

        const toDoTitleLabel = document.createElement('label');
        toDoTitleLabel.textContent = "Todo Title:";

        const toDoTitleInput = document.createElement('input');
        toDoTitleInput.id = 'toDoTitleInput'
        toDoTitleLi.appendChild(toDoTitleLabel);
        toDoTitleLi.appendChild(toDoTitleInput);
        toDoUL.appendChild(toDoTitleLi);

        const toDoDescriptionLi = document.createElement('li');
        toDoDescriptionLi.id = 'toDoDescriptionLi'

        const toDoDescriptionLabel = document.createElement('label');
        toDoDescriptionLabel.textContent = "Todo Description:";

        const toDoDescriptionInput = document.createElement('input');
        toDoDescriptionInput.id = 'toDoDescriptionInput';

        toDoDescriptionLi.appendChild(toDoDescriptionLabel);
        toDoDescriptionLi.appendChild(toDoDescriptionInput);
        toDoUL.appendChild(toDoDescriptionLi);

        const toDoStatusLi = document.createElement('li');
        toDoStatusLi.id = 'toDoStatusLi';

        const toDoStatusLabel = document.createElement('label');
        toDoStatusLabel.textContent = "Todo Status:";

        const toDoStatusSelect = document.createElement('select');
        toDoStatusSelect.id = 'toDoStatusSelect';
        toDoStatusSelect.style.width = '130px';


        const toDoStatusEmpty = document.createElement('option');
        toDoStatusEmpty.value = "";
        toDoStatusEmpty.textContent = '';
        toDoStatusSelect.appendChild(toDoStatusEmpty);

        const toDoStatusNot = document.createElement('option');
        toDoStatusNot.value = "Not Started";
        toDoStatusNot.textContent = 'Not Started';
        toDoStatusSelect.appendChild(toDoStatusNot);

        const toDoStatusProgress = document.createElement('option');
        toDoStatusProgress.value = "In Progress";
        toDoStatusProgress.textContent = "In Progress";
        toDoStatusSelect.appendChild(toDoStatusProgress);

        const toDoStatusDone = document.createElement('option');
        toDoStatusDone.value = "Done";
        toDoStatusDone.textContent = "Done";
        toDoStatusSelect.appendChild(toDoStatusDone);

        toDoStatusLi.appendChild(toDoStatusLabel);
        toDoStatusLi.appendChild(toDoStatusSelect);
        toDoUL.appendChild(toDoStatusLi);

        const todoButtonDiv = document.createElement('div');
        todoButtonDiv.id = 'todoButtonDiv';
        toDoUL.appendChild(todoButtonDiv);

        const editToDoButton = document.createElement('span');
        editToDoButton.id = currentTodo.title + "_Btn";
        editToDoButton.className = 'editToDoButton'
        editToDoButton.textContent = "Confirm Change(s)";
        editToDoButton.addEventListener('click', confirmToDoChange);
        todoButtonDiv.appendChild(editToDoButton);

        const deleteToDoButton = document.createElement('span');
        deleteToDoButton.id = currentTodo.title + "_Btn";
        deleteToDoButton.className = 'deleteToDoButton'
        deleteToDoButton.textContent = "Delete Todo";
        deleteToDoButton.addEventListener('click', deleteToDo);
        todoButtonDiv.appendChild(deleteToDoButton);


    }
}

function confirmToDoChange() {

    let itemIndex = (this.id).indexOf("_");

    let item = (this.id).slice(0, itemIndex);

    const index = currentObject.todo.findIndex(object => {
        return object.title == item;
    })

    const toDoTitleInput = document.getElementById('toDoTitleInput');
    const toDoDescriptionInput = document.getElementById('toDoDescriptionInput');
    const toDoStatusSelect = document.getElementById('toDoStatusSelect');
    const toDoTitle = document.getElementById('toDoTitle');
    const toDoDescription = document.getElementById('toDoDescription');
    const toDoStatus = document.getElementById('toDoStatus');

    if (toDoTitleInput.value == "" && toDoDescriptionInput.value == "" && toDoStatusSelect.value == "") {
        return;
    } else {

        if (toDoTitleInput.value != "") {

            currentObject.todo[index].title = toDoTitleInput.value;
            toDoTitle.textContent = toDoTitleInput.value;
            this.id = toDoTitleInput.value + "_Btn";

            const box = document.getElementById(item + "_Box");
            box.id = currentObject.todo[index].title + "_Box";
            const edit = document.getElementById(item);
            edit.id = currentObject.todo[index].title;

        }

        if (toDoDescriptionInput.value != "") {
            currentObject.todo[index].description = toDoDescriptionInput.value;
            toDoDescription.textContent = toDoDescriptionInput.value;
        }

        if (toDoStatusSelect.value != "") {
            currentObject.todo[index].status = toDoStatusSelect.value;
        }

        window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject));
        toDoStatus.textContent = currentObject.todo[index].status;
        document.getElementById('editTodoForm').remove();
    }
}

function deleteToDo() {

    let currentToDolist = currentObject.todo;

    let itemIndex = (this.id).indexOf("_");

    let item = (this.id).slice(0, itemIndex);

    const index = currentObject.todo.findIndex(object => {
        return object.title == item
    })

    document.getElementById(currentObject.todo[index].title + "_Box").remove();

    currentObject.todo = currentToDolist.filter(object => object.title != item);

    document.getElementById('editTodoForm').remove();

    window.localStorage.setItem(currentObject.title, JSON.stringify(currentObject));

}