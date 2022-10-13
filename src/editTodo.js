import { v4 as uuidv4 } from 'uuid'

export default function Todo (title, description, status) {
  this.title = title
  this.id = uuidv4()
  this.description = description
  this.status = status
}
