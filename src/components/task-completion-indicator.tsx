import { cn } from "@/lib/utils";
import { FC } from "react";
import { Icons } from "./icons";

type CompletionIndicatorProps = { complete: boolean };
const CompletionIndicator: FC<CompletionIndicatorProps> = ({ complete }) => {
  return (
    <span
      className={cn(
        "grid place-items-center w-5 h-5 bg-green-500 rounded-lg text-primary",
        {
          "bg-yellow-400": !complete,
        }
      )}
    >
      {complete ? (
        <Icons.check className="w-4 h-4" />
      ) : (
        <Icons.clock className="w-4 h-4" />
      )}
    </span>
  );
};
export default CompletionIndicator;
