import { v4 as uuidv4 } from 'uuid'

export default function Project (title, description, dueDate, priority, status, todo) {
  this.title = title
  this.id = uuidv4()
  this.description = description
  this.dueDate = dueDate
  this.priority = priority
  this.status = status
  this.todo = todo
}
