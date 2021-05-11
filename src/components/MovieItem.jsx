

function MovieItem ({id, image, title, description, release_date}) {
    return (
        <li className="card">
            <img src={image} alt={title}/>
            <h3>{title}</h3>
        </li>
    )
}

export default MovieItem