
function CommentDetails({user_id, comment, rating, username, currentUser, id, deleteReview}){

    console.log("currentUser", currentUser)
    console.log("user_id", user_id)
    console.log("review id", id)

    const handleDelete=()=>{
        fetch(`http://127.0.0.1:3001/reviews/${id}`,{
            method: "DELETE"
        })
        deleteReview(id)
    }
    return(
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
    )
}

export default CommentDetails;