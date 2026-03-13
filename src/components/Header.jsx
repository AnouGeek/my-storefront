export default function Header({ onNavigate, cart }) {
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between">
      <button
        onClick={() => onNavigate("home")}
        className="mr-3 cursor-pointer"
      >
        Shop
      </button>
      <button onClick={() => onNavigate("cart")} className="cursor-pointer">
        Cart ({totalItems})
      </button>
    </header>
  );
}
