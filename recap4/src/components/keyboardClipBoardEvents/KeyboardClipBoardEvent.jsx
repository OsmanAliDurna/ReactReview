import { useState } from "react";

const KeyboardClipBoardEvent = () => {
  const [icerik, setIcerik] = useState("");

  const handleKeyDown = (e) => {
    if (e.keyCode > 47 && e.keyCode < 58) {
      alert("Buraya rakam girilemez.");
      e.preventDefault();
    }
  };

  const handleCopy = (e) => {
    alert("Copied not allowed.");
    e.preventDefault();
  };

  const handleCut = (e) => {
    alert("Cutted not allowed.");
    e.preventDefault();
  };

  return (
    <div className="container mt-4">
      <h2>Keyboard Clip Board Events</h2>

      <input
        type="text"
        className="form-control"
        onChange={(e) => setIcerik(e.target.value.toLocaleUpperCase())}
        value={icerik}
        onKeyDown={handleKeyDown}
      />

      <div className="mt-3">
        <p onCopy={handleCopy}>{icerik.toLocaleLowerCase()}</p>
      </div>

      <div>
        <textarea
          className="form-control"
          name="textarea"
          id="area"
          cols="30"
          rows="10"
          onCut={handleCut}
          onCopy={handleCopy}
        ></textarea>
      </div>
    </div>
  );
};

export default KeyboardClipBoardEvent;
