"use client";
import { useQuery } from "@tanstack/react-query";

import instance from "@/lib/axios";
import { Task } from "@/types/task";
import TaskCard from "./task-card";
import { useContext } from "react";
import { ApplicationContext } from "@/providers/application";
import LoadingCard from "./loading-card";

const TaskList = () => {
  const { search } = useContext(ApplicationContext);
  const { data, isFetching } = useQuery<Task[]>({
    queryKey: ["TASK_LIST", search],
    queryFn: async () => {
      const res = await instance.get(`/tasks`, {
        params: {
          ...(search && { search }),
        },
      });
      return res.data;
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
      {isFetching
        ? new Array(6).fill(0).map((_, idx) => <LoadingCard key={idx} />)
        : data?.map((task) => <TaskCard key={task._id} task={task} />)}
    </div>
  );
};
export default TaskList;
