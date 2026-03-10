import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  const [currentView, setCurrentView] = useState("home");
  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={setCurrentView}/>
      <main className="grow">{currentView === "home" ? <ProductList /> : <Cart />}</main>
      <Footer />
    </div>
  );
}
export default App;
