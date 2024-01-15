/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import navIcon1 from "../assets/images/linkedin.svg";
import navIcon2 from "../assets/images/ataa.svg";
import logo from "../assets/images/logo.png";
import CV_FR_MaximePlace from '../profil//CV_FR_MaximePlace.pdf';

export const NavbarComp = () => {

    const [activeLink, setActiveLink] = useState('accueil');
    const [scrolled, setScrolled] = useState(false);

    const onScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }

        if (window.scrollY > 60) {
            onUpdateActiveLink('travaux');
        }
        else {
            onUpdateActiveLink('accueil');
        }
    }

    window.addEventListener("scroll", onScroll);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    const [downloadUrl] = useState(CV_FR_MaximePlace);

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
                        <Nav.Link className={activeLink === 'accueil' ? 'active-item' : 'item'} href="#accueil">Accueil</Nav.Link>
                        <Nav.Link className='item' onClick={() => { handleDownload(); }} download={CV_FR_MaximePlace}>CV</Nav.Link>
                        <Nav.Link className={activeLink === 'travaux' ? 'active-item' : 'item'} href="#travaux">Projets</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a onClick={() => {
                                window.open("https://www.linkedin.com/in/maxime-place-170942b4/", '_blank').focus();
                            }}><img src={navIcon1} alt="LinkedIN" /></a>
                            <a onClick={() => {
                                window.open("https://beta.ataa.fr/annuaire/M.Place", '_blank').focus();
                            }}><img src={navIcon2} alt="ATAA" /></a>
                        </div>
                        <a className="btn" href="#contact">Contact</a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}