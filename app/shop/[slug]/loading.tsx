export default function Loading() {
  return (
    <main className="animate-pulse">
      <div className="px-4 md:px-10 py-6 border-b">
        <div className="h-4 w-64 bg-neutral-100" />
      </div>

      <div className="px-4 md:px-10 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div className="aspect-square bg-neutral-100" />
          
          <div className="space-y-6">
            <div className="h-6 w-24 bg-neutral-100" />
            <div className="h-10 w-40 bg-neutral-100" />
            <div className="h-8 w-24 bg-neutral-100" />
            <div className="space-y-2">
              <div className="h-4 w-full bg-neutral-100" />
              <div className="h-4 w-full bg-neutral-100" />
              <div className="h-4 w-3/4 bg-neutral-100" />
            </div>
            <div className="h-12 w-full bg-neutral-100" />
            <div className="h-12 w-full bg-neutral-100" />
          </div>
        </div>
      </div>
    </main>
  );
}
