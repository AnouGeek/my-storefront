import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
      {isLoading && <div>Loading products...</div>}
      {error && <div>{error}</div>}
      <h2>ProductList</h2>
    </div>
  );
}
