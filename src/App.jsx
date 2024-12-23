import Dashboard from "./Dashboard";
import "./css/app.css";
import DaynightSwitch from "./DaynightSwitch";
import { useEffect, useState } from "react";

function App() {
  const [isDay, setIsDay] = useState(false);

  useEffect(() => {
    document.body.style.transition = "background-color 0.5s ease";
    if (isDay) {
      document.body.style.backgroundColor = "#F8F8F0";
    } else {
      document.body.style.backgroundColor = "";
    }
  }, [isDay]);

  const handleToggle = () => setIsDay((prevState) => !prevState);
  return (
    <>
      <DaynightSwitch onClick={handleToggle} isDay={isDay} />
      <Dashboard isDay={isDay} />
    </>
  );
}

export default App;
