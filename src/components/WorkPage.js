import { Doublage } from './Doublage';
import { SousTitrage } from './SousTitrage';
import { VoiceOver } from './VoiceOver';
import { JeuxVideo } from './JeuxVideo';
import { SME } from './SME';
import bg_doublage from '../assets/images/backgrounds/bg_doublage.png'
import bg_soustitrage from '../assets/images/backgrounds/bg_soustitrage.png'
import bg_voiceover from '../assets/images/backgrounds/bg_voiceover.png'
import bg_jeuxvideo from '../assets/images/backgrounds/bg_jeuxvideo.png'
import bg_sme from '../assets/images/backgrounds/bg_sme.png'

import { Nav, Row, Tab, Col, Container } from 'react-bootstrap';
import { useState, useEffect } from "react";

export const WorkPage = () => {

    const [page, setPage] = useState('doublage');
    
    return (
        <section className="fullpage-nav travaux" id="travaux">
            <Container>
                <Row>
                    <Col className='proj-col'>
                    <h2>Mes travaux</h2>
                    <Tab.Container id="proj-tab" defaultActiveKey="doublage">
                        <Nav variant="pills" defaultActiveKey="doublage" style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                            <Nav.Item>
                                <Nav.Link eventKey="doublage" onClick={() => setPage('doublage')}>Doublages</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="soustitrage" onClick={() => setPage('soustitrage')}>Sous-titrages</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="voiceover" onClick={() => setPage('voiceover')}>Voice over</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="jeuxvideo" onClick={() => setPage('jeuxvideo')}>Jeux vidéos</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sme" onClick={() => setPage('sme')}>Sourds et malentendants</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                        <Tab.Pane eventKey="doublage">
                            <Doublage />
                        </Tab.Pane>
                        <Tab.Pane eventKey="soustitrage">
                            <SousTitrage />
                        </Tab.Pane>
                        <Tab.Pane eventKey="voiceover">
                            <VoiceOver />
                        </Tab.Pane>
                        <Tab.Pane eventKey="jeuxvideo">
                            <JeuxVideo />
                        </Tab.Pane>
                        <Tab.Pane eventKey="sme">
                            <SME />
                        </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="proj-img-5" src={bg_sme}/>
            <img className="proj-img-4" src={bg_jeuxvideo}/>
            <img className="proj-img-3" src={bg_voiceover}/>
            <img className="proj-img-2" src={bg_soustitrage}/>
            <img className="proj-img-1" src={bg_doublage}/>
        </section>        
        );
}