"use client";
import { FC } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Task } from "@/types/task";
import instance from "@/lib/axios";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogTitle,
} from "./ui/alert-dialog";

type DeleteTaskProps = {
  task: Task;
};
const DeleteTask: FC<DeleteTaskProps> = ({ task }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async () => {
      const { data } = await instance.delete(`/tasks/${task._id}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TASK_LIST"],
      });
    },
  });

  const handleDelete = () => {
    if (task._id) {
      mutation.mutate();
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button size="icon" className="rounded-full w-8 h-8 hover:bg-red-500">
          <Icons.trash className="w-4 h-4 fill-primary-foreground" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete task?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently remove this task
            from your list.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteTask;
