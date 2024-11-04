import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { data } from "./helpers/data";

function App() {
  return (
    <div className="text-center mt-4">
      <Header />
      <container>
        {data.map((player, index) => (
          <div id={index}>
            <CardContainer data={player} />
          </div>
        ))}
      </container>
    </div>
  );
}

export default App;
