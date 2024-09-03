import { useState } from "react";
import "./create-post.css";
import { toast , ToastContainer } from "react-toastify";
const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState("");
  const [file, setFile] = useState(null);
   // form submission
  const formSubmitHandler = (e) => {
    e.preventDefault(); //to unreload the page
    // if(!title || !description || !categories || !file) return alert("all fields are required");
    if(title.trim() === "" ) return toast.error("title fields are required");
    if(description.trim() === "" ) return toast.error("description fields are required");
    if(categories.trim() === "" ) return toast.error("categories fields are required");
    if(!file) return toast.error("file  are required");
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("categories", categories);
    formData.append("image", file);
    console.log({ title, description, categories, file });
  };
  return (
    <section className="create-post">
      <ToastContainer theme="dark" position="top-center" />
      <h1 className="create-post-title">Create New Post</h1>
      <form className="create-post-form" onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Post Title"
          className="create-post-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="create-post-input"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        >
          <option disabled value="">
            select a category
          </option>
          <option value="music">music</option>
          <option value="coffee">coffee</option>
        </select>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="create-post-textarea"
          rows="5"
          placeholder="Post Description"
        ></textarea>
        <input
          type="file"
          name="file"
          id="file"
          className="create-post-upload"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit" className="create-post-btn">
          Create
        </button>
      </form>
    </section>
  );
};

export default CreatePost;
