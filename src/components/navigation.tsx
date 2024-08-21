import Link from "next/link";

import AddTask from "./add-task";
import Preferences from "./preferences";
import Sidebar from "./ui/sidebar";
import UserProfile from "./user-profile";
import { Icons } from "./icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Navigation = () => {
  return (
    <div>
      <Sidebar className="w-full flex md:flex-col gap-8 justify-between md:w-20 md:h-screen">
        <UserProfile />
        <div className="flex-1 flex flex-row md:flex-col justify-center md:justify-start items-center gap-8">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard"
                  className="grid place-items-center hover:bg-gray-100 w-12 h-12 rounded-full"
                >
                  <Icons.list />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/dashboard/kanban"
                  className="grid place-items-center hover:bg-gray-100 w-12 h-12 rounded-full"
                >
                  <Icons.kanban />
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Kanban</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <AddTask />
        </div>
        <Preferences />
      </Sidebar>
    </div>
  );
};
export default Navigation;
