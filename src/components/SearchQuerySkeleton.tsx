import Skeleton from "react-loading-skeleton";

function SearchQuerySkeleton() {
  return (
    <div className="bg-card flex items-center rounded-2xl px-3 py-2 md:pr-3 md:pl-6">
      <Skeleton circle width={24} height={24} />
      <div className="ml-3 flex-1">
        <Skeleton height={20} />
      </div>
      <Skeleton width={80} height={44} className="ml-4 rounded-[10px]" />
    </div>
  );
}

export default SearchQuerySkeleton;
