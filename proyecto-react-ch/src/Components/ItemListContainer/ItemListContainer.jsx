import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getProductos } from '../../utils/firebase.js'
import { ItemList } from '../ItemList/ItemList.jsx'

export const ItemListContainer = () => {
  const {idCategoria} = useParams()
  const [productos, setProductos] = useState([])

  useEffect(() => {
    if(idCategoria) {
      getProductos().then(products => {
        const prods = products.filter(prod => prod.idCategoria ===(idCategoria))
        const items = ItemList({prods})
        setProductos(items)
      })
    } else {
      getProductos().then(prods => {
        const items = <ItemList prods={prods} plantilla="Item"/>
        setProductos(items)
      })
    }
  }, [idCategoria])

  return (
    <div className='row cardProductos'>
        {productos}
    </div>
  )
}