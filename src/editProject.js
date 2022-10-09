export default function newProject() {
    const addProject = document.getElementById('newProject');

    addProject.onclick = function () {

        if (document.getElementById('newFormDiv') != null) {
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

                newProjectDiv.remove(); // Deleting form
                document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
                document.getElementById('todoSection').remove(); // Removing elements that need to be updated;
                projects(projectList); // Calling the projects function - updated elements on screen
                newProject();
                editProject(); // Calling editProject function - so we may reuse it for further editing.
            }


            const cancelButton = document.createElement('div');
            cancelButton.className = 'cancelButton';
            cancelButton.id = 'cancelButton';
            cancelButton.textContent = 'Cancel Change(s)';
            buttonDiv.appendChild(cancelButton);

            cancelButton.onclick = function () { // Function to cancel changes
                newProjectDiv.remove(); // Deleting form
                editProject(); // Calling editProject function - so we may reuse it for further editing.

            }
        }

        // cancelButton.onclick = function () { // Function to cancel changes
        //     editingDiv.remove();
        // }
    }
}