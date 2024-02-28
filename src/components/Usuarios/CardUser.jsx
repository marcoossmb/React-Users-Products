import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
function CardUser({ user }) {

    return (

        <div className="card card-body m-4 rounded border border-secondary col-12">
            <Link to={`/usuarios/${user.id}`} className="text-decoration-none">
                <div className="d-flex">
                    <div>
                        <img className="w-75" src={user.image}></img>
                    </div>
                    <div>
                        <p className="text-primary">{user.firstName} {user.lastName}</p>
                        <p className="text-dark">{user.maidenName}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CardUser