import { Col } from 'react-bootstrap';

export const Carte = ({ title, description, date, affiche, type, type_link, link, diffusion, labo }) => {

    return (
        <Col className="carte">
            <div className="proj-div">
                <img src={require('../assets/images/work/work_' + affiche + '.png')} alt="Work" />
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <h5>{type}</h5>
                    <h6>{date}</h6>
                    <h6>Labo: {labo}</h6>
                    {/* <div className="proj-descr">{description}</div> */}
                    <a href={link} target="_blank" className="proj-btn" rel="noreferrer"><span className="proj-btn-span">{type_link}</span></a>
                </div>
            </div>
        </Col>
    )
};