import React, {useState, useEffect} from "react"



import { Typography } from '@material-ui/core';

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";


import { Switch } from "@material-ui/core";
import { Slider } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";


export default function Dashboard() {
    // notificaiton messages in variables 
    const offlineWarning = "Your application is offline. You won't be able to share or stream music to other devices"
    const volumeWarning = "Listening to music at a high volume could cause long-term hearing loss."
    const qualityWarning = "Music quality is degraded. Increase quality if your connection allows it."

    //   state
  const [notifications, setNotifications] = useState([])

  const [online, setOnline] = useState(false)
  const [volume, setVolume] = useState(20)
  const [soundQuality, setSoundQuality] = useState(2)
  
//   state change handler functions
    const handleOnline = () => online ? setOnline(false) : setOnline(true)

    const handleVolume = (e, sliderValue) => {
    e.preventDefault()
    setVolume(sliderValue)
}

    const handleSound = (e) => {
    setSoundQuality(e.target.value);
  };
 

useEffect(()=>{console.log(notifications)},[notifications])


useEffect(()=>{
    if(!online && volume > 80 && soundQuality === 1) {
        setNotifications(()=>[offlineWarning, volumeWarning, qualityWarning])
    } else if (online && volume > 80 && soundQuality === 1) {
        setNotifications(()=>[volumeWarning, qualityWarning])
    } else if(online && volume > 80) {
        setNotifications(()=>[volumeWarning])
    } else if(!online && volume > 80) {
        setNotifications(()=>[offlineWarning, volumeWarning])
    } else if(online && soundQuality === 1) {
        setNotifications(()=>[qualityWarning])
    } else if(!online && soundQuality === 1) {
        setNotifications(()=>[offlineWarning, qualityWarning])
    } else if(!online) {
        setNotifications(()=>[offlineWarning])
    } else if(online) {
        setNotifications(()=>[])
    }
}, [online, volume, soundQuality])





  

   


  

  return (
    <div>
      <Typography color="textSecondary" variant="h5">Welcome User!</Typography>
      <div className="flex-row margin-top">

      <Card >
        <Typography>Online Mode</Typography>
        <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
          Is the application connected to the internet? 
        </Typography>
        <Switch onChange={handleOnline}/>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>


    <Card >
      <Typography>Master Volume</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Overrides all other sounds settings in the application
        </Typography>
        <Slider 
        value = {volume}
        onChange = {handleVolume}
        aria-labelledby="discrete-slider-small-steps"
        step={10}
        marks
        min={0}
        max={100}
        valueLabelDisplay="auto"
  
/>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>

    <Card >
      <Typography>Sound Quality</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Manually control the music quality in event of poor connection
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={soundQuality}
          onChange={handleSound}
          
        >
          <MenuItem value={1}>Low</MenuItem>
          <MenuItem value={2}>Normal</MenuItem>
          <MenuItem value={3}>High</MenuItem>
        </Select>
      </CardContent>
      <CardActions disableSpacing></CardActions>
    </Card>


      </div>
      <div>
      <Typography color="textPrimary" variant="h6">System Notifications:</Typography>
      <ul style={{listStyle: "none"}}>
        {notifications.map((message, index) => (<li key={index}>{message}</li>))}
      </ul>
      </div>
    </div>
  );
}