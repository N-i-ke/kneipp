import React from 'react';

const Main: React.FC = () => {
  return (
    <section className="main">
      <div className="main__inner">
        <div className="logo">
          <img src="img/logo.png" alt="Logo" />
        </div>
        <div className="title">
          <img src="img/main_title.png" alt="Main Title" />
          <img className="none" src="img/main_title_sp.png" alt="Main Title SP" />
        </div>
        <div className="sub__title">
          <img src="img/main_pdtitle.png" alt="Product Title" />
        </div>
      </div>
    </section>
  );
}

export default Main;
