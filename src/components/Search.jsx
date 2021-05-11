
function Search({searchMovie, setSearchMovie}){
    
    const handleSearch =(e)=> setSearchMovie(e.target.value)

    return (
        <div className = "Search">
            <input type = "text"
                name="search"
                placeholder="Search"
                value={searchMovie}
                onChange={handleSearch}/>
        </div>
    )   
}

export default Search;