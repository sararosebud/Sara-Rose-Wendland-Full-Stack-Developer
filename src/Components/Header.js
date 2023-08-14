import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    let activeStyle = {
        color: "#fff",
    };
    const [expanded, setExpanded] = useState(false);

    
    

    return (
        
        <div className='header'>
            <Navbar expand='lg' fixed='top'>
                <Navbar.Brand className='navbarBrand'>Sara Rose Wendland</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
                <Navbar.Collapse className='justify-content-end' in={expanded}>
                    <Nav className='ml-auto nav-list'>
                        <NavLink to='/' onClick={() => setExpanded(false)} className='nav-link' style={({isActive}) => (isActive ? activeStyle : undefined)}>Home</NavLink>
                        <NavLink to='/about' onClick={() => setExpanded(false)} className='nav-link' style={({isActive}) => (isActive ? activeStyle : undefined)}>About</NavLink>
                        <NavLink to='/projects' onClick={() => setExpanded(false)} className='nav-link' style={({isActive}) => (isActive ? activeStyle : undefined)}>Projects</NavLink>
                        <NavLink to='/resume' onClick={() => setExpanded(false)} className='nav-link' style={({isActive}) => (isActive ? activeStyle : undefined)}>Resume</NavLink>
                        <NavLink to='/contact' onClick={() => setExpanded(false)} className='nav-link' style={({isActive}) => (isActive ? activeStyle : undefined)}>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        </div>
    );
};

export default Header;