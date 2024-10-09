import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CreatePost } from "./components/createPost";
import { Postlist } from "./components/Postlist";
import PostListProvider from "./store/post-list-store";
function App() {
  const [selectedTab, setselectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="containers d-flex">
        <Sidebar
          selectedTab={selectedTab}
          setselectedTab={setselectedTab}
        ></Sidebar>
        <div className="w-100">
          <Navbar></Navbar>
          {selectedTab === "Home" ? (
            // createpost want a function ehen we clickon  create button create post ma jo values  hogi  jab un values ko submit kare it have method to sare values dede
            <CreatePost></CreatePost>
          ) : (
            // post ko array chiya jis se card ma actual data insert kar sake
            <Postlist></Postlist>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
