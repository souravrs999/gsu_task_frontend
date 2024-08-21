"use client";
import { cn } from "@/lib/utils";
import { createContext, FC, forwardRef, HTMLAttributes, Ref } from "react";

const SidebarContext = createContext({});

type SidebarRootProps = HTMLAttributes<HTMLDivElement> & {};
const SidebarRoot: FC<SidebarRootProps> = forwardRef(
  (props: SidebarRootProps, ref: Ref<HTMLDivElement>) => {
    const { children, className, ...rest } = props;
    return (
      <div
        ref={ref}
        className={cn(
          "bg-background p-4 shrink-0 text-foreground border-t md:border-r",
          className
        )}
        {...rest}
      >
        <SidebarContext.Provider value={{}}>{children}</SidebarContext.Provider>
      </div>
    );
  }
);
SidebarRoot.displayName = "Sidebar";

const Sidebar = Object.assign(SidebarRoot, {});
export default Sidebar;
