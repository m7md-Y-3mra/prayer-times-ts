export const Spinner = () => {
  return (
    <div
      className="h-8 w-8 text-primary animate-spin rounded-full border-4 border-solid border-current border-t-transparent"
      role="status"
      aria-label="Loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};