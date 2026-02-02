export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-light mb-4">Product not found</h1>
        <p className="text-sm text-neutral-600 mb-8">
          This doll doesn't exist in our collection
        </p>
        <a
          href="/shop"
          className="inline-block border border-black px-6 py-3 text-sm hover:bg-black hover:text-white transition-all duration-300"
        >
          BROWSE SHOP
        </a>
      </div>
    </div>
  );
}
