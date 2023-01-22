import PP from "../profil/PP.png";
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
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(300);
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
                        Traducteur audiovisuel depuis deux ans, je cherche à m'investir dans des projets de doublage,<br />
                        de sous-titrage et de voice over. Je propose également du SME et de la traduction de jeux vidéo.<br />
                        Je cherche avant tout des projets porteurs de sens, qui me passionnent, et dans lesquels<br />
                        je peux m'investir pleinement.
                    </p>
                </div>
            </div>
        </section>
    )
}