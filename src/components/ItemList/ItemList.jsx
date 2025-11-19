import { useState, useEffect } from "react";
import Item from "../Item/Item";
import { getProducts } from "../../services/products";

export default function ItemList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div className="text-center">Cargando productos...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return (
    <div className="row">
      {products.map((p) => (
        <div className="col-sm-6 col-md-4 mb-4 justify-content-between" key={p.id}>
          <Item product={p} />
        </div>
      ))}
    </div>
  );
}
