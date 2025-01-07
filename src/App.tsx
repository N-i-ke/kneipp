import React from 'react';
import Main from './components/Main';
import MainBottom from './components/MainBottom';
import Salt from './components/Salt';
import Bath from './components/Bath';
import Shop from './components/Shop';
import Footer from './components/Footer';
import './styles/style.css';
import './styles/reset.css';

const App: React.FC = () => {
  return (
    <div>
      <Main />
      <MainBottom />
      <Salt />
      <Bath />
      <Shop />
      <Footer />
    </div>
  );
}

export default App;
