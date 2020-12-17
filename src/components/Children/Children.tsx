import React from "react";
import ShowMore from "./ShowMore/ShowMore";
import TasksList from "./TasksList/TasksList";
import Text from "./Text/Text";

const TEXT = `
    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but
    also the leap into electronic typesetting, remaining essentially
    unchanged. It was popularised in the 1960s with the release of Letraset
    sheets containing Lorem Ipsum passages, and more recently with desktop
    publishing software like Aldus PageMaker including versions of Lorem
    Ipsum.
  `;

const TASKS = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 6", "Task 7", "Task 8"];

// We could have used specialization (ShowMoreText and ShowMoreList) here also, but that suffers from props drilling

const Children = () => {
  return (
    <div>
      <h1>Children</h1>
      <div>
        <ShowMore>
          <Text text={TEXT} />
        </ShowMore>
        <ShowMore>
          <TasksList tasks={TASKS} />
        </ShowMore>
      </div>
    </div>
  );
};

export default Children;
