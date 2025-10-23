import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./components/context/CartContext";
import "./styles/style.css";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter basename="/masterweb">
        <Nav />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<ItemList />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h3>Página no encontrada</h3>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

