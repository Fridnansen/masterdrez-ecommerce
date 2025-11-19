import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Nav() {
  const { cart } = useCart();
  const { isAuthenticated, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="https://fridnansen.github.io/masterweb/img/Logo.ico"
            alt="logo"
            height="36"
          />{" "}
          Masterdrez
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Productos</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contacto</Link></li>
            {isAuthenticated && (
              <li className="nav-item"><Link className="nav-link" to="/add-product">Agregar Producto</Link></li>
            )}
          </ul>
          <div className="d-flex">
            {isAuthenticated ? (
              <>
                <Link className="btn btn-outline-primary me-2" to="/cart">
                  Carrito ({cart.length})
                </Link>
                <button className="btn btn-outline-danger" onClick={logout}>
                  Cerrar Sesión
                </button>
              </>
            ) : (
              <Link className="btn btn-outline-success" to="/login">
                Iniciar Sesión
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
