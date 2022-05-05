import TaskItem from "./TaskItem";

function TaskList(props) {
    console.log(props.filteredList,99);
  const onChangeActive = (event, id) => {
    let newArrToDoList = [...props.toDoList];
    const indexToDoList = newArrToDoList.findIndex((item) => item.id === id);
    newArrToDoList[indexToDoList].isActive = event.target.checked;
    props.setToDoList(newArrToDoList);

    let newArrFilteredList = [...props.filteredList];
    const indexFilteredList = newArrFilteredList.findIndex(
      (item) => item.id === id
    );
    newArrFilteredList[indexFilteredList].isActive = event.target.checked;
    props.setFilteredList(newArrFilteredList);
  };
  const onChangeStatus = (event, id) => {
    let newArrToDoList = [...props.toDoList];
    const indexToDoList = newArrToDoList.findIndex((item) => item.id === id);
    newArrToDoList[indexToDoList].status = Number(event.target.value);
    props.setToDoList(newArrToDoList);

    let newArrFilteredList = [...props.filteredList];
    const indexFilteredList = newArrFilteredList.findIndex(
      (item) => item.id === id
    );
    newArrFilteredList[indexFilteredList].status = Number(event.target.value);
    props.setFilteredList(newArrFilteredList);
  };
  const onClickDelete = (id) => {
    let newArrToDoList = [...props.toDoList];
    const indexToDoList = newArrToDoList.findIndex((item) => item.id === id);
    newArrToDoList.splice(indexToDoList, 1);
    props.setToDoList(newArrToDoList);

    let newArrFilteredList = [...props.filteredList];
    const indexFilteredList = newArrFilteredList.findIndex(
      (item) => item.id === id
    );
    newArrFilteredList.splice(indexFilteredList, 1);
    props.setFilteredList(newArrFilteredList);
  };

  return (
    <>
      <div className="text-title">ToDo List</div>
      <div>
        {props.filteredList &&
          props.filteredList.map((taskItem) => {
            return (
              <TaskItem
                key={taskItem.id}
                taskItem={taskItem}
                onChangeActive={onChangeActive}
                onChangeStatus={onChangeStatus}
                onClickDelete={onClickDelete}
              />
            );
          })}
      </div>
    </>
  );
}

export default TaskList;
