import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";

export type Post = {
  id: number;
  title: string;
  image: string;
  body: string;
};

export function PostsPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState<boolean>(false);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/posts.json").then((response) => {
      setPosts(response.data);
    });
  };

  const handleCreate = (params: FormData, successCallback: () => void) => {
    console.log("handleCreate");
    axios.post("/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
      successCallback();
    });
  };

  const handleShow = (post: Post) => {
    console.log("handleShow", post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };
  const handleUpdate = (post: Post, params: FormData, successCallback: () => void) => {
    console.log("handleUpdate", post, params, successCallback);
    axios.patch(`/posts/${post.id}.json`, params).then((response) => {
      setPosts(posts.map((p) => (p.id === post.id ? response.data : p)));
      setIsPostsShowVisible(false);
      successCallback();
    });
  };
  const handleDestroy = (post: Post) => {
    console.log("handleDestroy", post);
    axios.delete(`/posts/${post.id}.json`).then(() => {
      setPosts(posts.filter((p) => p.id !== post.id));
      setIsPostsShowVisible(false);
    });
  };
  useEffect(handleIndex, []);

  return (
    <main>
      <PostsNew onCreate={handleCreate} />
      <PostsIndex posts={posts} onShow={handleShow} />
      <Modal show={isPostsShowVisible} onClose={() => setIsPostsShowVisible(false)}>
      {currentPost ? <PostsShow post={currentPost} onUpdate={handleUpdate} onDestroy={handleDestroy} /> : null}
      </Modal>
    </main>
  );
}