function EmptyState() {
  return (
    <div className="bg-card space-y-4 rounded-[15px] p-12 text-center shadow-[0_16px_30px_-10px_#4660BB33] dark:shadow-none">
      <p className="text-preset-2 text-card-foreground">No results found!</p>
      <p className="text-preset-6 text-muted-foreground dark:opacity-75">
        We couldn't find any GitHub users matching your search. Please
        double-check the username and try again.
      </p>
    </div>
  );
}

export default EmptyState;
