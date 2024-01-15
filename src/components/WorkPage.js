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
import { useState } from "react";

export const WorkPage = () => {

    const [page, setPage] = useState(bg_doublage);
    
    return (
        <section className="fullpage-nav travaux" id="travaux" style={{
            backgroundImage: `url(${page})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
            <Container>
                <Row>
                    <Col className='proj-col'>
                    <h2>Quelques projets...</h2>
                    <Tab.Container id="proj-tab" defaultActiveKey="doublage">
                        <Nav variant="pills" className="nav" defaultActiveKey="doublage" style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                            <Nav.Item>
                                <Nav.Link eventKey="doublage" onClick={() => setPage(bg_doublage)}>Doublage</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="soustitrage" onClick={() => setPage(bg_soustitrage)}>Sous-titrage</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="voiceover" onClick={() => setPage(bg_voiceover)}>Voice over</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="jeuxvideo" onClick={() => setPage(bg_jeuxvideo)}>Jeux vidéo</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="sme" onClick={() => setPage(bg_sme)}>Sourd et malentendant</Nav.Link>
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
          </section>        
        );
}