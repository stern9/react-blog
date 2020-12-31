import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website oh",
      body: "lorem ipsum...",
      author: "avram",
      id: 1,
    },
    {
      title: "Welcome party!!!",
      body: "lorem ipsum...",
      author: "tania",
      id: 2,
    },
    {
      title: "Residential services",
      body: "lorem ipsum...",
      author: "nook",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
