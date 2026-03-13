import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existItem = cart.find((item) => item.id === product.id);

    if (existItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const decreaseQuantity = (product) => {
    if (product.quantity === 1) {
      removeFromCart(product);
      return;
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={setCurrentView} cart={cart} />
      <main className="grow">
        {currentView === "home" ? (
          <ProductList addToCart={addToCart} />
        ) : (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            decreaseQuantity={decreaseQuantity}
            addToCart={addToCart}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;
