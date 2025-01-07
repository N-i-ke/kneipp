import React from 'react';
import c03title from '../assets/c03_title.png';
import c03buble from '../assets/c03_bubble.png';
import c03img from '../assets/c03_img1.png';
import c03img2 from '../assets/c03_img2.png';
import c03catch from '../assets/c03_catch.png';
import c03catchSP from '../assets/c03_catch_sp.png';

const Bath: React.FC = () => {
  return (
    <section className="bath">
      <div className="bath__inner">
        <div className="title">
          <img src={c03title} alt="Bath Title" />
        </div>
        <div className="top__img">
          <div className="left">
            <img src={c03buble} alt="Bubble" />
          </div>
          <div className="right">
            <img src={c03img} alt="Bath Image 1" />
          </div>
        </div>
        <div className="bottom__img">
          <div className="left">
            <img src={c03catch} alt="Catch" />
            <img className="none" src={c03catchSP} alt="Catch SP" />
          </div>
          <div className="right">
            <img src={c03img2} alt="Bath Image 2" />
          </div>
        </div>
        <button className="btn">
          <a href="#">商品ページ</a>
        </button>
      </div>
    </section>
  );
}

export default Bath;
