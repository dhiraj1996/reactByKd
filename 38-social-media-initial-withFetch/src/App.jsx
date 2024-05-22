import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Sidebar from "./components/Sidebar"
import CreatePost from "./components/CreatePost"
import PostList from "./components/PostList"
import { useState } from "react"
import PostListProvider from "./store/post-list-store"
import HomePage from "./components/HomePage"



function App() {

  const [selectedTab, setSelectedTab] = useState("Home")

  return (
    <>
    <PostListProvider>
    <div className= "app-container">
    <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
      <div className="content">
      <Header></Header>
      
      {/* {selectedTab === "HomePage" ? <HomePage></HomePage>: <PostList></PostList>}
      {selectedTab === "Post List" ? <PostList></PostList> : <CreatePost></CreatePost>} */}
      {selectedTab === "Home" ? <HomePage></HomePage>: selectedTab === "Post List" ? <PostList></PostList> : <CreatePost></CreatePost>}

      <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
    </>
  )
}

export default App
