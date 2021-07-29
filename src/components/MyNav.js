
import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import QueueMusicRoundedIcon from "@material-ui/icons/QueueMusicRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: "auto",
  },
});

export default function MyNav(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

	
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
		justifyContent="center"
  		alignItems="center"

      >
<<<<<<< HEAD
        <Link to="/Selekta">
          <Tab icon={<TuneRoundedIcon />} label="SELEKTA" />
        </Link>
=======
     
>>>>>>> b2708a1f50e461f47bed007038bf52e036abb104

	
       { props.user ? (
          <div>
          <Link to="/">
          <Tab icon={<TuneRoundedIcon />} label="SELEKTA" />
        </Link>
            <Link to="/profile">
              <Tab icon={<QueueMusicRoundedIcon />} label="PROFILE" />
            </Link>
            <Link to="/signin" onClick={props.onLogOut}>
              <Tab icon={<ExitToAppRoundedIcon />} label="LOGOUT" />
            </Link>
          </div>
        ) : (
          <>
          <Link to="/">
          <Tab icon={<TuneRoundedIcon />} label="SELEKTA" />
        </Link>
            <Link to="/signin">
              <Tab icon={<AccountCircleRoundedIcon />} label="SIGNIN" />
            </Link>
          
          </>
        )}
      </Tabs>
    </Paper>
  );
}