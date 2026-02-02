import Skeleton from "react-loading-skeleton";

function UserCardSkeleton() {
  return (
    <div className="bg-card shadow- flex flex-col gap-6 rounded-[15px] px-6 py-8 md:grid md:grid-cols-[117px_1fr] md:gap-8 md:px-8 md:py-12">
      {/* Avatar desktop */}
      <div className="hidden md:block">
        <Skeleton circle width={117} height={117} />
      </div>

      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-5">
          <div className="md:hidden">
            <Skeleton circle width={70} height={70} />
          </div>

          <div className="flex w-full flex-col space-y-2 md:flex-row md:justify-between">
            <div className="space-y-1">
              <Skeleton width={160} height={20} />
              <Skeleton width={120} height={16} />
            </div>
            <Skeleton width={140} height={16} />
          </div>
        </div>

        {/* Bio */}
        <Skeleton count={1} />

        {/* Stats */}
        <div className="bg-background mt-6 flex flex-col gap-4 rounded-[10px] px-5 py-4 md:flex-row md:justify-between md:px-8">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="space-y-1">
              <Skeleton width={60} height={14} />
              <Skeleton width={80} height={22} />
            </div>
          ))}
        </div>

        {/* Info grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <Skeleton circle width={20} height={20} />
              <Skeleton width={140} height={16} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCardSkeleton;
