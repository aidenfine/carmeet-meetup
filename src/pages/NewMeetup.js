import { useNavigate } from 'react-router-dom';
import React from 'react'
import NewMeetupForm from "../components/meetups/NewMeetupForm";




function NewMeetupsPage() {
  const history = useNavigate();
  function AddMeetHandler(meetupData){
    
    //useNavigate
    const url = "https://car-meetup-afb57-default-rtdb.firebaseio.com/events.json";
    fetch(url,
      {
        method: 'POST',
        body: JSON.stringify(meetupData),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      history('/');
      // })
      // .then((response) => response.json())
      // .then((data) => console.log(data))
  }
  return (
    <section>
      <h1>Create Meet</h1>
      <NewMeetupForm onAddMeet={AddMeetHandler}/>
    </section>
  );
}

export default NewMeetupsPage;
