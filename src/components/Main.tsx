import React from 'react';
import logo from '../assets/logo.png';
import mainTitle from '../assets/main_title.png';
import mainTitleSp from '../assets/main_title_sp.png';
import productTitle from '../assets/main_pdtitle.png';

const Main: React.FC = () => {
  return (
    <section className="main">
      <div className="main__inner">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="title">
          <img src={mainTitle} alt="Main Title" />
          <img className="none" src={mainTitleSp} alt="Main Title SP" />
        </div>
        <div className="sub__title">
          <img src={productTitle} alt="Product Title" />
        </div>
      </div>
    </section>
  );
}

export default Main;
