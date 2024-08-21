import { FC } from "react";
import { useDroppable } from "@dnd-kit/core";
import { Task } from "@/types/task";
import TaskCard from "./task-card";

type StatusBlockProps = {
  id: string;
  title: string;
  titleColor: string;
  containerColor: string;
  tasks: Task[];
};
const StatusBlock: FC<StatusBlockProps> = ({
  id,
  title,
  titleColor,
  containerColor,
  tasks,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <div ref={setNodeRef}>
      <h3 className={`w-fit py-1 px-4 font-black ${titleColor} rounded mb-2`}>
        {title}
      </h3>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 w-full h-fit gap-2 ${containerColor} rounded p-2`}
      >
        {tasks.map((task) => (
          <TaskCard key={task._id} draggable task={task} />
        ))}
      </div>
    </div>
  );
};
export default StatusBlock;
