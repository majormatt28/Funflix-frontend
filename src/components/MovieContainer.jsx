import {useState, useEffect} from "react"
import MovieFilter from "./MovieFilter"
import MovieItem from "./MovieItem"
import Search from "./Search"

function MovieContainer() {
   const [allMovies, setAllMovies] = useState([])
   const [filterAllMovie, setFilterAllMovie] = useState("All")
   const [searchMovie, setSearchMovie] = useState("")
   
   useEffect(()=>{
      fetch("http://127.0.0.1:3001/movies")
      .then(resp => resp.json())
      .then(setAllMovies)
   },[])

   const filterMovie = allMovies.filter(movie =>{
      if (filterAllMovie==="All"){
         return true
      }else{
         return movie.genre ===filterAllMovie
      }
   })
   
   const movieItem = filterMovie.filter(movie=>movie.title.toLowerCase().includes(searchMovie.toLowerCase()))
                                .map(movie=><MovieItem key={movie.id} {...movie}/> )

   return (
      <div className="container">
   
         <Search searchMovie={searchMovie} setSearchMovie={setSearchMovie} />
         <MovieFilter setFilterAllMovie={setFilterAllMovie} />
         {movieItem}
  
   
      </div>
   )   
}

export default MovieContainer;