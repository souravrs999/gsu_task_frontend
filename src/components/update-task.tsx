"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import { Icons } from "./icons";
import { Task } from "@/types/task";
import instance from "@/lib/axios";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { updateSchema, UpdateSchema } from "@/lib/validations/task";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { FC, useState } from "react";

type UpdateTaskProps = {
  task: Task;
};
const UpdateTask: FC<UpdateTaskProps> = ({ task }) => {
  const [open, setOpen] = useState<boolean>(false);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (values: Partial<Task>) => {
      const { data } = await instance.put(`/tasks/${task._id}`, values);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["TASK_LIST"],
      });
    },
  });

  const form = useForm<UpdateSchema>({
    resolver: zodResolver(updateSchema),
    defaultValues: {
      title: task.title,
      description: task.description,
      completed: task.completed,
    },
  });

  function onSubmit(values: UpdateSchema) {
    if (task._id) {
      mutation.mutate(values);
    }
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          data-testid="edit-task-btn"
          size="icon"
          className="rounded-full w-8 h-8"
        >
          <Icons.pen className="w-4 h-4 fill-primary-foreground" />
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-sm">
        <DialogHeader>
          <DialogTitle>Update Task</DialogTitle>
          <DialogDescription>
            Update or modify your task details.
          </DialogDescription>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="My task" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input placeholder="My task description..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="completed"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                    <div className="space-y-1 leading-none">
                      <FormLabel>Mark this task as complete.</FormLabel>
                    </div>
                  </FormItem>
                )}
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline" className="w-full">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit" className="w-full">
                  Update
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default UpdateTask;
