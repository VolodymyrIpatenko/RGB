import { GiHamburgerMenu } from 'react-icons/gi';
import { NavigationLink, MobileMenu } from './Header.styled';
import { useToggle } from '../hooks/customHooks';
import { Breakpoint } from 'react-socks';
import SocialComponent from './SocialsComponent';
import navigation from '../common/Navigation';
import { Link } from 'react-router-dom';

export default function MobileMenuComponent() {
  const [isOpenMobileMenu, setMobileMenuOpen] = useToggle();

  return (
    <MobileMenu>
      <Breakpoint small down>
        <GiHamburgerMenu onClick={() => setMobileMenuOpen.toggle()}></GiHamburgerMenu>
      </Breakpoint>
      {isOpenMobileMenu ? (
        <MobileMenu>
          {navigation.map(({ id, title, path }) => (
            <li key={id}>
              <NavigationLink to={path}>{title}</NavigationLink>
            </li>
          ))}
          <SocialComponent />
        </MobileMenu>
      ) : null}
    </MobileMenu>
  );
}
