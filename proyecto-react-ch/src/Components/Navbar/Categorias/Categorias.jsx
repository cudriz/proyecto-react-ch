import { Link } from "react-router-dom"
export const Categorias = () => {
  return (
     <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <button className="btn btn-dark">Categorias</button>
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={'/category/Camisetas'}>Camisetas</Link></li>
            <li><Link className="dropdown-item" to={'/category/Joggers'}>Joggers</Link></li>
            <li><Link className="dropdown-item" to={'/category/Tenis'}>Calzado</Link></li>
           
          </ul>
    </li>
  )
}