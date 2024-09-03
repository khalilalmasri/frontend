import React from "react";
import { Link } from "react-router-dom";
import "./posts.css";

const PostItem = ({ post }) => {
  return (
    <div className="post-item">
      <div className="post-item-image-wrapper">
        <img className="post-item-image" src={post?.image} alt={post?.title} />
      </div>
      <div className="post-item-info-wrapper">
        <div className="post-item-info">
          <div className="post-item-authour">
            {post?.authour}
            <strong>Author:</strong>
            <Link className="post-item-userName" to="/profile/1">
              {post?.user?.username}
            </Link>
          </div>
          <div className="post-item-date">
            {new Date(post?.createdAt).toDateString()}
          </div>
        </div>
        <div className="post-item-details">
          <h4 className="post-itemtitle">{post?.title}</h4>
          <Link
            className="post-item-category"
            to={`posts/categories/${post?.category}`}
          >
            {post?.category}
          </Link>
        </div>
        <p className="post-item-description">
          {post?.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Illum odio perferendis quam dignissimos assumenda nesciunt dicta
          nobis, provident nisi nam quidem illo beatae explicabo, ab dolore sed
          hic molestias corrupti. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cum ullam inventore sapiente, animi, asperiores
          consequuntur cumque delectus error modi, sit laudantium omnis
          temporibus quos fuga porro repudiandae molestias facere? Ea.
        </p>
        <Link className="post-item-link" to={`/posts/details/${post?._id}`}>
          Read more...
        </Link>
      </div>
    </div>
  );
};

export default PostItem;
