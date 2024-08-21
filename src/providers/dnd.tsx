"use client";

import { FC, ReactNode } from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Task } from "@/types/task";
import instance from "@/lib/axios";

const DnDProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async ({
      id,
      values,
    }: {
      id: string;
      values: Partial<Task>;
    }) => {
      const { data } = await instance.put(`/tasks/${id}`, values);
      return data;
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TASK_LIST"],
      });
    },
  });
  const handleDragEnd = (e: DragEndEvent) => {
    const { active, over } = e;
    const taskId = active.id;
    if (over) {
      const completed = Boolean(over.id === "done");
      mutation.mutate({ id: taskId.toString(), values: { completed } });
    }
  };
  return <DndContext onDragEnd={handleDragEnd}>{children}</DndContext>;
};
export default DnDProvider;
