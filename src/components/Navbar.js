import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

export default class NavBar extends Component {
    render() {
        return (
            <div className='demon-wrapper'>
            <React.Fragment>
                <Navbar bg="light">
                    <Container>
                        <Navbar.Brand href="#home">Demon Slayer</Navbar.Brand>
                    </Container>
                    <Nav>
                        <Nav.Link href="#">Characters</Nav.Link>
                    </Nav>
                </Navbar>
                


                <Outlet />

            </React.Fragment>
            </div>

        )
    }
}
