import {useHistory} from "react-router-dom"
function MovieItem ({id, image, title, description, release_date}) {
    
    const history = useHistory()
    const handleClick =()=>history.push(`/movies/${id}`)
    return (
    
        <li>
            <div className ="card" onClick={handleClick}>
                <img src={image} alt={title}/>
                <h3>{title}</h3>
                
            </div>
        
        </li>
       
    )
}

export default MovieItem