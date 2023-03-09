import { Breakpoint } from 'react-socks';
import { Description, HomeSection } from './Home.styled';
import Typed from 'react-typed';
import { titleStyle } from './Home';

const HomeComponent = () => {
  return (
    <Breakpoint large up>
      <Typed style={titleStyle.title} strings={['RGB']} typeSpeed={1100} showCursor={false} />
      <HomeSection>
        <Description>
          Салон та школа колористики «RGB» — це не просто салон у серці міста, де створюється краса,
          а й справжнісінький хаб, в якому готують неймовірних професіоналів у б’юті сфері. З
          гордістю повідомляємо, що по парним числам на базі «RGB» проводиться авторське групове
          навчання з колористики, де досвідчені та висококваліфіковані фахівці із задоволенням
          розкривають секрети успішної роботи. І вже зараз ви маєте можливість долучитись до групи
          та опанувати неймовірну професію!
        </Description>
      </HomeSection>
    </Breakpoint>
  );
};

export default HomeComponent;
