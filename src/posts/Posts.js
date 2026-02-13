import Post from "./Post";

function Posts(props)
{
    return(
        <div>
            {
                props.posts.map
                (
                    post =>
                    (
                        <Post key={post.id} id={post.id} title={post.title} content={post.content} removePost={props.removePost}></Post>
                    )
                )
            }
        </div>
    );
}
export default Posts;