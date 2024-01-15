import PP from "../profil/PP.png";
import go_down from "../assets/images/go_down.png";
import { useState, useEffect } from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["doublage", "sous-titrage", "voice over", "jeu vidéo"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text]) // eslint-disable-line react-hooks/exhaustive-deps

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            if (delta === 2000) {
                setDelta(prevDelta => prevDelta / 4);
            } else {
                setDelta(prevDelta => prevDelta / 1.8);
            }
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(700);
        } else if (!isDeleting && updatedText.length === 1) {
            setDelta(130);
        }
    }

    return (
        <section className="fullpage-nav" id="accueil">
            <hgroup className="home-title">
                <h1>MAXIME PLACE</h1>
                <h2>{`Je travaille sur votre prochain `}<span className="wrap">{text}</span></h2>
            </hgroup>
            <div className="image-profil">
                <img src={PP} id="profil-picture" className="rounded-circle mx-auto d-block" width="200" alt="Me" />
            </div>
            <div>
                <div>
                    <p>
                        Auteur de doublage et de sous-titrage depuis 4 ans, je propose également de la voice over,<br />
                        du SME et de la traduction de jeux vidéo.<br />
                        Je cherche avant tout des projets porteurs de sens, qui me passionnent et dans lesquels je peux m'investir pleinement.<br />
                        Mon objectif est avant tout d'être au service d'une œuvre pour la transmettre le plus naturellement possible à votre audience.
                    </p>
                </div>
            </div>
            <a className="image-go-down" href="#travaux" >
                <img src={go_down} width="120" alt="Go down" />
            </a>
        </section>
    )
}