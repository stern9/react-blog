import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website oh yeah",
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
      author: "avram",
      id: 3,
    },
  ]);

  const [name, setName] = useState("avram");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("use effect running");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
      <button onClick={() => setName("tania")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
