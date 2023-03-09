import { Outlet, Link } from 'react-router-dom';
import { Header, NavigationLink, Nav, Wrap, LogoImg, NavList } from './Header.styled';
import SocialComponent from './SocialsComponent';

const HeaderComponent: React.FC = () => {
  return (
    <>
      <Header>
        <Link title="На головну" to="/">
          <LogoImg src={process.env.PUBLIC_URL + '/logo.JPG'} alt="логотип" />
        </Link>
        <SocialComponent />
      </Header>
    </>
  );
};

export default HeaderComponent;
