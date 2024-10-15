import Message from "./Message";

const Main = (props) => {
  const parStyle = {
    fontFamily: "tahoma",
    color: "#333",
    fontSize: "1.5rem",
  };

  return (
    <main style={parStyle}>
      <div>Hallo Main</div>
      <Message content={props.text} />
    </main>
  );
};

export default Main;
