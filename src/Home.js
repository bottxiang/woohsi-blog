import React, { useState } from 'react';

const Home = () => {
  const [name, setName] = useState("A")

  const handleClick = (e) => {
    setName("B")
    console.log(e)
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={() => { handleClick("param")}}>Yes</button>
    </div>
  );
};

export default Home;