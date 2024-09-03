import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const SideBar = ({ categories }) => {
  return (
    <div className="sidebar">
      <h5 className="sidebar-titl">CATEGORIES</h5>
      <ul className="sidebar-links"></ul>
      {categories.map((item) => (
        <Link
          to={`/posts/categories/${item.title}`}
          className="sidebar-link"
          key={item._id}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default SideBar;
