import { useState } from "react";
import classes from "./App.module.css";
import Card from "./components/UI/Card";
import Status from "./components/Status";
import BookingForm from "./components/BookingForm";
import BgImg from "./images/water-ripples.jpg";

function App() {
  const [isAvailable, setIsAvailable] = useState(true);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const useRoomHandler = (time) => {
    setIsAvailable(false);
    setTimeRemaining(+time);
  };

  return (
    <body>
      <h1 className={classes.title}>Oasis</h1>
      <Card className={classes.mainboard}>
        <h2>Marina</h2>
        <Status isAvailable={isAvailable} timeRemaining={timeRemaining} />
        <BookingForm onButtonClick={useRoomHandler} />
        <BgImg />
      </Card>
    </body>
  );
}

export default App;
