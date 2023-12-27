import "./App.css";


function App() {
  const title = "Wilkommen zur Testphase";
  const likes = [50, 49];
  // const person = {name: "Mo", age:30};
  const link = "https://bayram.dev"
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Gefällt {likes}</p>
        {/* <p>Person {person}</p> */}
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.round(Math.random() * 10)}</p>
        <a href={link}>{link}</a>
      </div>
    </div>
  );
}

export default App;
