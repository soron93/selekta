import * as React from "react";
import Box from "@material-ui/core/Box";
import Slider from "@material-ui/core/Slider";

//BELOW MATERIAL UI IMPORT CODE 

const marks1 = [
    //DANCABILITY CHILL VS AT CLUB SLIDER VALUE AND LABEL
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
  {
    value: 0.0,
    label: "Local",
  },
  {
    value: 1.0,
    label: "World Famous",
  },
];

function valuetext(value) {
  return `${value}`;
}

const minDistance = 0.1;

export default function MinimumDistanceSlider(props) {
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
        props.onChange1([clamped, clamped + minDistance]) // saves the value 
      }
    } else {
      setValue1(newValue);  // NOTS SURE ABOUT THIS  do we need to add it here  got a compile error 
     
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
        props.onChange2([clamped, clamped + minDistance]) // saves the value 

      }
    } else {
      setValue2(newValue);
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
        props.onChange3([clamped, clamped + minDistance]) // saves the value 
      }
    } else {
      setValue3(newValue);
    }
  };

  //POPULARITY SLIDER
  const [value4, setValue4] = React.useState([0.4, 0.6]);
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
        props.onChange4([clamped, clamped + minDistance]) // saves the value 
      }
    } else {
      setValue4(newValue);
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
        step={0.1}
        min={0}
        max={1}
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
