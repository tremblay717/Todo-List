import projects from './projects.js';
import newProject from './newProject.js';
import resetProjects from './resetProjects.js';
import Todo from './editTodo.js'

export default function editProject() {

    let items = { // Retrieving the local Storage everytime the page is loaded
        ...localStorage
    };

    let list = [];

    for (let i = 0; i < localStorage.length; i++) {
        const item = JSON.parse(items[Object.keys(items)[i]]); // We store each object in localStorage in an array;
        list.push(item);
    }

    const projectBoxes = document.querySelectorAll('.projectTitle');

    for (let i = 0; i < projectBoxes.length; i++) {

        const item = list[i];
        const boxItem = projectBoxes[i];
        boxItem.id = item.title; // The ID is the object's title

        projectBoxes[i].onclick = function () {

            if (document.getElementById('fullProjectDiv') != null || document.getElementById('newProjectDiv')) {
                document.getElementById('fullProjectDiv').remove();
            }

            const fullProjectDiv = document.createElement('div');
            fullProjectDiv.id = 'fullProjectDiv';
            document.getElementById('todoSection').appendChild(fullProjectDiv);

            const editingDiv = document.createElement('div'); // Container that contains a form
            editingDiv.id = 'editingDiv';
            fullProjectDiv.appendChild(editingDiv);

            const projectDisplay = document.createElement('div');
            projectDisplay.id = 'projectDisplay'
            editingDiv.appendChild(projectDisplay)

            const projectTitle = document.createElement('span');
            projectTitle.id = 'projectTitle';
            projectTitle.textContent = "Title: " + list[i].title;
            projectDisplay.appendChild(projectTitle);

            const showDetails = document.createElement('span');
            showDetails.id = 'showDetails';
            showDetails.textContent = "Show Project details";
            projectDisplay.appendChild(showDetails);

            showDetails.onclick = function () {

                if (document.getElementById('editingForm') != null) {
                    document.getElementById('editingForm').remove();
                } else {

                    const editingForm = document.createElement('form');
                    editingForm.id = 'editingForm'
                    editingDiv.appendChild(editingForm)

                    const formUL = document.createElement('ul');
                    formUL.id = 'formUL';
                    editingForm.appendChild(formUL);

                    const titleLi = document.createElement('li');

                    const titleLabel = document.createElement('label');
                    titleLabel.textContent = "Edit Project Title:";

                    const titleInput = document.createElement('input');
                    titleInput.placeholder = list[i].title;

                    titleLi.appendChild(titleLabel);
                    titleLi.appendChild(titleInput);
                    formUL.appendChild(titleLi);

                    const descriptionLi = document.createElement('li');

                    const descriptionLabel = document.createElement('label');
                    descriptionLabel.textContent = "Edit Project Description:";

                    const descriptionInput = document.createElement('input');
                    descriptionInput.id = "descriptionInput";
                    descriptionInput.placeholder = list[i].description;

                    descriptionLi.appendChild(descriptionLabel);
                    descriptionLi.appendChild(descriptionInput);
                    formUL.appendChild(descriptionLi);

                    const dateLi = document.createElement('li');

                    const dateLabel = document.createElement('label');
                    dateLabel.textContent = "Edit Project Due Date:";

                    const currentDate = document.createElement('label');
                    currentDate.textContent = list[i].dueDate;
                    currentDate.style.color = 'purple';

                    const dateInput = document.createElement('input');
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
                    currentPriority.textContent = list[i].priority;
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
                    currentStatus.textContent = list[i].status;
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

                    editButton.textContent = 'Confirm Change(s)';
                    buttonDiv.appendChild(editButton);


                    editButton.onclick = function () {

                        if (titleInput.value == "" && descriptionInput.value == "" && dateInput.value == "" && prioritySelect.value == "" && statusSelect.value == "") {
                            return;
                        } else {

                            const editObject = list[i].title // this variable stores the right object title before removing it from our list
                            window.localStorage.removeItem(editObject);

                            if (titleInput.value != "") {
                                list[i].title = titleInput.value;
                            }
                            if (descriptionInput.value != "") {
                                list[i].description = descriptionInput.value;
                            }
                            if (dateInput.value != "") {
                                list[i].dueDate = dateInput.value;
                            }
                            if (prioritySelect.value != "") {
                                list[i].priority = prioritySelect.value;
                            }
                            if (statusSelect.value != "") {
                                list[i].status = statusSelect.value;
                            }

                            const changedObject = list[i];

                            const newprojectList = list.filter(Project => Project.title != list[i].title);

                            window.localStorage.setItem(changedObject.title, JSON.stringify(changedObject));
                            newprojectList.push(changedObject);

                            editingDiv.remove();

                            document.getElementById('projectDiv').remove();
                            document.getElementById('todoSection').remove();
                            document.getElementById('fullProjectDiv').remove();

                            projects(newprojectList);
                            newProject();
                            editProject(newprojectList);
                            resetProjects();
                        }
                    }

                    const cancelButton = document.createElement('div');
                    cancelButton.className = 'cancelButton';
                    cancelButton.id = 'cancelButton';
                    cancelButton.textContent = 'Cancel Change(s)';
                    buttonDiv.appendChild(cancelButton);

                    cancelButton.onclick = function () { // Function to cancel changes
                        fullProjectDiv.remove();

                    }

                    const deleteButton = document.createElement('div');

                    deleteButton.className = 'deleteButton';
                    deleteButton.id = 'deleteButton';
                    deleteButton.textContent = 'Delete Project';
                    buttonDiv.appendChild(deleteButton);

                    deleteButton.onclick = function () {
                        const deleteTitle = list[i].title;

                        window.localStorage.removeItem(deleteTitle);

                        editingDiv.remove();
                        document.getElementById('projectDiv').remove();
                        document.getElementById('todoSection').remove();

                        projects();
                        newProject();
                        editProject();
                        resetProjects();
                    }
                }

            }

            const toDoDiv = document.createElement('div'); // Container that contains a form
            toDoDiv.id = 'toDoDiv';
            fullProjectDiv.appendChild(toDoDiv);

            const todoTitle = document.createElement('span');
            todoTitle.textContent = list[i].title + ": Todo(s)";
            toDoDiv.appendChild(todoTitle);

            const newtoDo = document.createElement('span');
            newtoDo.id = 'newtoDo';
            newtoDo.textContent = "Add to do";
            toDoDiv.appendChild(newtoDo);

            const currentToDoDiv = document.createElement('div');
            currentToDoDiv.id = 'currentToDoDiv';
            toDoDiv.appendChild(currentToDoDiv);

            let currentToDolist = list[i].todo;

            if (currentToDolist.length != 0) {

                const toDoBar = document.createElement('box');
                toDoBar.id = 'toDoBar';
                currentToDoDiv.appendChild(toDoBar);

                const barTitle = document.createElement('span');
                barTitle.id = 'barTitle';
                barTitle.textContent = "Title";
                toDoBar.appendChild(barTitle);

                const barDescription = document.createElement('span');
                barDescription.id = 'barDescription';
                barDescription.textContent = "Description"
                toDoBar.appendChild(barDescription);

                const barStatus = document.createElement('span');
                barStatus.id = 'barStatus';
                barStatus.textContent = "Status"
                toDoBar.appendChild(barStatus);

                for (let j = 0; j < currentToDolist.length; j++) {

                    const toDoBox = document.createElement('box');
                    toDoBox.id = 'toDoBox';
                    currentToDoDiv.appendChild(toDoBox);

                    const toDoTitle = document.createElement('span');
                    toDoTitle.id = 'toDoTitle';
                    toDoTitle.textContent = currentToDolist[j].title
                    toDoBox.appendChild(toDoTitle);

                    const toDoDescription = document.createElement('p');
                    toDoDescription.id = 'toDoDescription';
                    toDoDescription.textContent = currentToDolist[j].description
                    toDoBox.appendChild(toDoDescription);

                    const toDoStatus = document.createElement('span');
                    toDoStatus.id = 'toDoStatus';
                    toDoStatus.textContent = currentToDolist[j].status
                    toDoBox.appendChild(toDoStatus);

                    const toDoEdit = document.createElement('p');
                    toDoEdit.id = 'toDoEdit';
                    toDoEdit.textContent = "Edit";
                    toDoBox.appendChild(toDoEdit);

                    toDoEdit.onclick = function () {


                        if (document.getElementById('todoForm') != null) {
                            document.getElementById('todoForm').remove();
                        }

                        if (document.getElementById('editTodoForm') != null) {
                            return;
                        } else {

                            const todoForm = document.createElement('div');
                            todoForm.id = 'editTodoForm';
                            fullProjectDiv.appendChild(todoForm);

                            const toDoUL = document.createElement('ul');
                            toDoUL.id = 'toDoUL';
                            todoForm.appendChild(toDoUL);

                            const toDoTitle = document.createElement('span');
                            toDoTitle.id = 'toDoTitle';
                            toDoTitle.textContent = 'Edit Todo: ' + currentToDolist[j].title;
                            toDoUL.appendChild(toDoTitle);

                            const toDoTitleLi = document.createElement('li');
                            toDoTitleLi.id = 'toDoTitleLi'

                            const toDoTitleLabel = document.createElement('label');
                            toDoTitleLabel.textContent = "Todo Title:";

                            const toDoTitleInput = document.createElement('input');
                            toDoTitleLi.appendChild(toDoTitleLabel);
                            toDoTitleLi.appendChild(toDoTitleInput);
                            toDoUL.appendChild(toDoTitleLi);

                            const toDoDescriptionLi = document.createElement('li');
                            toDoDescriptionLi.id = 'toDoDescriptionLi'

                            const toDoDescriptionLabel = document.createElement('label');
                            toDoDescriptionLabel.textContent = "Todo Description:";

                            const toDoDescriptionInput = document.createElement('input');

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

                            const todoButtonDiv = document.createElement('div');
                            todoButtonDiv.id = 'todoButtonDiv'
                            toDoUL.appendChild(todoButtonDiv);


                            const editToDoButton = document.createElement('span');
                            editToDoButton.id = 'editToDoButton';
                            editToDoButton.textContent = "Confirm Change(s)";
                            todoButtonDiv.appendChild(editToDoButton);

                            console.log(currentToDolist)

                            editToDoButton.onclick = function () {

                                if (toDoTitleInput.value == "" && toDoDescriptionInput.value == "" && toDoStatusSelect.value == "") {
                                    return;
                                } else {

                                    if (toDoTitleInput.value != "") {
                                        currentToDolist[j].title = toDoTitleInput.value;
                                    }
                                    if (toDoDescriptionInput.value != "") {
                                        currentToDolist[j].description = toDoDescriptionInput.value;
                                    }
                                    if (toDoStatusSelect.value != "") {

                                        currentToDolist[j].status = toDoStatusSelect.value;
                                    }

                                    const changedObject = list[i];

                                    changedObject.todo = currentToDolist;



                                    window.localStorage.setItem(changedObject.title, JSON.stringify(changedObject));

                                    toDoStatus.textContent = currentToDolist[j].status


                                    document.getElementById('editTodoForm').remove();
                                    // document.getElementById('todoSection').remove();
                                    // document.getElementById('fullProjectDiv').remove();
                                }
                            }

                            const deleteToDoButton = document.createElement('span');
                            deleteToDoButton.id = 'deleteToDoButton';
                            deleteToDoButton.textContent = "Delete Todo";
                            todoButtonDiv.appendChild(deleteToDoButton);
                        }
                    }
                }
            }

            newtoDo.onclick = function () {

                if (document.getElementById('todoForm') != null) {
                    return;
                } else {

                    const todoForm = document.createElement('div');
                    todoForm.id = 'todoForm';
                    fullProjectDiv.appendChild(todoForm);

                    const toDoUL = document.createElement('ul');
                    toDoUL.id = 'toDoUL';
                    todoForm.appendChild(toDoUL);

                    const toDoTitle = document.createElement('span');
                    toDoTitle.id = 'toDoTitle';
                    toDoTitle.textContent = 'New Todo';
                    toDoUL.appendChild(toDoTitle);

                    const toDoTitleLi = document.createElement('li');
                    toDoTitleLi.id = 'toDoTitleLi'

                    const toDoTitleLabel = document.createElement('label');
                    toDoTitleLabel.textContent = "Todo Title:";

                    const toDoTitleInput = document.createElement('input');

                    toDoTitleLi.appendChild(toDoTitleLabel);
                    toDoTitleLi.appendChild(toDoTitleInput);
                    toDoUL.appendChild(toDoTitleLi);

                    const toDoDescriptionLi = document.createElement('li');
                    toDoDescriptionLi.id = 'toDoDescriptionLi'

                    const toDoDescriptionLabel = document.createElement('label');
                    toDoDescriptionLabel.textContent = "Todo Description:";

                    const toDoDescriptionInput = document.createElement('input');

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
                    toDoUL.appendChild(toDoButton)

                    toDoButton.onclick = function () {

                        if (toDoTitleInput.value == "" || toDoDescriptionInput.value == "" || toDoStatusSelect.value == "") {
                            return;
                        } else {

                            const todoList = list[i].todo

                            const newTodoObject = new Todo(toDoTitleInput.value, toDoDescriptionInput.value, toDoStatusSelect.value)

                            todoList.push(newTodoObject);

                            window.localStorage.setItem(list[i].title, JSON.stringify(list[i]));

                            editingDiv.remove();

                            document.getElementById('projectDiv').remove();
                            document.getElementById('todoSection').remove();
                            document.getElementById('fullProjectDiv').remove();

                            projects();
                            newProject();
                            editProject();
                            resetProjects();
                        }
                    }
                }
            }
        }
    }
}