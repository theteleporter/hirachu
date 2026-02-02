"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-light mb-4">Something went wrong</h1>
        <p className="text-sm text-neutral-600 mb-8">
          {error.message || "An unexpected error occurred"}
        </p>
        <button
          type="button"
          onClick={reset}
          className="border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300"
        >
          TRY AGAIN
        </button>
      </div>
    </div>
  );
}
