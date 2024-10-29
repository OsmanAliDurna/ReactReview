import { useState } from "react";
import UseStateCounter from "./UseStateCounter";

const UseStateObject = () => {
  const [kisi, setKisi] = useState({
    ad: "Canan",
    meslek: "Developer",
    yas: 22,
    maas: 50000,
  });
  const [toggle, setToggle] = useState(false);

  const handleSwap = () => {
    setToggle(!toggle);
    console.log(toggle);
    if (toggle) {
      setKisi({
        ad: "Canan",
        meslek: "Developer",
        yas: 22,
        maas: 200000,
      });
    } else {
      setKisi({
        ad: "Ali",
        meslek: "Tester",
        yas: 42,
        maas: 100000,
      });
    }
  };

  console.log(kisi);
  return (
    <div>
      <h1>Personel Formu</h1>
      <h2>Adi:{kisi.ad}</h2>
      <h3>Meslegi:{kisi.meslek}</h3>
      <h3>Yasi:{kisi.yas}</h3>
      <h3>Maas:{kisi.maas}</h3>

      <button onClick={() => setKisi({ ...kisi, ad: "Mehmet" })}>
        isim degistir
      </button>
      <button onClick={() => setKisi({ ...kisi, meslek: "Tester" })}>
        Meslek degistir
      </button>
      <button onClick={() => setKisi({ ...kisi, yas: kisi.yas + 1 })}>
        Yas Arttir
      </button>

      <button onClick={() => setKisi({ ad: "Can", meslek: "PO", yas: 52 })}>
        Tamamini Guncelle
      </button>

      <button onClick={handleSwap}>Swap</button>

      {toggle && <UseStateCounter />}
    </div>
  );
};

export default UseStateObject;
