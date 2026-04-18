import { useLoaderData } from "react-router-dom";

export default function Details() {

    const post = useLoaderData();

    return (
        <>
            <h1>Details</h1>

            {post && (
                <>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                </>
            )}
        </>
    );
}