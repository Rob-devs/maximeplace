import { WorkSection } from './utils/workSection';

export const VoiceOver = () => {
    return (<WorkSection list={require('./utils/sort.js')(require('../profil/work.js').voice_over)} titre="Voice over " />);
}