import * as React from "react";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";

//BELOW MATERIAL UI IMPORT CODE 

//https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject

const marks1 = [
    //DANCABILITY CHILL VS AT CLUB SLIDER VALUE AND LABEL
    //Chilling Vs At Club
    //min_danceability 0.0 max_danceability 1.0
    //Danceability: Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.
  {
    value: 0.0,
    label: "Chilling",
  },
  {
    value: 1.0,
    label: "At the Club",
  },
];

const marks2 = [
      //ANAGOL VS DIGITAL  SLIDER VALUE AND LABEL
    //Analog vs Digital
      //min_acousticness 0.0 max_acousticness 1.0
      //Acousticness: A measure from 0.0 to 1.0 of whether the track is acoustic.
  {
    value: 0.0,
    label: "Analog",
  },
  {
    value: 1.0,
    label: "Digital",
  },
];

const marks3 = [
  //SPEECH SLIDER VALUE AND LABEL
  //No Talking VS Mad Vocals
  //min_speechiness 0.0 //max_speechiness 1.0
  //Speechiness: Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value.

  {
    value: 0.0,
    label: "No Talking",
  },
  {
    value: 1.0,
    label: "Mad Vocals",
  },
];

const marks4 = [
   //POPULARITY SLIDER VALUE AND LABEL
   //Loca VS World  Famous
   //min_popularity 01 //max_popularity 100
  {
    value: 0,
    label: "Local",
  },
  {
    value: 100,
    label: "World Famous",
  },
];

function valuetext(value) {
  return `${value}`;
}

const minDistance = 0.1;

export default function SliderSelekta(props) {
  const [value1, setValue1] = React.useState([0.4, 0.6]);

  //DANCABILITY CHILL VS AT CLUB SLIDER
  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 1.0 - minDistance);
        setValue1([clamped, clamped + minDistance]);
        props.onChange1([clamped, clamped + minDistance]) // saves the value 
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue1([clamped - minDistance, clamped]);
        props.onChange1([clamped - minDistance, clamped]) // saves the value 
      }
    } else {
      setValue1(newValue); 
      props.onChange1(newValue)
       // NOTS SURE ABOUT THIS  do we need to add it here  got a compile error 
     
    }
  };

  //DIGITAL VS ANALOG SLIDER
  const [value2, setValue2] = React.useState([0.4, 0.6]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 1.0 - minDistance);
        setValue2([clamped, clamped + minDistance]);
        props.onChange2([clamped, clamped + minDistance]) // saves the value 
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
        props.onChange2([clamped - minDistance, clamped]) // saves the value 

      }
    } else {
      setValue2(newValue);
      props.onChange2(newValue)
    }
  };

  //SPEECH SLIDER
  const [value3, setValue3] = React.useState([0.4, 0.6]);
  const handleChange3 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 1.0 - minDistance);
        setValue3([clamped, clamped + minDistance]);
        props.onChange3([clamped, clamped + minDistance]) // saves the value 
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue3([clamped - minDistance, clamped]);
        props.onChange3([clamped - minDistance, clamped]) // saves the value 
      }
    } else {
      setValue3(newValue);
      props.onChange3(newValue)
    }
  };

  //POPULARITY SLIDER
  const [value4, setValue4] = React.useState([40, 60]);
  const handleChange4 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue4([clamped, clamped + minDistance]);
        props.onChange4([clamped, clamped + minDistance]) // saves the value 
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue4([clamped - minDistance, clamped]);
        props.onChange4([clamped - minDistance, clamped]) // saves the value 
      }
    } else {
      setValue4(newValue);
      props.onChange4(newValue)
    }
  };

  return (
     //RENDERING SLIDERS
    <Box sx={{ width: 300 }}>
      <Slider
        step={0.1}
        min={0}
        max={1}
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        marks={marks1}
      />
     
      <Slider
        step={0.1}
        min={0}
        max={1}
        getAriaLabel={() => "Minimum distance shift"}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        marks={marks2}
      />
      <Slider
        Step={0.1}
        min={0}
        max={1}
        getAriaLabel={() => "Minimum distance shift"}
        value={value3}
        onChange={handleChange3}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        marks={marks3}
      />
      <Slider
        step={10}
        min={0}
        max={100}
        getAriaLabel={() => "Minimum distance shift"}
        value={value4}
        onChange={handleChange4}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        marks={marks4}
      />
    </Box>
  );
}
