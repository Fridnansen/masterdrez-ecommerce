import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import Login from "./components/Login/Login";
import AddProduct from "./components/AddProduct/AddProduct";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { CartProvider } from "./components/context/CartContext";
import { AuthProvider } from "./components/context/AuthContext";
import "./styles/style.css";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter basename="/masterweb">
          <Nav />
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<ItemList />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/add-product"
                element={
                  <ProtectedRoute>
                    <AddProduct />
                  </ProtectedRoute>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<h3>Página no encontrada</h3>} />
            </Routes>
          </div>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

