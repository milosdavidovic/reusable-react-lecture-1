import React from "react";

interface Props {
  tasks: string[];
}

const TasksList: React.FC<Props> = ({ tasks }) => {
  const renderTasks = () => {
    return tasks.map((task) => <li key={task}>{task}</li>);
  };

  return (
    <div>
      <ul>{renderTasks()}</ul>
    </div>
  );
};

export default TasksList;
