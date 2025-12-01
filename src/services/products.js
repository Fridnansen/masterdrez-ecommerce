const BASE_URL = 'https://691bee953aaeed735c8ecb96.mockapi.io/products';

export const getProducts = async (category = null) => {
  const url = category ? `${BASE_URL}?category=${category}` : BASE_URL;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("No se pudieron obtener los productos");
  }
  const result = await res.json();
  return result;
};

export const createProduct = async (product) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    throw new Error("No se pudo crear el producto");
  }

  const result = await res.json();
  return result;
};
