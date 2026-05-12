import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const PostDetails = () => {

    const post = useLoaderData();
    const { id, title, body } = post;

    return (
        <div>
            <h3>Post details about: {id}</h3>
            <p>Title: {title}</p>
            <p><small>{body}</small></p>
            <Link to={`/posts/${id}`}>Show all posts</Link>
        </div>
    );
};

export default PostDetails;