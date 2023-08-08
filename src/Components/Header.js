import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Navbar expand='lg' fixed='bottom'>
                <Navbar.Brand>Sara Rose Wendland</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav className='ml-auto'>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/projects'>Projects</NavLink>
                        <NavLink to='/resume'>Resume</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    );
};

export default Header;