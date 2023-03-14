import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
export const Cart = () => {
    const carrito =  [ { id: 1, idCategoria: "Camisetas", nombre: "Camiseta", marca: "gef",precio: 30000,cant: 24,img: "camiseta.webp"}, { id: 1, idCategoria: "Camisetas", nombre: "Camiseta", marca: "gef",precio: 30000,cant: 32,img: "camiseta.webp"}, { id: 1, idCategoria: "Camisetas", nombre: "Camiseta", marca: "gef",precio: 30000,cant: 13,img: "camiseta.webp"}]
  
  return (
    <>
      {
        carrito.length === 0
        ? //Si no existen productos en el carrito
          <>
              <h2>Carrito vacio</h2>
              <Link className="nav-link" to={"/"}><button className="btn btn-primary">Continuar comprando</button></Link>
          </>
        : //Si existen productos en el carito
          <div className="container cartContainer">
              <ItemList prods={carrito} plantilla="ItemCart"/>
              <div className="divButtons">
                <p>Resumen de la compra: PrecioTotal</p>
                <button className="btn btn-danger" onClick={() => console.log("Productos eliminados")}>Vaciar Carrito</button>
                <Link className="nav-link" to={"/"}><button className="btn btn-dark">Continuar comprando</button></Link>
                <Link className="nav-link" to={"/checkout"}><button className="btn btn-dark">Finalizar Compra</button></Link>
              </div>
          </div>
      }
    
    </>
  )

}
