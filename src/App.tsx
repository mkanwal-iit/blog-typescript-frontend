import axios from "axios";
import { Header } from "./Header";
import { PostsPage } from "./PostsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <PostsPage />
      <Footer />
    </div>
  )
}

export default App;