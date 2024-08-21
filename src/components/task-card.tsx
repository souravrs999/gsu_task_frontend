import { FC, memo, useMemo } from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import { Task } from "@/types/task";
import UpdateTask from "./update-task";
import DeleteTask from "./delete-task";
import { generateColor } from "@/lib/utils";
import CompletionIndicator from "./task-completion-indicator";

type TaskCardProps = { draggable?: boolean; task: Task };
const TaskCard: FC<TaskCardProps> = ({ task, draggable = false }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id,
  });
  const color = useMemo(() => generateColor(task._id), []);

  return (
    <div
      ref={setNodeRef}
      className={`w-full h-fit flex flex-col p-4 rounded-xl text-primary ${color}`}
      {...(draggable && {
        ...listeners,
        ...attributes,
      })}
      style={{
        transform: CSS.Translate.toString(transform),
      }}
    >
      <div className="flex flex-col gap-2">
        <h4 className="text-lg font-black">{task.title}</h4>
        <p className="text-sm h-30 overflow-hidden text-ellipsis whitespace-normal line-clamp-3">
          {task.description}
        </p>
      </div>
      <div className="flex items-center justify-between w-full mt-4">
        <CompletionIndicator complete={task.completed} />
        <div className="flex items-center gap-2">
          <span onPointerDown={(e) => e.stopPropagation()}>
            <UpdateTask task={task} />
          </span>
          <span onPointerDown={(e) => e.stopPropagation()}>
            <DeleteTask task={task} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default memo(TaskCard);
