import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
import { data } from "./helpers/data";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="text-center mt-4">
      <Header handleSearch={handleSearch} />
      <container>
        {data
          .filter((item) =>
            item.name.toLowerCase().trim().includes(search.trim().toLowerCase())
          )
          .map((player, index) => (
            <div id={index}>
              <CardContainer data={player} />
            </div>
          ))}
      </container>
    </div>
  );
}

export default App;
