import React, {useState} from 'react'
import classes from './MeetupItem.module.css';


function FileUploadPage(){
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setIsFilePicked] = useState(false);
  
    const changeHandler = (event) => {
      setSelectedFile(event.target.files[0]);
      setIsSelected(true);
    };
  
    const handleSubmission = () => {
      
    }

    return(
        <div className={classes.control}>
        <input type="file" id="image" required/>
        </div>
    )
  
  }
  export default FileUploadPage;