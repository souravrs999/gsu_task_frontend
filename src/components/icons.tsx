import {
  Check,
  Clock,
  Kanban,
  List,
  LogOut,
  Pen,
  Plus,
  Search,
  Trash,
  X,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
  plus: Plus,
  search: Search,
  pen: Pen,
  trash: Trash,
  logout: LogOut,
  kanban: Kanban,
  list: List,
  x: X,
  clock: Clock,
  check: Check,
};
