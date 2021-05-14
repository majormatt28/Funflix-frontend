import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
import CommentForm from "./CommentForm"
import CommentDetail from "./CommentDetail"

function MovieDetail({currentUser}){
    const [movie, setMovie] = useState([])
    const [reviews, setReviews] = useState([])
    const {id} = useParams()
    // console.log("movieDetail-Current User", currentUser)
   
    useEffect(()=>{
        fetch (`http://127.0.0.1:3001/movies/${id}`)
        .then(resp=>resp.json())
        .then(movie=>{setMovie(movie)
                      setReviews(movie.reviews)
        })
    },[id])
    
    const addNewReview=(newReview)=>{ 
        const updatedReviews = [...reviews, newReview]
        // render movie object 
        setReviews(updatedReviews)
    }
    
    const updateReview=(newReview)=>{
        console.log("newReview",newReview)
        const update = reviews.map(review=>{
            if (review.id===newReview.id){
                return  newReview 
            }else return review
        })
        setReviews(update)
    }

    const deleteReview=(reviewId)=>{
        const removeReview = reviews.filter(review=>review.id !== reviewId)
        setReviews(removeReview)
    }

    const {title, image, release_date, description, genre, average_rating} = movie
    
    // const sortReviews = [...review].sort((a,b)=>new Date(b.date) - new Date(a.date))
    const sortReviews = [...reviews].sort((a,b)=>(b.id) - (a.id))
    const renderReview =() => sortReviews.map(review=>
        
    <CommentDetail key= {review.id} {...review} currentUser={currentUser} 
        movie={movie} 
        deleteReview={deleteReview}
        updateReview={updateReview}
        />
    )
   

    return (
        <div className="movie-container">
        <div className="movie-card">
            <h1 className="title">{title}</h1>
            <img className="movie-poster" src={image} alt={title}/>
            <h2 className="movie-details">Description: {description}</h2>
            <h2 className="movie-details">Genre: {genre}</h2>
            <h2 className="movie-details">Release Date: {release_date}</h2>
            <h2 className = "movie-details">Average Rating: {average_rating}</h2>
            </div>
            <div className="comment">
            <CommentForm addReview={addNewReview} currentUser = {currentUser} movie={movie}/>
            {movie.reviews ? renderReview() : "There is no review for this movie yet"}
        </div>
        </div>
        
    )
}

export default MovieDetail;
