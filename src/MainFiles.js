import React, { Component } from "react";
import { Container, Navbar, Nav, NavDropdown, Button, Form, FormControl } from 'react-bootstrap';

const Header = () => {
	return (
	<Navbar bg="dark" expand="lg" variant="dark">
		<Container>
			<Navbar.Brand href="#home">Home</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#link">Link</Nav.Link>
					<NavDropdown title="Dropdown" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					</NavDropdown>
				</Nav>
				<Form inline>
					<FormControl type="text" placeholder="Search" className="mr-sm-2" />
					<Button variant="outline-primary">Search</Button>
				</Form>
			</Navbar.Collapse>
		</Container>
	</Navbar>
	)
};

const Footer = () => {
	return (
		<footer className="footer">
			<Navbar bg="light" variant="light">
				<Container>
					<Nav className="mr-auto">
						<Nav.Link href="#home" color="muted">Home</Nav.Link>
						<Nav.Link href="#link" color="muted">Link</Nav.Link>
						<Nav.Link href="#about" color="muted">About Us</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</footer>
	)
};

export { Footer , Header } ; //new
