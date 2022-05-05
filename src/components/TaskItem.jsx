import { useState } from "react";
import "./taskItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
function TaskItem(props) {
  const [taskItem, setTaskItem] = useState(props.taskItem);
  const options = [
    { id: 2, label: "Todo" },
    { id: 3, label: "In Progress" },
    { id: 4, label: "Done" },
  ];
  const onChangeActive = (event) => {
    props.onChangeActive(event, taskItem.id);
  };
  const onChangeStatus = (event) => {
    props.onChangeStatus(event, taskItem.id);
  };
  const onClickDelete = () => {
    props.onClickDelete(taskItem.id);
  };
  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="task-item-wrapper">
          <div className="task-item-left">
            <div className="card-title">{taskItem.taskName}</div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={taskItem.isActive ? true : false}
                onChange={onChangeActive}
              />
              <label className="form-check-label">Active</label>
            </div>
          </div>
          <div className="task-item-right">
            <div className="width-dropdown">
              <select
                className="form-control btn-color"
                onChange={onChangeStatus}
                value={taskItem.status}
              >
                {options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="delete-icon">
              <FontAwesomeIcon icon={faTrashAlt} onClick={onClickDelete}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskItem;
