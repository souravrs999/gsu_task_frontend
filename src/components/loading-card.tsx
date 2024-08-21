import { Skeleton } from "./ui/skeleton";

const LoadingCard = () => {
  return (
    <div
      className={`w-full h-fit flex flex-col p-4 rounded-xl text-primary bg-background border`}
    >
      <div className="flex flex-col gap-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-full" />
      </div>
      <div className="flex items-center justify-between w-full mt-4">
        <Skeleton className="w-5 h-5" />
        <div className="flex items-center gap-2">
          <Skeleton className="w-8 h-8 rounded-full" />
          <Skeleton className="w-8 h-8 rounded-full" />
        </div>
      </div>
    </div>
  );
};
export default LoadingCard;
