import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function ItemDetail({ product }) {
  const { addToCart } = useCart();

  if (!product) return <div className="alert alert-warning">Producto no encontrado</div>;

  return (
    <div className="card p-3">
      <div className="row g-3">
        <div className="col-md-5">
          <img src={product.image} className="img-fluid rounded" alt={product.title} />
        </div>
        <div className="col-md-7">
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <h4 className="text-info">${product.price.toLocaleString("es-AR")}</h4>
          <button className="btn btn-primary me-2" onClick={() => addToCart(product)}>Agregar al carrito</button>
          <Link className="btn btn-secondary" to="/">Volver</Link>
        </div>
      </div>
    </div>
  );
}
