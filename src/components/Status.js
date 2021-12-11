import classes from "./Status.module.css";

const Status = (props) => {
  if (props.isAvailable) {
    return <div className={classes.status}>Available Now</div>;
  }
  return (
    <div className={classes.status}>
      Room available in {props.timeRemaining}
    </div>
  );
};

export default Status;
