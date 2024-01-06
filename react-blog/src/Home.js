import { useState } from "react";

//Shortcut sfc = "stateless functional component
const Home = () => {
  //this is a hook!
  let [name, setName] = useState("Mario");
  let [age, setAge] = useState(80);

  const [blogs, setBlogs] = useState([
    {
      title: "Hallo welt",
      body: "Lorem ipsum",
      author: "Muhammed Bayram",
      id: 1,
    },
    {
      title: "React ist simple",
      body: "Lorem ipsum",
      author: "Muhammed Bayram",
      id: 2,
    },
    {
      title: "Wie soll manb Django integrieren?",
      body: "Lorem ipsum",
      author: "Muhammed Bayram",
      id: 3,
    },
  ]);

  const handleClick = (e) => {
    //using hook function
    setName("Luigi");
    setAge(200);
  };

  return (
    <div className="home">
      <h2>Home Content</h2>
      <p>{name}</p>
      <p>ist {age} Jahre alt.</p>
      <br></br>
      <button onClick={handleClick} data>
        Change name
      </button>
      {blogs.map((blog) => (
        <div className="card" key={blog.id} style={{width: '18rem'}}>
          <div className="card-body">
            <h5 className="card-title">{blog.title}</h5>
            <p className="card-text">
                {blog.body}
            </p>
            <a href="#" className="btn btn-primary">
              Lesen
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
