import {useState} from "react"

function CommentDetail({user_id, comment, rating, username, currentUser, id, deleteReview, updateReview}){
    const [newComment, setNewComment] = useState("")
    const [newRating, setNewRating] = useState("")
    console.log("currentUser", currentUser)
    console.log("user_id", user_id)
    console.log("review id", id)

    const editReviewSubmit=(e)=>{
        e.preventDefault()
        const editReview={rating: newRating, comment: newComment}

        fetch(`http://127.0.0.1:3001/reviews/${id}`, {
            method:"PATCH",
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(editReview)
        })
        .then(resp=>resp.json())
        .then(review=>updateReview(review))
    }

    const handleDelete=()=>{
        fetch(`http://127.0.0.1:3001/reviews/${id}`,{
            method: "DELETE"
        })
        deleteReview(id)
    }
    return(
        <>
        <div className="comment-detail">
            <h4>Comment: {comment}</h4>
            <h4>Rating: {rating}</h4>
            <h4>Posted by: {username}</h4>
            {user_id === currentUser.id ? (
            <>
                <button>Update Review</button>
                <button onClick={handleDelete}>Delete Review</button>
                
            </>
            ): null}
        </div>
        <div>
            <form onSubmit={editReviewSubmit}>
            <input 
                type="text" 
                id="comment"
                name="comment"
                value={newComment}
                onChange={(e)=>setNewComment(e.target.value)}
                />
                
                <br/>
                <label htmlFor="rating">Rating: </label>
                <input 
                type="number" 
                id="rating"
                name="rating"
                value={newRating}
                onChange={(e)=>setNewRating(e.target.value)}
                />
                
                <br/>
                <button type="submit">Update</button>
            </form>
        </div>
        </>
    )
}

export default CommentDetail;