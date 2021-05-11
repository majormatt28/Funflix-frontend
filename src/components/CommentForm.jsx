import {useState} from "react"
function CommentForm({addReview}){
    const [review, setReview] = useState("")
    const [rating, setRating] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        const newReview = {
            review, rating
        }

        fetch("http://127.0.0.1:3001/reviews", {
            method:"POST",
            headers: {"Content-type": "application/json"},
            body:JSON.stringify(newReview)
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <h3>Leave Review</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                name="review"
                value={review}
                onChange={(e)=>setReview(e.target.value)}/>
                <br/>
                <input type="number" 
                name="rating"
                value={rating}
                onChange={(e)=>setRating(e.target.value)}/>
                <br/>
                <button type="submit">Add Review</button>
            </form>

        </div>
    )
}
export default CommentForm;