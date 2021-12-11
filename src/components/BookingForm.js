import classes from "./BookingForm.module.css";

const BookingForm = (props) => {
  return (
    <div className={classes.set_time}>
      <span className={classes.bookroom}>
        I want to use the room for
        <input
          className={classes.time_input}
          type="number"
          min="0.5"
          step="0.5"
          max="4"
          defaultValue="1"
        />
        hours
      </span>
    </div>
  );
};

export default BookingForm;
