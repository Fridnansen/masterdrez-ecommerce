import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { PRODUCTS } from "../ItemList/ItemList";

export default function ItemDetailContainer() {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === id);
  return <ItemDetail product={product} />;
}
