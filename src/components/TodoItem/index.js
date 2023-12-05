// Write your code here

import './index.css'

const TodoItem = props => {
  const {items, onclick} = props
  const {title, id} = items
  const onDelete = () => {
    onclick(id)
  }
  return (
    <li className="li">
      <div className="todo-text-btn-card">
        <p className="todo-text">{title}</p>
        <div className="btn-card">
          <button className="todo-btn" onClick={onDelete} type="button">
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoItem
