import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

function MovieDetail(){
    const [movie, setMovie] = useState([])
    
    
    const {id} = useParams()
    // console.log(id)

    useEffect(()=>{
        fetch (`http://127.0.0.1:3001/movies/${id}`)
        .then(resp=>resp.json())
        .then(movie=>setMovie(movie))
    },[id])
    
    const {title, image, release_date, description} = movie
    const renderReview=()=>movie.reviews.map(review=><p key={review.id}>Comment:{review.comment} posted by: {review.username}</p>)
    console.log(movie.reviews)
    
    // const addReview=(newReview)=>{

    // }

    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt={title}/>
            <h4>{description}</h4>
            <h4>Release Date: {release_date}</h4>
            {movie.reviews ? renderReview() : "There is no review for this movie yet"}
        </div>
        
    )
}

export default MovieDetail;