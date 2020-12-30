import { useState } from "react";

const Home = () => {
  // let name = "avram";
  const [name, setName] = useState("avram");
  const [age, setAge] = useState(100);

  const handleClick = () => {
    setName("tania");
    setAge(20);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old.
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
