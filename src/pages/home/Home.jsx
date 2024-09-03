import "./home.css";
import PostList from "../../components/posts/PostList";
import { posts, categories } from "../../dummyData";
import SideBar from "../../components/sidebar/SideBar";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home">
      <div className="home-hero-header">
        <div className="home-hero-header-layout">
          <h1 className="home-title">welcome to blog</h1>
        </div>
      </div>
      <div className="home-latest-post">
        {" "}
        Latest Post
        <div className="home-container">
          <PostList posts={posts.slice(0, 3)} />
          <SideBar categories={categories} />
        </div>
      </div>
      <div className="home-see-posts-link">
        <Link to="/posts" className="home-link">
          See all posts
        </Link>
      </div>
    </section>
  );
};

export default Home;
