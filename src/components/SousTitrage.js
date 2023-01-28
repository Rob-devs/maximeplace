import { WorkSection } from './utils/workSection';

export const SousTitrage = () => {
    return (<WorkSection list={require('./utils/sort.js')(require('../profil/work.js').sous_titrages)} titre="Sous-titrages" />);
}