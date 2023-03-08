import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Gallery from './components/gallery/Gallery';
import SharedLayout from './components/layout/Layout';
import GalleryReact from './components/sportbar/Sportbar';
import GlobalStyle from './Global.styled.js';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sportbar" element={<GalleryReact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
