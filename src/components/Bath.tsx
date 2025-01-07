import React from 'react';

const Bath: React.FC = () => {
  return (
    <section className="bath">
      <div className="bath__inner">
        <div className="title">
          <img src="img/c03_title.png" alt="Bath Title" />
        </div>
        <div className="top__img">
          <div className="left">
            <img src="img/c03_bubble.png" alt="Bubble" />
          </div>
          <div className="right">
            <img src="img/c03_img1.png" alt="Bath Image 1" />
          </div>
        </div>
        <div className="bottom__img">
          <div className="left">
            <img src="img/c03_catch.png" alt="Catch" />
            <img className="none" src="img/c03_catch_sp.png" alt="Catch SP" />
          </div>
          <div className="right">
            <img src="img/c03_img2.png" alt="Bath Image 2" />
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
