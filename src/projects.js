export default function projects () {
  // 1st part is a left bar
  const leftBar = document.getElementById('leftBar')

  const projectDiv = document.createElement('div')
  projectDiv.id = 'projectDiv'
  projectDiv.className = 'projectDiv'
  leftBar.appendChild(projectDiv)

  const newProject = document.createElement('span')
  newProject.textContent = 'Add a new project'
  newProject.className = 'newProject'
  newProject.id = 'newProject'
  projectDiv.appendChild(newProject)

  // Span tag for my project projectList
  const myProjects = document.createElement('span')
  myProjects.className = 'myProjects'
  myProjects.textContent = 'My Projects'
  projectDiv.appendChild(myProjects)

  const list = []

  const items = { // Retrieving the local Storage everytime the page is loaded
    ...localStorage
  }

  for (let i = 0; i < localStorage.length; i++) {
    const item = JSON.parse(items[Object.keys(items)[i]]) // We store each object in localStorage in an array
    list.push(item)
  }

  for (let i = 0; i < list.length; i++) { // Iterating to display our objects
    const projectTitle = document.createElement('span')
    projectTitle.className = 'projectTitle'
    projectTitle.id = list[i].id + '_Title'
    projectTitle.textContent = list[i].title
    projectDiv.appendChild(projectTitle)
  }
}
