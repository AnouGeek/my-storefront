export default function Cart({ cart }) {
  const total = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0,
  );

  return (
    <div className="mt-10 p-4 max-w-3xl mx-auto">
      {cart.length === 0
        ? "Your cart is empty"
        : cart.map((product) => (
            <div
              className="flex items-center border-b py-4 gap-4"
              key={product.id}
            >
              <img
                className="h-12 w-12 object-contain shrink-0"
                src={product.image}
              ></img>
              <span className="flex-1 font-semibold truncate">
                {product.title}
              </span>
              <span className="text-green-500 w-12">x{product.quantity}</span>
              <span className="whitespace-nowrap font-bold w-16">
                {product.price} €
              </span>
            </div>
          ))}
      <div className="mt-8 border w-fit p-2 ml-auto rounded-2xl bg-blue-300">
        {total.toFixed(2)} €
      </div>
    </div>
  );
}
