import { WorkSection } from './utils/workSection';

export const JeuxVideo = () => {
    return (<WorkSection list={require('./utils/sort.js')(require('../profil/work.js').jeux_video)} titre="Jeux vidéos" />);
}