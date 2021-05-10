import {useState, useEffect} from "react"
import MovieFilter from "./MovieFilter"
import MovieItem from "./MovieItem"
function MovieContainer() {
   const [allMovies, setAllMovies] = useState([])
   const [filterAllMovie, setFilterAllMovie] = useState("All")
   const [searchMovie, setSearchMovie] = useState("")
   
   useEffect(()=>{
      fetch("http://127.0.0.1:3001/movies")
      .then(resp => resp.json())
      .then(movie => setAllMovies(movie))
   },[])

   const filterMovie = allMovies.filter(movie =>{
      if (filterAllMovie==="All"){
         return true
      }else{
         return movie.genre ===filterAllMovie
      }
   })
   console.log("Filter",filterMovie)
   const movieItem = filterMovie.map(movie=><MovieItem key={movie.id} {...movie}/> )

   return (
      <div>

      <MovieFilter setFilterAllMovie={setFilterAllMovie}/>
      {movieItem}
   
      </div>
   )   
}

export default MovieContainer;