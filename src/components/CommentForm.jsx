import {useState} from "react"

function CommentForm({ addReview, currentUser, movie }){
    const [comment, setComment] = useState("")
    const [rating, setRating] = useState("")
    
    
    const handleSubmit=(e)=>{
        
        e.preventDefault()
        setComment("")
        setRating("")
        
        const newReview = {
            comment, rating, 
            user_id: currentUser.id,
            movie_id: movie.id
        }

        fetch("http://127.0.0.1:3001/reviews", {
            method:"POST",
            headers: {"Content-type": "application/json"},
            body:JSON.stringify(newReview)
        })
        .then(resp => resp.json())
        .then(data => addReview(data))
    }

    return (
        <div className="comment-form">
            <h3>Leave a Comment:</h3>
            <form className="review-form" onSubmit={handleSubmit}>
                <label htmlFor="comment">Comment: </label>
                <input 
                type="text" 
                id="comment"
                name="comment"
                value={comment}
                onChange={(e)=>setComment(e.target.value)}
                />
                
                <br/>
                <label htmlFor="rating">Rating: </label>
                <input 
                type="number" 
                id="rating"
                name="rating"
                value={rating}
                onChange={(e)=>setRating(e.target.value)}
                />
                
                <br/>
                <button type="submit">Add Review</button>
            </form>
        </div>
    )
}
export default CommentForm;