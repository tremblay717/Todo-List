export default function projects(testList) {
    

    const mainSection = document.getElementById('mainSection');

    //1st part is a left bar
    const leftBar = document.getElementById('leftBar');

    const projectDiv = document.createElement('div');
    projectDiv.id = 'projectDiv';
    projectDiv.className = 'projectDiv';
    leftBar.appendChild(projectDiv);

    const newProject = document.createElement('span');
    newProject.textContent = "Add a new project";
    newProject.className = 'newProject';
    newProject.id = 'newProject';
    projectDiv.appendChild(newProject);    
    
    //Span tag for my project projectList
    const myProjects = document.createElement('span');
    myProjects.className = 'myProjects';
    myProjects.textContent = 'My Projects';
    projectDiv.appendChild(myProjects);

    // 2nd part is a div taking 75% of the page's width
    const todoSection = document.createElement('div');
    todoSection.id = 'todoSection';
    mainSection.appendChild(todoSection);



    for (let i = 0; i < testList.length; i++) { // Iterating to display our objects

        const projectTitle = document.createElement('span');
        projectTitle.className = 'projectTitle';
        projectTitle.textContent = testList[i].title;
        projectDiv.appendChild(projectTitle);

        const box = document.createElement('box');

        box.className = 'projectBox';
        box.id = testList[i].title;


        const boxTitle = document.createElement('span');
        boxTitle.textContent = "Title: " + testList[i].title;

        const boxDescription = document.createElement('span');
        boxDescription.textContent = "Description: " + testList[i].description;

        const boxDate = document.createElement('span');
        boxDate.textContent = "Due date: " + testList[i].dueDate;

        const boxPriority = document.createElement('span');
        boxPriority.textContent = "Priority: " + testList[i].priority;

        const boxContent = [boxTitle, boxDescription, boxDate, boxPriority];

        for (let i = 0; i < boxContent.length; i++) {
            box.appendChild(boxContent[i]);
        }

        todoSection.appendChild(box);
    }
}