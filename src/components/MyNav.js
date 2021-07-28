import React from  'react'
import {Link} from  'react-router-dom'
import {Navbar, Nav} from  'react-bootstrap'
import { Button } from "@material-ui/core";

function MyNav(props) {
return (
	<Navbar  bg="light"  expand="lg">
		<Navbar.Toggle  aria-controls="basic-navbar-nav"  />
		<Navbar.Collapse  id="basic-navbar-nav">
			<Nav  className="mr-auto">
			
			<Button>	<Link  to="/">Selekta</Link> </Button>
				{
					props.user ? (
            <div>		
           <Button> <Link  style={{marginLeft: '10px'}}  to="/profile">Profile</Link> </Button>
            {/* <Link  style={{marginLeft: '10px'}}  to="/random">Random</Link> */}
						{/* <Link  style={{marginLeft: '10px'}}  to="/search">Search</Link> */}
       <Button>     <Link  style={{marginLeft: '10px'}} onClick={props.onLogOut}>Logout</Link> </Button>
            </div>
					) : (
						<>
							{/* <Link  style={{marginLeft: '10px'}}  to="/signin">SignIn</Link>
							<Link  style={{marginLeft: '10px'}}  to="/signup">SignUp</Link> */}
							{/* <Link  style={{marginLeft: '10px'}}  to="/testemmy">Emmy </Link>
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