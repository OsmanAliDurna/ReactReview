import { useState, useEffect } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { appointmentData } from "../helper/data";

const Home = () => {
  const [appData, setAppData] = useState(
    JSON.parse(localStorage.getItem("list")) || []
  );

  useEffect(() => {
    appData.length > 0
      ? setAppData(JSON.parse(localStorage.getItem("list")))
      : setAppData(appointmentData);
  }, []);

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors setAppData={setAppData} appData={appData} />
      <AppointmentList setAppData={setAppData} appData={appData} />
    </main>
  );
};

export default Home;
