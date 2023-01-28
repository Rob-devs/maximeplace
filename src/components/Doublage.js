import { WorkSection } from './utils/workSection';

export const Doublage = () => {
    return (<WorkSection list={require('./utils/sort.js')(require('../profil/work.js').doublages)} titre="Doublages" />);
}