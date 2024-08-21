"use client";
import {
  FC,
  forwardRef,
  HTMLAttributes,
  Ref,
  useContext,
  useEffect,
  useState,
} from "react";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Icons } from "./icons";
import { ApplicationContext } from "@/providers/application";

type HeaderBarProps = HTMLAttributes<HTMLDivElement> & {};
const HeaderBar: FC<HeaderBarProps> = forwardRef(
  (props: HeaderBarProps, ref: Ref<HTMLDivElement>) => {
    const { children, className, ...rest } = props;
    const { setSearch } = useContext(ApplicationContext);

    const [localSearch, setLocalSearch] = useState<string>("");

    useEffect(() => {
      const handler = setTimeout(() => {
        if (setSearch) {
          setSearch(localSearch);
        }
      }, 500);
      return () => {
        clearTimeout(handler);
      };
    }, [localSearch, setSearch]);

    return (
      <div
        ref={ref}
        className={cn("bg-background p-4 shrink-0 text-foreground", className)}
        {...rest}
      >
        <div className="relative w-fit">
          <Icons.search className="absolute w-4 h-4 top-1/2 -translate-y-2/4 left-2 text-muted-foreground" />
          <Input
            placeholder="Search"
            value={localSearch}
            onChange={(e) => setLocalSearch(e.target.value)}
            className="w-full max-w-xs px-8 rounded-lg"
          />
          <Icons.x
            onClick={() => setLocalSearch("")}
            className="absolute w-4 h-4 top-1/2 -translate-y-2/4 right-2 text-muted-foreground"
          />
        </div>
      </div>
    );
  }
);
HeaderBar.displayName = "HeaderBar";
export default HeaderBar;
