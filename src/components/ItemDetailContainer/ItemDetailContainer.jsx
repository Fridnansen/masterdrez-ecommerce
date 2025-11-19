import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState, useEffect } from "react";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://691bee953aaeed735c8ecb96.mockapi.io/products/${id}`);
        if (!response.ok) throw new Error("Producto no encontrado");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="text-center">Cargando producto...</div>;
  if (error) return <div className="alert alert-danger">Error: {error}</div>;

  return <ItemDetail product={product} />;
}
