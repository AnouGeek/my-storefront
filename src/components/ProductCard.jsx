export default function ProductCard({ product, addToCart }) {
  return (
    <div className="flex flex-col bg-gray-100 rounded-lg shadow-sm p-4 border">
      <img
        className="h-48 object-contain"
        src={product.image}
        alt={product.title}
      />
      <span className="truncate">{product.title}</span>
      <span>{product.price}</span>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 hover:bg-blue-500 text-gray-50 py-2 rounded-xl mt-auto cursor-pointer"
      >
        Add to cart
      </button>
    </div>
  );
}
