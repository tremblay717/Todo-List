import projects from './projects.js';
import Project from './Project.js';
import editProject from './editProject.js';
import newProject from './newProject.js';

export default function resetProjects() {

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

    let projectList = [home, school, groceries, car, running, everest, job, coding];

    reset.onclick = function () {

        window.localStorage.clear();

        for (let i = 0; i < projectList.length; i++) {

            const myProject = projectList[i];
            window.localStorage.setItem(projectList[i].title, JSON.stringify(myProject));

        }

        document.getElementById('projectDiv').remove(); // Removing elements that need to be updated;
        document.getElementById('todoSection').remove(); // Removing elements that need to be updated;

        projects();
        newProject();
        resetProjects();
        editProject();
    }
}