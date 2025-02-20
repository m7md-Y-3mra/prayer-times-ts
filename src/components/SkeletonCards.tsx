import { Skeleton } from "@/components/ui/skeleton";

function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3 flex-1">
      <Skeleton className="h-[120px] w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 " />
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

export function SkeletonCards({ count }: { count: number }) {
  const skeletonCards = Array.from({ length: count }, (_, i) => <SkeletonCard key={i} />);
  return (
    <div className="center-flex-row gap-2 md:gap-3 py-4">
      {skeletonCards}
    </div>
  )
}
