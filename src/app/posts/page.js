// /app/posts/page.js
import pg from "pg";

export default async function PaginaPostagens() {
    const db = new pg.Pool({
        connectionString: process.env.NEXT_POSTGRES,
    });

    //now to use .map
    const postagens =(await db.query(`SELECT * FROM postagens`)).rows;
    
    console.log(postagens);
    
    return (
        <div>
            <h1>Postagens</h1>
            <ul>
                {postagens.map((postagem)=>(
                    <li key={postagem.id}>{postagem.title}</li>
                ))}
            </ul>
        </div>
    );
}














/*export default async function PostPage() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts"); //call the API
    const posts = await response.json(); //parse the response as JSON

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post)=> (
                   <li key={post.id}>{post.id}</li> 
                ))}
            </ul>
        </div>
    )
}*/