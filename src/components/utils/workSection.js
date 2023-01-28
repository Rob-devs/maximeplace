import { Col, Container, Row } from 'react-bootstrap';
import { Carte } from '../Carte';

export const WorkSection = ({ list, titre }) => {
    return (
        <section className='travaux'>
            <Container>
                <h2>{titre}</h2>
                <Col>
                    <Row>
                        {
                            list.map((list, index) => {
                                return (
                                    <Carte key={index} {...list} />
                                )
                            })
                        }
                    </Row>
                </Col>
            </Container>
        </section>
    )
}