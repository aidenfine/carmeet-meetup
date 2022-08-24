import Card from "../layout/ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from 'react';
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext)

  const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);
  function toggleFavoriteStatusHandler(){
    if(itemIsFavorite){
      
    }


  }


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
        <button>I'm Going!</button>
      </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
