import React from 'react';
import c02title from '../assets/c02_title.png';
import c02titleSP from '../assets/c02_title_sp.png';
import c02img1 from '../assets/c02_img1.png';
import c02img1SP from '../assets/c02_img1_sp.png';
import c02bnr from '../assets/c02_bnr.png';
import c02yuzu from '../assets/c02_yuzu.png';
import c02btn from '../assets/c02_btn.png';
import c02ginger from '../assets/c02_ginger.png';

const Salt: React.FC = () => {
  return (
    <section className="salt">
      <div className="salt__inner">
        <div className="box">
          <div className="box__inner">
            <div className="title">
              <img className="block" src={c02title}  alt="Salt Title" />
              <img className="none" src={c02titleSP} alt="Salt Title SP" />
            </div>
            <div className="title__bottom">
              <img className="block" src={c02img1} alt="Salt Image 1" />
              <img className="none" src={c02img1SP} alt="Salt Image 1 SP" />
            </div>
            <div className="link">
              <a href="#">
                <img src={c02bnr} alt="Banner" />
              </a>
            </div>
            <div className="bottom__box">
              <div className="yuzu">
                <figure>
                  <img src={c02yuzu} alt="Yuzu" />
                </figure>
                <div className="frame">
                  <ul>
                    <li>血行促進</li>
                    <li>冷え症予防</li>
                    <li>むくみ予防</li>
                  </ul>
                  <div className="link">
                    <a href="#">
                      <img src={c02btn} alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ginger">
                <figure>
                  <img src={c02ginger} alt="Ginger" />
                </figure>
                <div className="frame">
                  <ul>
                    <li>血行促進</li>
                    <li>発汗作用</li>
                    <li>鎮痛作用</li>
                  </ul>
                  <div className="link">
                    <a href="#">
                      <img src={c02btn} alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Salt;
