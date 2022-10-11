import projects from './projects.js';
import editProject from './editProject.js';
import newProject from './newProject.js';
import resetProjects from './resetProjects.js'

export default function Todo(title, description, status) {
    this.title = title;
    this.description = description;
    this.status = status;
}