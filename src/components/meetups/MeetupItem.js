import Card from "../layout/ui/Card";
import classes from "./MeetupItem.module.css";
function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        <p>{props.time}</p>
        <p>{props.date}</p>
      </div>
      <div className={classes.actions}>
        <button>Add to Favorites</button>
      </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
