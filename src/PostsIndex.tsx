import { Post } from "./PostsPage";
type Props = {
  posts: Post[];
  onShow: (post: Post) => void;
};
export function PostsIndex({ posts, onShow }: Props) {
  return (
    <div>
      <h1>All photos ({posts.length} total)</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <img src={post.image} alt={post.title} />
            <p>{post.body}</p>
            <button onClick={() => onShow(post)}>More info</button>
          </div>
        ))}
      </div>
    </div>
  );
}