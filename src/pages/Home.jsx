import { useCallback, useState } from "react";
import CreateTask from "../components/CreateTask";
import Filter from "../components/Filter";
import TaskList from "../components/TaskList";
import "./home.css";
function Home() {
  const [index, setIndex] = useState(1);
  const [toDoList, setToDoList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  const createNewTask = (event) => {
    toDoList.push({
      id: index,
      taskName: event,
      status: 2,
      isActive: false,
    });
    filteredList.push({
      id: index,
      taskName: event,
      status: 2,
      isActive: false,
    });
    setIndex(index + 1);
  };
  const handleSearch = (event) => {
    let newObj = [];
    newObj = toDoList.filter(
      (item) =>
        (!event.isActive ? true : item.isActive) &&
        (event.status == 1 ? true : event.status == item.status) &&
        (!event.name ? true : item.taskName.includes(event.name))
    );
    setFilteredList(newObj);
  };
  return (
    <div className="home-page">
      <div className="text-header">Project 2 DatPT25</div>
      <div className="todo-wrapper">
        <div className="todo-left">
          <CreateTask onCreateNewTask={createNewTask} />
          <Filter handleSearch={handleSearch} />
        </div>
        <div className="todo-right">
          <TaskList
            toDoList={toDoList}
            setToDoList={setToDoList}
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
