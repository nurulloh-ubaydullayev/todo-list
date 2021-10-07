import "./Todo.scss";

function Todo({ row, id, title, removeTodo, completeTodo }) {
  return (
    <li className="todo-item">
      <div className="todo__input-wrapper">
        <label className="label">
          <input
            defaultChecked={row.isCompleted}
            className="todo__checkbox "
            type="checkbox"
            data-id={id}
            onChange={(evt) => completeTodo(evt)}
          />
          <span></span>
          <i className="indicator"></i>
        </label>

        <span
          className="todo__span"
          style={{ textDecoration: row.isCompleted ? "line-through" : "none" }}
        >
          {title}
        </span>
      </div>

      <button
        className="todo__delete-btn"
        data-id={id}
        onClick={(evt) => removeTodo(evt)}
      >
        delete
      </button>
    </li>
  );
}

export default Todo;
