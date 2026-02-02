export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-light mb-4">404</h1>
        <p className="text-lg text-neutral-600 mb-8">Page not found</p>
        <a
          href="/"
          className="inline-block border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300"
        >
          GO HOME
        </a>
      </div>
    </div>
  );
}
