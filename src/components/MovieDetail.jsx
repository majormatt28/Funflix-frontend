import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

function MovieDetail(){
    const [movie, setMovie] = useState([])
    console.log(movie.reviews)
    
    const {id} = useParams()
    // console.log(id)

    useEffect(()=>{
        fetch (`http://127.0.0.1:3001/movies/${id}`)
        .then(resp=>resp.json())
        .then(movie=>setMovie(movie))
    },[id])

    const {title, image, release_date, description} = movie
    // const comment = movie.reviews.map(review=> <h5>Review: {review.comment}</h5>)

    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt={title}/>
            <h4>{description}</h4>
            <h4>Release Date: {release_date}</h4>
            {/* {comment} */}
        </div>
        
    )
}

export default MovieDetail;