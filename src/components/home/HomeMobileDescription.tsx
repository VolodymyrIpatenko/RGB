import { Breakpoint } from 'react-socks';
import { Description, MobileHome } from './Home.styled';

const MobileHomeComponent = () => {
  return (
    <Breakpoint small down>
      <MobileHome></MobileHome>
      <Description>
        Салон та школа колористики «RGB» — це не просто салон у серці міста, де створюється краса, а
        й справжнісінький хаб, в якому готують неймовірних професіоналів у б’юті сфері. З гордістю
        повідомляємо, що по парним числам на базі «RGB» проводиться авторське групове навчання з
        колористики, де досвідчені та висококваліфіковані фахівці із задоволенням розкривають
        секрети успішної роботи. І вже зараз ви маєте можливість долучитись до групи та опанувати
        неймовірну професію!
      </Description>
    </Breakpoint>
  );
};

export default MobileHomeComponent;
