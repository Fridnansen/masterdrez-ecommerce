import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, clearCart } = useCart();
  const total = cart.reduce((s, it) => s + it.price, 0);
  return (
    <div>
      <h2>Carrito de compras</h2>
      {cart.length === 0 ? (
        <div className="alert alert-secondary">El carrito está vacío.</div>
      ) : (
        <div>
          <ul className="list-group mb-3">
            {cart.map((it, idx) => (
              <li key={idx} className="list-group-item d-flex justify-content-between">
                <span>{it.title}</span>
                <span>${it.price.toLocaleString("es-AR")}</span>
              </li>
            ))}
          </ul>
          <h5>Total: ${total.toLocaleString("es-AR")}</h5>
          <button className="btn btn-danger me-2" onClick={clearCart}>Vaciar</button>
          <button className="btn btn-success" onClick={() => alert("Simulación de pago completada")}>
            Pagar
          </button>
        </div>
      )}
    </div>
  );
}
