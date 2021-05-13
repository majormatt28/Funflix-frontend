import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'
// import CommentContainer from "./CommentContainer";
import CommentForm from "./CommentForm"
import CommentDetail from "./CommentDetail"

function MovieDetail({currentUser}){
    const [movie, setMovie] = useState([])
    // const [review, setReview] = useState([])
    const {id} = useParams()
    // console.log("movieDetail-Current User", currentUser)
   
    useEffect(()=>{
        fetch (`http://127.0.0.1:3001/movies/${id}`)
        .then(resp=>resp.json())
        .then(movie=>{setMovie(movie)
                    //   setReview(movie.reviews)
        })
    },[id])

    const addNewReview=(newReview)=>{ 
        const updatedReviews = [...movie.reviews, newReview]
        // render movie object 
        setMovie({...movie, reviews: updatedReviews})
    }
    
    const updateReview=(newReview)=>{
        // console.log("newReview",newReview)
        const update = movie.reviews.map(review=>{
            if (review.id===newReview.id){
                return  newReview    
            }else return review
        })
        setMovie({...movie, reviews: update})
    }

    const deleteReview=(reviewId)=>{
        const removeReview = movie.reviews.filter(review=>review.id !== reviewId)
        setMovie({...movie, reviews: removeReview})
    }

    const {title, image, release_date, description, genre} = movie
    
    const renderReview =() => movie.reviews.map(review=>
        // return (console.log("review",review),

    <CommentDetail key= {review.id} {...review} currentUser={currentUser} 
        movie={movie} 
        deleteReview={deleteReview}
        updateReview={updateReview}
        />
    )
   

    return (
        <div className="movie-card">
            <h1 className="title">{title}</h1>
            <img className="movie-poster" src={image} alt={title}/>
            <h2 className="movie-desc">Description: {description}</h2>
            <h2 className="movie-genre">Genre: {genre}</h2>
            <h2 className="movie-date">Release Date: {release_date}</h2>

            {movie.reviews ? renderReview() : "There is no review for this movie yet"}
            <CommentForm addReview={addNewReview} currentUser = {currentUser} movie={movie}/>
        </div>
        
    )
}

export default MovieDetail;
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