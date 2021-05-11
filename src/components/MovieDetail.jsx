import React, { useEffect, useState } from "react";
import {useParams} from 'react-router-dom'

function MovieDetail(){
    const [movie, setMovie] = useState([])
    console.log(movie)
    const params = useParams()
    console.log(params)

    useEffect(()=>{
        fetch (`http://127.0.0.1:3001/movies/${params.id}`)
        .then(resp=>resp.json())
        .then(movie=>setMovie(movie))
    },[params.id])

    const {title, image, release_date, description} = movie
    return (
        <div>
            <h1>{title}</h1>
            <img src={image} alt={title}/>
            <h4>{description}</h4>
            <h4>Release Date: {release_date}</h4>

        </div>
        
    )
}

export default MovieDetail;