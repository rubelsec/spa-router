import { useLoaderData, useNavigate,useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const {postId}=useParams();
    const navigate=useNavigate();
    const { id, title, body } = post;
    console.log(postId);
    const handleGoback=()=>{
     navigate(-1);
    }

    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <Link to={`/posts/${id}`}>Show all posts</Link>
            <button onClick={handleGoback}>Go back</button>
        </div>
    );
};

export default PostDetails;