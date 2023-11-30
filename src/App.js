import "./App.css";
import Navigation from "./components/Navigation";
import Second from "./components/Second";
import Title from "./components/Title";
function App() {
  const fe = "senorita";
  return (
    <div className="App">
      <Navigation />
      <Title />

      <h1>ola {fe ? fe : ""} </h1>
<Second />
    </div>
  );
}

export default App;
