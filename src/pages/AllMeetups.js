import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

// //const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "Park and Chill",
//     image: "https://i.ytimg.com/vi/I2c_lhDAARI/maxresdefault.jpg",
//     address: "1600  LOWER BROOK CLEMMONS NC 27012-7454 USA",
//     description: "Park and chill no burnouts, no reving, no 2step.",
//     time: "7:00pm",
//     date: "08/09/2022",
//   },
//   {
//     id: "m2",
//     title: "Cars and Coffee",
//     image: "https://www.wickedbigmeet.com/images/wbm/car_show.jpg",
//     address: "2800  NEBO BOONVILLE NC 27011-8284 USA",
//     description:
//       "Monthly cars and coffee please be respectful of the spot no burnouts!",
//     time: "9:00am",
//     date: "08/15/22",
//   },
//   {
//     id: "m3",
//     title: "Drift Event",
//     image:
//       "https://i.pinimg.com/originals/f9/b6/89/f9b689fa5d692509a300fc0cd73deccc.png",
//     address: "2300  BRYAN CLEMMONS NC 27012-9703 USA",
//     description: "Street drifting competition hosted by local business",
//     time: "6:00pm",
//     date: "08/26/22",
//   },
//   {
//     id: "m4",
//     title: "Drag Racing",
//     image:
//       "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6a/1f/79/drag-racing-on-the-galot.jpg?w=1200&h=1200&s=1",
//     address: "1001  HENDRIX BOONVILLE NC 27011-8534 USA",
//     description:
//       "Do you like getting drunk and watching people race 1,000hp cars? Than this is the event for you!",
//     time: "8:00pm",
//     date: "08/12/22",
//   },
// //];
function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedEvents, setLoadedEvents] = useState([]);
 
  useEffect(() => {
    setIsLoading(true)
    const url = "https://car-meetup-afb57-default-rtdb.firebaseio.com/events.json";
    fetch(url).then(response => {
      return response.json();
    }).then(data => {
      // loading is false and data is returne
      const events = [];

      for(const key in data){
        const event = {
          id: key,
          ...data[key]
        };
        events.push(event)
      }
      setIsLoading(false);
      setLoadedEvents(events)
      // setLoadedEvents(data);
    });

  },[]);

  // loading is true
  if (isLoading){
    return <section>
      <p>
        Loading...
      </p>
    </section>
  }
  return (
    <section>
      <h1>Meet/Events</h1>
      <MeetupList meetups={loadedEvents} />
    </section>
  );
}

export default AllMeetupsPage;
