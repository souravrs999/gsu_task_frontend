import TaskKanban from "@/components/task-kanban";

export default function Dashboard() {
  return (
    <div
      className="flex flex-col p-2 overflow-y-auto"
      style={{ height: "calc(100vh - 90px)" }}
    >
      <TaskKanban />
    </div>
  );
}
