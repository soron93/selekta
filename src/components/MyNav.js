import React from  'react'
import {Link} from  'react-router-dom'
import {Navbar, Nav} from  'react-bootstrap'



function MyNav(props) {
return (
	<Navbar  bg="light"  expand="lg">
		<Navbar.Toggle  aria-controls="basic-navbar-nav"  />
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav  className="mr-auto">
				<Link  to="/">Selekta</Link>
				{
					props.user ? (
						<button onClick={props.onLogOut}>Logout</button>
					) : (
						<>
							<Link  style={{marginLeft: '10px'}}  to="/signin">SignIn</Link>
							<Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link>
							<Link  style={{marginLeft: '10px'}}  to="/testemmy">Emmy </Link>
							<Link  style={{marginLeft: '10px'}}  to="/shade">Shade</Link>
							<Link  style={{marginLeft: '10px'}}  to="/random">Random</Link>
							<Link  style={{marginLeft: '10px'}}  to="/search">Search</Link>
							<Link  style={{marginLeft: '10px'}}  to="/profile">Profile</Link>
							<Link  style={{marginLeft: '10px'}}  to="/spotifylogin">Spotify Login</Link>
						</>
					)
				}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
	)
}
export  default MyNav