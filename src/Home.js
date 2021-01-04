import { useState } from "react";
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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "avram")}
        title="Avram's blogs"
      />
    </div>
  );
};

export default Home;
