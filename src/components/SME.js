import { WorkSection } from './utils/workSection';

export const SME = () => {
    return (<WorkSection list={require('./utils/sort.js')(require('../profil/work.js').sme)} titre="Sourds et malentendants" />);
}