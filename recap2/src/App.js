import Card from "./components/card/Card";
import data from "./data";
import Header from "./components/header/Header";
import "./App.css";

function App() {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <Header name={item.language} />
          <Card img={item.img} btn={item.btnName} />
        </div>
      ))}
    </div>
  );
}

export default App;
