import { Icons } from "@/components/icons";
import TaskList from "@/components/task-list";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-2 p-2 overflow-y-auto">
      <h3 className="inline-flex items-center gap-2 bg-purple-100 w-fit py-1 px-4 text-lg font-black rounded">
        <Icons.list className="w-5 h-5" />
        List
      </h3>
      <TaskList />
    </div>
  );
};
export default Dashboard;
