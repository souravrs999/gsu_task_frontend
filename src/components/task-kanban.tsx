"use client";
import { useQuery } from "@tanstack/react-query";

import instance from "@/lib/axios";
import { Task } from "@/types/task";
import StatusBlock from "./status-blocks";
import { useContext } from "react";
import { ApplicationContext } from "@/providers/application";

const TaskKanban = () => {
  const { search } = useContext(ApplicationContext);
  const { data, isFetching } = useQuery<Task[]>({
    queryKey: ["TASK_LIST", search],
    queryFn: async () => {
      const res = await instance.get("/tasks", {
        params: {
          ...(search && { search }),
        },
      });
      return res.data;
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      <StatusBlock
        id="to-do"
        title="To Do"
        titleColor="bg-yellow-200"
        containerColor="bg-yellow-50"
        tasks={data?.filter((task) => !task.completed) || []}
      />

      <StatusBlock
        id="done"
        title="Done"
        titleColor="bg-green-200"
        containerColor="bg-green-50"
        tasks={data?.filter((task) => task.completed) || []}
      />
    </div>
  );
};
export default TaskKanban;
