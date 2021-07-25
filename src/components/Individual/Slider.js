import * as React from 'react';
import Box from '@material-ui/core/Box';
import Slider from '@material-ui/core/Slider';

const marks1 = [
  {
    value: 0,
    label: 'Chilling',
  },
  {
    value: 100,
    label: 'At the Club',
  },
];

const marks2 = [
    {
      value: 0,
      label: 'Analog',
    },
    {
      value: 100,
      label: 'Digital',
    },
  ];
  
  const marks3 = [
    {
      value: 0,
      label: 'No Talking',
    },
    {
      value: 100,
      label: 'Mad Vocals',
    },
  ];
  
  const marks4 = [
    {
      value: 0,
      label: 'Local',
    },
    {
      value: 100,
      label: 'World Famous',
    },
  ];

function valuetext(value) {
  return `${value}`;
}

const minDistance = 10;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = React.useState([40, 60]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const [value2, setValue2] = React.useState([40, 60]);

  const handleChange2 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };
  const [value3, setValue3] = React.useState([40, 60]);
  const handleChange3 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue3([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue3([clamped - minDistance, clamped]);
      }
    } else {
      setValue3(newValue);
    }
  };

  const [value4, setValue4] = React.useState([40, 60]);
  const handleChange4 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue4([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue4([clamped - minDistance, clamped]);
      }
    } else {
      setValue4(newValue);
    }
  };




  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        marks={marks1}
      />
      <Slider
        getAriaLabel={() => 'Minimum distance shift'}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        marks={marks2}
      />
          <Slider
        getAriaLabel={() => 'Minimum distance shift'}
        value={value3}
        onChange={handleChange3}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        marks={marks3}
      />
         <Slider
        getAriaLabel={() => 'Minimum distance shift'}
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