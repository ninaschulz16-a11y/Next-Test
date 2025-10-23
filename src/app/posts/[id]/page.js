
import pg from "pg";

export default async function Postagem({ params }) {
    const slug = await params;
    const db = new pg.Pool({
        connectionString: process.env.NEXT_POSTGRES,
    });
    const postagem = (await db.query(`SELECT * FROM postagens WHERE id = ${slug.id}`)).rows;

    return (
        <div>
            {postagem.map((postagem)=> (
                <div>
                    <h2 key={postagem.id}>{postagem.title}</h2>
                    <p>{postagem.content}</p>
                    </div>
            ))}
        </div>
    );
}









/*export default async function PostPage({ params }) {
    const slug = await params;
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${slug.id}`  //include the params.id value from the URL
    );
    const post = await response.json();

    return(
        <div>
            <h1>Post {post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}*/