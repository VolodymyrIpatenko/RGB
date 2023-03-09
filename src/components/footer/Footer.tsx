import { Footer } from './Footer.styled';
import { LogoImg } from '../header/Header.styled';
import { Link } from 'react-router-dom';

const PageFooter = () => {
  return (
    <Footer>
      <Link title="На головну" to="/">
        <LogoImg src={process.env.PUBLIC_URL + '/logo.JPG'} alt="логотип" />
      </Link>
    </Footer>
  );
};

export default PageFooter;
