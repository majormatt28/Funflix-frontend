

function MovieFilter ({setFilterAllMovie}) {
    
    return (
         <div className="genre-buttons">
            <button onClick={()=> setFilterAllMovie("All")}>All</button>
            <button onClick={()=> setFilterAllMovie("Action")}>Action</button>
            <button onClick={()=> setFilterAllMovie("Adventure")}>Adventure</button>
            <button onClick={()=> setFilterAllMovie("Comedy")}>Comedy</button>
            <button onClick={()=> setFilterAllMovie("Horror")}>Horror</button>                <button onClick={()=> setFilterAllMovie("Romance")}>Romance</button>
            <button onClick={()=> setFilterAllMovie("Thriller")}>Thriller</button>
        </div>
        
    )
}

export default MovieFilter