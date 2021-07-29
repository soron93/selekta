import React from  'react'
import {Link} from  'react-router-dom'
import {Navbar, Nav} from  'react-bootstrap'
import { Button, TextField } from "@material-ui/core"; 
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import QueueMusicRoundedIcon from '@material-ui/icons/QueueMusicRounded';

function MyNav(props) {
return (
	<Navbar  bg="light"  expand="lg">
		<Navbar.Toggle  aria-controls="basic-navbar-nav"  />
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav  className="mr-auto">
			<Link to="/">
				<TuneRoundedIcon/>
				{/* Selekta */}
				</Link>
				{
					props.user ? (
            <div>		
           
            {/* <Link  style={{marginLeft: '10px'}}  to="/random">Random</Link> */}
			{/* <Link  style={{marginLeft: '10px'}}  to="/search">Search</Link> */}

			
			<Link  style={{marginLeft: '10px'}}  to="/profile">
				<QueueMusicRoundedIcon/>
				{/* Profile */}
			</Link>			

            <Link  style={{marginLeft: '10px'}} onClick={props.onLogOut}>
				<ExitToAppRoundedIcon/>
				{/* Logout */}
			</Link>

            </div>
					) : (
						<>
							{/* <Link  style={{marginLeft: '10px'}}  to="/signin">SignIn</Link>
							<Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
							<Link  style={{marginLeft: '10px'}}  to="/testemmy">Emmy </Link>
							<Link  style={{marginLeft: '10px'}}  to="/random">Random</Link>
							<Link  style={{marginLeft: '10px'}}  to="/search">Search</Link> */}
							
					
					</>
					)
				}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}
export  default MyNav