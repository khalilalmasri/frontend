import { Link, useParams } from "react-router-dom";
import { posts } from "../../dummyData";
import "./post-details.css";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const PostDetails = () => {
  const { id } = useParams();
  const post = posts.find((item) => item._id.toString() === id);
  const [file, setFile] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  //update image submit handler
  const updatePostImage = (e) => {
    e.preventDefault();
    if (!file) return toast.error("please select image");
  };
  console.log("file", file);
  return (
    <section className="post-details">
      <ToastContainer theme="colored" position="top-center" />
      <div className="post-details-image-wrapper">
        <img src={file ? URL.createObjectURL(file) : post.image} alt="" className="post-details-image" />
        <form className="update-post-image-form" onSubmit={updatePostImage}>
          <label htmlFor="file" className="update-post-lable">
            <i className="bi bi-image-fill"></i>
            select new image
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            name="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit"> uploade </button>
        </form>
      </div>
      <h1 className="post-details-title">{post.title}</h1>
      <div className="post-details-user-info">
        <img src={post.user.image} alt="" className="post-details-user-img" />
        <div className="post-details-user">
          <strong>
            <Link to={`/profile/${post.user._id}`}>{post.user.username}</Link>
          </strong>
          <span>{post.createdAt}</span>
        </div>
      </div>
      <p className="post-details-description">
        {post.description}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
        molestias asperiores doloremque quis iure ex? Itaque obcaecati, ducimus
        incidunt sapiente illo dolore sequi repudiandae magnam inventore fugit
        est error dolores. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Inventore molestias asperiores doloremque quis iure ex? Itaque
        obcaecati, ducimus incidunt sapiente illo dolore sequi repudiandae
        magnam inventore fugit est error dolores.
      </p>
      <div className="post-details-icon-wrapper">
        <div>
          <i className="bi bi-hand-thumbs-up"></i>
          <small>{post.likes.length}</small>
        </div>
        <div>
          <i className="bi bi-pencil-square"></i>
          <i className="bi bi-trash-fill"></i>
        </div>
      </div>
      <div>add comment form</div>
      <div>comment list</div>
    </section>
  );
};
export default PostDetails;
