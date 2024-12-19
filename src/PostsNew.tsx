
import { FormEvent } from "react";
type Props = {
  onCreate: (params: FormData, successCallback: () => void) => void;
};
export function PostsNew({ onCreate } : Props) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const params = new FormData(event.target as HTMLFormElement);
    onCreate(params, () => (event.target as HTMLFormElement).reset());
  };
  return (
    <div>
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <div>
          Image: <input name="image" type="text" />
        </div>
        <div>
          Body: <input name="body" type="text" />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}