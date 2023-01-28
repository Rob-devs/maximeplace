import { Col } from 'react-bootstrap';

export const Carte = ({ title, description, date, affiche, type, type_link, link, diffusion, labo }) => {

    return (
        <Col className="carte">
            <div className="proj-div">
                <img className="proj-img" src={require('../assets/images/work/' + affiche + '.png')} alt="Work" />
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <h5>{type} - {date}</h5>
                    <h6>Labo: {labo}</h6>
                    <h6>Diffusion: {diffusion}</h6>
                    <div className="proj-descr">{description}</div>
                    <a href={link} target="_blank" className="proj-btn"><span className="proj-btn-span">{type_link}</span></a>
                </div>
            </div>
        </Col>
    )
};