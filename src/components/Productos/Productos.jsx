import React from 'react'
import { useProducts } from '../../services/hooks/useProducts'
import './Productos.css';
import CardProductos from './CardProductos';

const Productos = () => {
  const products = useProducts();

  return (
    <div className="container d-flex justify-content-center mt-5 p-3 rounded flex-wrap">
        {products ? (
          products.map(product => (
            <CardProductos key={product.id} product={product}></CardProductos>
          ))
        ) : (
          <p>Loading...</p>
        )}
    </div>
  )
}

export default Productos
