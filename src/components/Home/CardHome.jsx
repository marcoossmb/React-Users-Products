import { Link } from "react-router-dom";
import "./CardHome.css"

const CardHome = ({ imagePath, title, linkTo }) => {
    return (
        <div className="border border-secondary p-2 col-3 rounded">
            <Link to={linkTo}>
                <img className='w-100 img object-fit-cover' src={imagePath} alt={title} />
            </Link>
            <p className="fs-4 text-dark text-center">{title}</p>
        </div>
    );
}

export default CardHome