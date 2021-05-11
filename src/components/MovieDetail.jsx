import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import CommentForm from "./CommentForm"

function MovieDetail({currentUser}){
    const [movie, setMovie] = useState([])
    // console.log("movieDetail",currentUser)
    
    const {id} = useParams()
   

    useEffect(()=>{
        fetch (`http://127.0.0.1:3001/movies/${id}`)
        .then(resp=>resp.json())
        .then(movie=>setMovie(movie))
    },[id])
    
    const {title, image, release_date, description} = movie
    
    
    const renderReview=()=>movie.reviews.map(review=><p key={review.id}>Comment: {review.comment} <br/> Rating: {review.rating} <br/> Posted by: {review.username}</p>)
    // console.log(movie.reviews)
    // console.log("MovieDetail", movie)
    const addReview=(newReview)=>{ 
        const updatedReviews = [...movie.reviews, newReview]
        setMovie({...movie, reviews : updatedReviews})
    }

    return (
        <div>
            <h1>{title}</h1>
            <img className="movie-poster" src={image} alt={title}/>
            <h4>Description: {description}</h4>
            <h4>Release Date: {release_date}</h4>
            {movie.reviews ? renderReview() : "There is no review for this movie yet"}
            <CommentForm addReview={addReview} currentUser = {currentUser} movie={movie}/>
        </div>
        
    )
}

export default MovieDetail;