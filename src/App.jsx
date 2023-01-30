import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Project from "./components/projects/Project";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <About />
        <Project />
      </div>
      <Nav />
    </div>
  );
}

export default App;
