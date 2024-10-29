import { useState } from "react";

const UseStateCounter = () => {
  const [sayac, setSayac] = useState(0);

  const handleIncrement = () => {
    setSayac(sayac + 1);
  };

  const handleDecreament = () => {
    if (sayac > 0) {
      setSayac(sayac - 1);
    } else {
      alert("Sayac negatif deger olamaz");
    }
  };

  return (
    <div>
      <h1>UseState Sayac</h1>
      <h2>Sayac:{sayac}</h2>

      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecreament}>Decrease</button>
      <button onClick={() => setSayac(0)}>Clear</button>
    </div>
  );
};

export default UseStateCounter;
