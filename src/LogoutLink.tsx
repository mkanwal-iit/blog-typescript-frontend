import axios from "axios";
import { FormEvent } from "react";
export function LogoutLink() {
  const handleClick = (event: FormEvent) => {
    event.preventDefault();
    axios.delete("/sessions.json").then((response) => {
      console.log(response);
      localStorage.removeItem("email");
      window.location.href = "/";
    });
  };
  return (
    <a href="#" onClick={handleClick}>
      Logout
    </a>
  );
}