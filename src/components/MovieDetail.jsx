import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
// import CommentContainer from "./CommentContainer";
import CommentForm from "./CommentForm"
import CommentDetail from "./CommentDetail"

function MovieDetail({currentUser}){
    const [movie, setMovie] = useState([])
    const {id} = useParams()
    // console.log("movieDetail-Current User", currentUser)
   
    useEffect(()=>{
        fetch (`http://127.0.0.1:3001/movies/${id}`)
        .then(resp=>resp.json())
        .then(movie=>setMovie(movie))
    },[id])
    console.log("movie", movie)

    const {title, image, release_date, description, genre} = movie
    
    const renderReview =() => movie.reviews.map(review=>{
        return (console.log("review",review),
    <CommentDetail key= {review.id} {...review} currentUser={currentUser} movie={movie} />) })
    // console.log("review",typeof review)
        // {review.comment} 
    //  {review.rating} 
    //  {review.username}/>
    // {/* {currentUser? (
    //     <>
    //     <button>Edit Comment</button>
    //     <button>Delete Comment</button>
    //     </>
    // ): null}
    
    // </div> */}
    
   
    const addNewReview=(newReview)=>{ 
        const updatedReviews = [...movie.reviews, newReview]
        // render movie object 
        setMovie({...movie, reviews : updatedReviews})
    }

    return (
        <div>
            <h1>{title}</h1>
            <img className="movie-poster" src={image} alt={title}/>
            <h4>Description: {description}</h4>
            <h4>Genre: {genre}</h4>
            <h4>Release Date: {release_date}</h4>

            {movie.reviews ? renderReview() : "There is no review for this movie yet"}
            {/* <CommentContainer currentUser={currentUser} movie={movie}/> */}
            <CommentForm addReview={addNewReview} currentUser = {currentUser} movie={movie}/>
        </div>
        
    )
}

export default MovieDetail;