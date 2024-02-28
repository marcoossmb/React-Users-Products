import React from 'react'
import { Link } from 'react-router-dom'

const CardProuctoDetail = ({ detalleProduct }) => {
    return (
        <div className='w-50 d-flex flex-column justify-content-center text-center'>
            <h2 className='text-primary'>{detalleProduct.title}</h2>
            <p>{detalleProduct.description}</p>
            <div className="image-container d-flex justify-content-center align-items-center">
                <img className='w-75' src={detalleProduct.thumbnail} alt={detalleProduct.title} />
            </div>
            <div className='d-flex justify-content-between mt-3'>
                <p>Price: {detalleProduct.price}€</p>
                <p>Stock: {detalleProduct.stock}</p>
                <p>Discount: {detalleProduct.discountPercentage}%</p>
            </div>
            <Link to="/productos" className='btn btn-primary w-100'>Volver</Link>
        </div>
    )
}

export default CardProuctoDetail