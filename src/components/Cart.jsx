export default function Cart({ cart }) {
  const total = cart.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0,
  );

  return (
    <div className="p-4">
      {cart.length === 0
        ? "Your cart is empty"
        : cart.map((product) => (
            <div
              className="flex items-center border-b py-4 justify-between"
              key={product.id}
            >
              <img
                className="h-12 w-12 object-contain"
                src={product.image}
              ></img>
              <span>{product.title}</span>
              <span>{product.price}</span>
            </div>
          ))}
      {total.toFixed(2)}
    </div>
  );
}
