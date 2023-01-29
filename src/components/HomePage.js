import { NavbarComp } from './NavbarComp';
import { Banner } from './Banner';
import bg_banner from '../assets/images/backgrounds/bg_banner.png';

export const HomePage = () => {
    return (
        <div className="bg_banner" style={{
            backgroundImage: `url(${bg_banner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
            <NavbarComp />
            <Banner />
          </div>
        );
}