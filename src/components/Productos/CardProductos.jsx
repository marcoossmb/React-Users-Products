import { Link } from "react-router-dom"

const CardProductos = ({ product }) => {
    return (
        <div key={product.id} className="col-md-3 mb-4 m-3">
            <div className="card producto-card">
                <img src={product.thumbnail} className="card-img-top producto-img img__prod object-fit-cover" alt={product.title} />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <Link to={`/productos/${product.id}`} className="btn btn-primary">Ver Producto</Link>
                </div>
            </div>
        </div>
    )
}

export default CardProductos