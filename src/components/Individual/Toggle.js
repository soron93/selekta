import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function Toggle() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
     
      <FormControlLabel control={<Switch />} label="Private" />
      </FormGroup>
  );
}
