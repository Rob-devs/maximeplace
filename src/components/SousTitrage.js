import { Col, Container, Row } from 'react-bootstrap';
import { Carte } from './Carte';
import imgDoublage1 from '../assets/images/doublage/imgDoublage1.png';

export const SousTitrage = () => {

    var soustitrages = [
        {
            title: "Lookism",
            description: "Script FR épisodes 1 et 2 dqzhdnbyhzqdh zuyqhd uzqhd uzhu dhzu dzud z huz hu zhuzh uefe",
            date: "12/2022",
            affiche: imgDoublage1,
        },
        {
            title: "Oeuvre",
            description: "Script FR épisodes 1 et 2 dqzhdnbyhzqdh zuyqhd uzqhd uzhu dhzu dzud z huz hu zhuzh uefe",
            date: "12/2022",
            affiche: imgDoublage1,
        },
        {
            title: "A",
            description: "Script FR épisodes 1 et 2 dqzhdnbyhzqdh zuyqhd uzqhd uzhu dhzu dzud z huz hu zhuzh uefe",
            date: "12/2022",
            affiche: imgDoublage1,
        },
        {
            title: "z",
            description: "Script FR épisodes 1 et 2 dqzhdnbyhzqdh zuyqhd uzqhd uzhu dhzu dzud z huz hu zhuzh uefe",
            date: "12/2022",
            affiche: imgDoublage1,
        },
        {
            title: "FEFE",
            description: "Script FR épisodes 1 et 2 dqzhdnbyhzqdh zuyqhd uzqhd uzhu dhzu dzud z huz hu zhuzh uefe",
            date: "12/2022",
            affiche: imgDoublage1,
        },
        {
            title: "FEF EF EF E E FEFE",
            description: "Script FR épisodes 1 et 2 dqzhdnbyhzqdh zuyqhd uzqhd uzhu dhzu dzud z huz hu zhuzh uefe",
            date: "12/2022",
            affiche: imgDoublage1,
        },
    ];

    soustitrages.sort(function (a, b) {
        const nameA = a.title.toUpperCase(); // ignore upper and lowercase
        const nameB = b.title.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        return 0;
    });

    return (
        <section className='travaux'>
            <Container>
                <h2>Sous-titrages</h2>
                <Col>
                    <Row>
                        {
                            soustitrages.map((soustitrage, index) => {
                                return (
                                    <Carte key={index} {...soustitrage} />
                                )
                            })
                        }
                    </Row>
                </Col>
            </Container>
        </section>
    )
}