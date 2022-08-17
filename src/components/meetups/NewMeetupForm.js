import { useRef } from "react";

import Card from "../layout/ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  const timeInputRef = useRef();
  const dateInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const finalTitle = titleInputRef.current.value;
    const finalImage = imageInputRef.current.value;
    const finalAddress = addressInputRef.current.value;
    const finalDescription = descriptionInputRef.current.value;
    const finalTime = timeInputRef.current.value;
    const finalDate = dateInputRef.current.value;

    const meetupData = {
      title: finalTitle,
      image: finalImage,
      address: finalAddress,
      description: finalDescription,
      time: finalTime,
      date: finalDate,
    };
    props.onAddMeet(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meet Name</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input
            type="url"
            required
            id="image"
            placeholder="URL"
            ref={imageInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <input type="text" id="description" ref={descriptionInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="time">Time</label>
          <input
            type="text"
            required
            id="time"
            placeholder="9:00pm"
            ref={timeInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="date">Date</label>
          <input
            type="text"
            required
            id="date"
            placeholder="mm/dd/yyyy"
            ref={dateInputRef}
          />
        </div>
        <div className={classes.actions}>
          <button>Create</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;

<div className={classes.control}>
  <label htmlFor="title">Date</label>
  <input type="text" required id="date" />
</div>;
