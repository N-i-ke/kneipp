import React from 'react';
import shopTitle from '../assets/shop_title.png';
import shopTitleSp from '../assets/shop_title_sp.png';
import shopBtn from '../assets/shop_btn.png';

const Shop: React.FC = () => {
  return (
    <section className="shop">
      <div className="shop__inner">
        <div className="box">
          <div className="box__inner">
            <div className="title">
              <img src={shopTitle} alt="Shop Title" />
              <img src={shopTitleSp} alt="Shop Title SP" className="none" />
            </div>
            <div className="sub__title">主な取り扱い店</div>
            <div className="text">
              ココカラファイン (セイジョー、ドラッグセガミ、ジップドラッグ、 LIFORT、クスリのコダマ等)、 
              <br />
              トモズなどのドラッグストアや、バラエティショップ。
            </div>
            <div className="add">
              ※一部の店舗でお取り扱いがない場合がございます。
            </div>
            <div className="btn">
              <a href="">
                <img src={shopBtn} alt="Shop Button" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
