import Home from './components/home/Home';
import GlobalStyle from './Global.styled.js';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />

      <Home />
    </>
  );
};

export default App;
