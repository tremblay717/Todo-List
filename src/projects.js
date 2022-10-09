export default function projects(projectList) {

 
    const mainSection = document.getElementById('mainSection');

    //1st part is a left bar
    const leftBar = document.getElementById('leftBar');

    const projectDiv = document.createElement('div');
    projectDiv.className = 'projectDiv';
    leftBar.appendChild(projectDiv);

    // 2nd part is a div taking 75% of the page's width
    const todoSection = document.createElement('div');
    todoSection.id = 'todoSection';
    mainSection.appendChild(todoSection);

    //Span tag for my project list
    const myProjects = document.createElement('span');
    myProjects.className = 'myProjects';
    myProjects.textContent = 'My Projects';
    projectDiv.appendChild(myProjects);

    for (let i = 0; i < projectList.length; i++) { // Iterating to display our objects

        const projectTitle = document.createElement('span');
        projectTitle.className = 'projectTitle';
        projectTitle.textContent = projectList[i].title;
        projectDiv.appendChild(projectTitle);

        const box = document.createElement('box');
       
        box.className = 'projectBox';
        box.id = projectList[i].title;


        const boxTitle = document.createElement('span');
        boxTitle.textContent = "Title: " + projectList[i].title;

        const boxDescription = document.createElement('span');
        boxDescription.textContent = "Description: " + projectList[i].description;

        const boxDate = document.createElement('span');
        boxDate.textContent = "Due date: " + projectList[i].dueDate;

        const boxPriority = document.createElement('span');
        boxPriority.textContent = "Priority: " + projectList[i].priority;

        const boxContent = [boxTitle, boxDescription, boxDate, boxPriority];

        for (let i = 0; i < boxContent.length; i++) {
            box.appendChild(boxContent[i]);
        }

        todoSection.appendChild(box);
    }
}