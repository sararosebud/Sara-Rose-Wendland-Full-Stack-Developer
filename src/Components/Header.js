import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    let activeStyle = {
        color: "#fff",
    };

    return (
        <div className='header'>
            <Navbar expand='lg' fixed='top'>
                <Navbar.Brand className='navbarBrand'href='/Sara-Rose-Wendland-Full-Stack-Developer/'>Sara Rose Wendland</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Nav className='ml-auto nav-list'>
                        <NavLink to='/' className='nav-link' style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                        <NavLink to='/about' className='nav-link' style={({isActive}) => (isActive ? activeStyle : undefined)}>About</NavLink>
                        <NavLink to='/projects' className='nav-link' style={({isActive}) => (isActive ? activeStyle : undefined)}>Projects</NavLink>
                        <NavLink to='/resume' className='nav-link' style={({isActive}) => (isActive ? activeStyle : undefined)}>Resume</NavLink>
                        <NavLink to='/contact' className='nav-link' style={({isActive}) => (isActive ? activeStyle : undefined)}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    );
};

export default Header;