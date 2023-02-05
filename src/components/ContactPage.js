import { email, year, tel, loc } from '../profil/infos';
import { Row, Col } from 'react-bootstrap';
import imgLoc from '../assets/images/contact/loc.png';
import imgMail from '../assets/images/contact/mail.png';
import imgTel from '../assets/images/contact/tel.png';

export const ContactPage = () => {

  const sendEmail =() => {
    document.location = "mailto:"+email;
  }

    
    return (<section className="fullpage-nav contact" id="contact">
        <h2>Me contacter</h2>
        <div className="email" >
          <a href="#contact" className="btn" onClick={() => sendEmail()}>Envoyez-moi un mail</a>
        </div>
        <div className='infos'>
          <Row>
            <Col>
              <img src={imgLoc} alt="Localisation"/>
              <h4>{loc}</h4>
            </Col>
            <Col>
              <img src={imgMail} alt="Mail"/>
              <h4>{email}</h4>
            </Col>
            <Col>
              <img src={imgTel} alt="Téléphone"/>
              <h4>{tel}</h4>
            </Col>
          </Row>
        </div>
        <div className='footer'>{`© ` +year +` Maxime Place`}</div>
    </section>);
}