export default function Loading() {
  return (
    <div className="px-4 md:px-10 py-12 md:py-16">
      <div className="mb-12">
        <div className="h-10 w-48 bg-neutral-200 animate-pulse mb-3" />
        <div className="h-4 w-32 bg-neutral-200 animate-pulse" />
      </div>

      <div className="flex gap-3 mb-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-10 w-20 bg-neutral-200 animate-pulse" />
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {[...Array(8)].map((_, i) => (
          <div key={i}>
            <div className="aspect-square bg-neutral-200 animate-pulse mb-3" />
            <div className="h-4 w-20 bg-neutral-200 animate-pulse mb-2" />
            <div className="h-4 w-12 bg-neutral-200 animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
