import { Col } from 'react-bootstrap';

export const Carte = ({ title, description, date, affiche }) => {
    return (
        <Col sm={4} md={3} className="carte">
            <div className="proj-img">
                <img src={affiche} width='100%' />
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <h5>{date}</h5>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
};