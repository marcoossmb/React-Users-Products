import React from 'react'
import { useParams } from 'react-router-dom'
import { useProductDetail } from '../../services/hooks/useProductDetail'
import CardProuctoDetail from './CardProuctoDetail'

const ProductosDetail = () => {

    const params = useParams()
    const detalleProduct = useProductDetail(params.id)

    return (
        <div className='container d-flex justify-content-center align-items-center'>
            {detalleProduct ? (
                <CardProuctoDetail detalleProduct={detalleProduct}></CardProuctoDetail>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default ProductosDetail