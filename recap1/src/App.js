import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Message from "./Message";

import "./App.css";

function App() {
  return (
    <div>
      <h1> Hallo </h1>
      <Header />
      <Main text={"ali"} />
      <Footer />
      <Message content={"2025"} />
    </div>
  );
}

export default App;
