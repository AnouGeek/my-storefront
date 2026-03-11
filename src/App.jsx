import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [currentView, setCurrentView] = useState("home");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={setCurrentView} cart={cart} />
      <main className="grow">
        {currentView === "home" ? (
          <ProductList addToCart={addToCart} />
        ) : (
          <Cart />
        )}
      </main>
      <Footer />
    </div>
  );
}
export default App;
