import { Row } from 'react-bootstrap';
import { Carte } from '../Carte';

export const WorkSection = ({ list, titre }) => {
    return (
        <Row>
            {
                list.map((list, index) => {
                    return (
                        <Carte key={index} {...list} />
                    )
                })
            }
        </Row>
    )
}