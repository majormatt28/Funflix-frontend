
function Search({searchMovie, setSearchMovie}){
    
    const handleSearch =(e)=> setSearchMovie(e.target.value)

    return (
        <>
        <div className = "search-bar">
            <input type = "text"
                className="search-bar__input"
                name="search"
                placeholder="Search"
                aria-label="search"
                value={searchMovie}
                onChange={handleSearch}/>
                <button type="submit" className="search-bar__search">
                <i className="fas fa-search"></i>
                </button>
        </div>
        </>
    )   
}

export default Search;