import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "Park and Chill",
    image:
      "https://pbs.twimg.com/profile_images/1349737947487080450/gkppV7Un_400x400.jpg",
    address: "1600  LOWER BROOK CLEMMONS NC 27012-7454 USA",
    description: "Park and chill no burnouts, no reving, no 2step.",
    time: "7:00pm",
    date: "08/09/2022",
  },
  {
    id: "m2",
    title: "Cars and Coffee",
    image:
      "https://uploads-ssl.webflow.com/5cdb65cd61c1c98e84b5135e/5d767e1f0dda9a4810649d12_Cars-and-Coffee.png",
    address: "2800  NEBO BOONVILLE NC 27011-8284 USA",
    description:
      "Monthly cars and coffee please be respectful of the spot no burnouts!",
    time: "9:00am",
    date: "08/15/22",
  },
  {
    id: "m3",
    title: "Drift Event",
    image:
      "https://i.pinimg.com/originals/f9/b6/89/f9b689fa5d692509a300fc0cd73deccc.png",
    address: "2300  BRYAN CLEMMONS NC 27012-9703 USA",
    description: "Street drifting competition hosted by local business",
    time: "6:00pm",
    date: "08/26/22",
  },
  {
    id: "m4",
    title: "Drag Racing",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/6a/1f/79/drag-racing-on-the-galot.jpg?w=1200&h=1200&s=1",
    address: "1001  HENDRIX BOONVILLE NC 27011-8534 USA",
    description:
      "Do you like getting drunk and watching people race 1,000hp cars? Than this is the event for you!",
    time: "8:00pm",
    date: "08/12/22",
  },
];
function AllMeetupsPage() {
  return (
    <section>
      <h1>Meet/Events</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
