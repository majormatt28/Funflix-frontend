
function CommentDetails({user_id, comment, rating, username, currentUser}){

    console.log("currentUser", currentUser)
    console.log("user_id", user_id)
    return(
        <div className="comment-detail">
            <p>Comment: {comment}</p>
            <p>Rating: {rating}</p>
            <p>Posted by: {username}</p>
            {user_id === currentUser.id ? (
            <>
                <button>Update Review</button>
                <button>Delete Review</button>
            </>
            ): null}
            
        </div>
    )
}

export default CommentDetails;