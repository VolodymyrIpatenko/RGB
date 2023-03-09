import Home from './components/home/Home';
import SharedLayout from './components/layout/Layout';
import GlobalStyle from './Global.styled.js';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SharedLayout>
        <Home />
      </SharedLayout>
    </>
  );
};

export default App;
