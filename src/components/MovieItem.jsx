import {Link} from "react-router-dom"
function MovieItem ({id, image, title, description, release_date}) {
    return (
    
        <li>
            <div>
                <img src={image} alt={title}/>
                <Link to={`/movies/${id}`}><h3>{title}</h3></Link>
                
            </div>
        </li>
       
    )
}

export default MovieItem