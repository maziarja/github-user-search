import Skeleton from "react-loading-skeleton";

function HeaderSkeleton() {
  return (
    <header className="flex items-center justify-between">
      <Skeleton width={150} height={26} />
      <Skeleton width={80} height={20} />
    </header>
  );
}

export default HeaderSkeleton;
