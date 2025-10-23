import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Item({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="card-img-top img-thumb"
        />
      </Link>
      <div className="card-body d-flex flex-column">
        <h5>{product.title}</h5>
        <p>{product.description}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="price">${product.price.toLocaleString("es-AR")}</span>
          <button className="btn btn-primary btn-sm" onClick={() => addToCart(product)}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}
