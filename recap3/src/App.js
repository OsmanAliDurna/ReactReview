import Counter from "./classComponent/Counter";
import Event from "./events/Event";
import UseStateCounter from "./useState/UseStateCounter";
import UseStateObject from "./useState/UseStateObject";

function App() {
  return (
    <div>
      <Event />
      <Counter />
      <UseStateCounter />
      <UseStateObject />
    </div>
  );
}

export default App;
