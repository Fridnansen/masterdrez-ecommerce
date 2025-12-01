import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

export default function ItemListContainer() {
  const { category } = useParams();

  return (
    <div>
      <h1>{category ? `Productos de ${category}` : "Todos los productos"}</h1>
      <ItemList category={category} />
    </div>
  );
}
