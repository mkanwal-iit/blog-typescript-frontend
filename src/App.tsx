import axios from "axios";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { PostsPage } from "./PostsPage";
import { Footer } from "./Footer";

// Read the API host from the environment so the same build runs locally and in
// production. Falls back to the local Rails server when VITE_API_URL is unset.
axios.defaults.baseURL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <SignupPage />
      <LoginPage />
      <PostsPage />
      <Footer />
    </div>
  )
}

export default App;