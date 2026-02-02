type ErrorStateProps = {
  title?: string;
  message?: string;
};

function ErrorState({
  title = "Something went wrong",
  message = "An unexpected error occurred. Please try again in a moment.",
}: ErrorStateProps) {
  return (
    <div className="bg-card space-y-4 rounded-[15px] p-12 text-center shadow-[0_16px_30px_-10px_#4660BB33] dark:shadow-none">
      <p className="text-preset-2 text-card">{title}</p>

      <p className="text-preset-6 text-muted-foreground dark:opacity-75">
        {message}
      </p>
    </div>
  );
}

export default ErrorState;
