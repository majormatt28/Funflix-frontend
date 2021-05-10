

function MovieItem ({id, image, title, description, release_date}) {
    return (
        <li>
            <div>
                <img src={image} alt={title}/>
                <h3>{title}</h3>
            </div>
        </li>
    )
}

export default MovieItem