const Home = () => {

  const handleClick = (e) => {
     console.log(e)
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={() => { handleClick("param")}}>Yes</button>
    </div>
  );
};

export default Home;