const Event = () => {
  const handleClick = () => {
    alert("Clicked...");
  };
  const handleDelete = (text) => {
    alert(text);
  };
  const handleChange = (text) => {
    alert(text);
  };
  const message = "Deleted...";
  return (
    <div>
      <h1>Events</h1>
      <h2>React</h2>
      <div>
        <button onClick={handleClick}>Click</button>
        <button onClick={() => handleDelete(message)}>Delete</button>
        <button onClick={() => handleChange("Changed...")}>Change</button>
      </div>
    </div>
  );
};

export default Event;
