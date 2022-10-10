import projects from './projects.js';
import editProject from './editProject.js';
import newProject from './newProject.js';

export default function resetProjects() {

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


    const reset = document.getElementById('resetProjects');

    //Objects are stored in this array, r we can update our display at any time when calling specific functions.
    let projectList = [home, school, groceries, car, running, everest, job, coding];

    reset.onclick = function () {

        window.localStorage.clear();

        let testList = [];

        for (let i = 0; i < projectList.length; i++) {

            const myProject = projectList[i];

            window.localStorage.setItem(projectList[i].title, JSON.stringify(myProject));

        }

        let items = {
            ...localStorage
        };

        for (let i = 0; i < localStorage.length; i++) {

            const item = JSON.parse(items[Object.keys(items)[i]]);
            testList.push(item);
        }

        document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
        document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

        projects(testList); // Calling the projects function - updated elements on screen
        // editProject(); // Calling editProject function - so we may reuse it for further editing.
        newProject(testList);
        resetProjects(testList);
        editProject(testList)
    }
}