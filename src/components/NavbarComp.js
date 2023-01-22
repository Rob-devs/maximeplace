import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from "react";
import navIcon1 from "../assets/images/linkedin.svg";
import navIcon2 from "../assets/images/ataa.svg";
import logo from "../assets/images/logo.png";
import CV_FR_MaximePlace from './CV_FR_MaximePlace.pdf';

const NavbarComp = () => {

    const [activeLink, setActiveLink] = useState('accueil');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const [downloadUrl, setDownloadUrl] = useState(CV_FR_MaximePlace);

    const handleDownload = async () => {
        const response = await fetch(downloadUrl);
        const data = await response.blob();

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(data);
        link.download = 'CV_FR_MaximePlace.pdf';
        link.click();
    };

    return (
        <Navbar className={scrolled ? 'scrolled' : ''} sticky="top" bg="navbar" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href='#accueil'>
                    <img className="logo" src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className={activeLink === 'accueil' ? 'active item' : 'item'} href="#accueil" onClick={() => onUpdateActiveLink('accueil')}>Accueil</Nav.Link>
                        <Nav.Link className={activeLink === 'cv' ? 'active item' : 'item'} onClick={() => { onUpdateActiveLink('cv'); handleDownload(); }} download={CV_FR_MaximePlace}>CV</Nav.Link>
                        <NavDropdown title="Travaux" id={activeLink === 'travail' ? 'collasible-nav-dropdown' : 'item'}>
                            <NavDropdown.Item href="#doublage" onClick={() => onUpdateActiveLink('travail')}>Doublage</NavDropdown.Item>
                            <NavDropdown.Item href="#sous-titrage" onClick={() => onUpdateActiveLink('travail')}>Sous-titrage</NavDropdown.Item>
                            <NavDropdown.Item href="#voice-over" onClick={() => onUpdateActiveLink('travail')}>Voice over</NavDropdown.Item>
                            <NavDropdown.Item href="#jeux-video" onClick={() => onUpdateActiveLink('travail')}>Jeux vidéo</NavDropdown.Item>
                            <NavDropdown.Item href="#sme" onClick={() => onUpdateActiveLink('travail')}>SME</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#linkedin" onClick={() => {
                                window.open("https://www.linkedin.com/in/maxime-place-170942b4/", '_blank').focus();
                            }}><img src={navIcon1} alt="LinkedIN" /></a>
                            <a href="#ataa" onClick={() => {
                                window.open("https://beta.ataa.fr/annuaire/M.Place", '_blank').focus();
                            }}><img src={navIcon2} alt="ATAA" /></a>
                        </div>
                        <button className="vvd" onClick={() => console.log('connect')}><span>Contact</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp