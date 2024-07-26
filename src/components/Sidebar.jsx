import { useState } from "react";
import "./Sidebar.css";
import { CATEGORY_ITEMS } from "../constants";

function Sidebar(props) {
  const data = props.todoItem;
  console.log({ data });

  const [name, setName] = useState(data.name);
  const [isImportant, setIsImportant] = useState(data.isImportant);
  const [isCompleted, setIsCompleted] = useState(data.isCompleted);
  const [category, setCategory] = useState(data.category);

  const handleSave = () => {
    const newTodo = { ...data, name, isImportant, isCompleted, category };
    props.handleTodoItemChange(newTodo);
    props.setShowSidebar(false);
  };

  return (
    <div className="sidebar">
      <form className="sb-form">
        <div className="sb-form-field">
          <label htmlFor="sb-name">Todo Name</label>
          <input
            id="sb-name"
            name="sb-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-important">Is Important?</label>
          <input
            id="sb-important"
            name="isImportant"
            type="checkbox"
            checked={isImportant}
            onChange={() => setIsImportant(!isImportant)}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-complete">Is Completed?</label>
          <input
            id="sb-complete"
            name="isCompleted"
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />
        </div>
        <div className="sb-form-field">
          <label htmlFor="sb-category">Category</label>
          <select id="sb-category" value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORY_ITEMS.map((category) => {
              return (
                <option value={category.id} key={category.id}>
                  {category.label}
                </option>
              );
            })}
          </select>
        </div>
      </form>
      <div className="sb-footer">
        <button onClick={handleSave}>Save</button>
        <button onClick={() => props.setShowSidebar(false)}>Cancel</button>
      </div>
    </div>
  );
}

export default Sidebar;
