import { FormEvent } from "react";
import { Post } from "./PostsPage";

type Props = {
  post: Post;
  onUpdate: (post: Post, params: FormData, successCallback: () => void) => void;
  onDestroy: (post: Post) => void;
};

export function PostsShow({ post, onUpdate, onDestroy }: Props) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const params = new FormData(event.target as HTMLFormElement);
    onUpdate(post, params, () => (event.target as HTMLFormElement).reset());
  };

  return (
    <div>
      <h2>{post.title}</h2>
      <p>Image url: {post.image}</p>
      <p>Body: {post.body}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={post.title} name="title" type="text" />
        </div>
        <div>
          Image: <input defaultValue={post.image} name="image" type="text" />
        </div>
        <div>
          Body: <input defaultValue={post.body} name="body" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
      <button onClick={() => onDestroy(post)}>Destroy</button>
    </div>
  );
}