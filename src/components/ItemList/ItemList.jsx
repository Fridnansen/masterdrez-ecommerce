import Item from "../Item/Item";

export const PRODUCTS = [
  { id: "jm-001", title: "Juego de Mesa", price: 65000, category: "Físico", description: "Tablero de Masterdrez, incluye set de piezas para 4 jugadores.", image: "https://fridnansen.github.io/masterweb/img/Juego.jpg" },
  { id: "rl-002", title: "Reloj del Masterdrez", price: 120000, category: "Físico", description: "Reloj digital con control de tiempos para 4 jugadores.", image: "https://fridnansen.github.io/masterweb/img/Relojes.jpg" },
  { id: "rm-003", title: "Reglas, Manual y Libros", price: 15000, category: "Físico", description: "Compendio impreso con historia, reglas manueles y tacticas.", image: "https://fridnansen.github.io/masterweb/img/Libros.jpg" },
  { id: "vj-004", title: "Videojuego 3D (App)", price: 20000, category: "Virtual", description: "Software del videojuego Masterdrez 3D para PC, incluye instalador.", image: "https://fridnansen.github.io/masterweb/img/Videojuego.jpg" },
  { id: "cv-005", title: "Curso Masterdrez Online", price: 25000, category: "Virtual", description: "Curso online con lecciones en vídeo y tácticas.", image: "https://fridnansen.github.io/masterweb/img/Curso.jpg" },
  { id: "mp-006", title: "Libros en PDF", price: 10000, category: "Virtual", description: "Paquete digital con manuales y estrategias en PDF.", image: "https://fridnansen.github.io/masterweb/img/Virtuales.jpg" },
];

export default function ItemList() {
  return (
    <div className="row">
      {PRODUCTS.map((p) => (
        <div className="col-sm-6 col-md-4 mb-4 justify-content-between" key={p.id}>
          <Item product={p} />
        </div>
      ))}
    </div>
  );
}
