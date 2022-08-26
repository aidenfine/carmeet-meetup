import { useContext } from 'react'
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);

  let content;
  if(favoriteCtx.totalFavorites === 0){
    content = <p>You currently aren't in any events</p>
  } else{
  content = <MeetupList meetups={favoriteCtx.favorites} />
  return content
};
  
  return <section>
    <h1>Your Events</h1>
    <MeetupList meetups={favoriteCtx.favorites}/>
  </section>
}

export default Favorites;
