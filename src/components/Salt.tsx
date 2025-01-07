import React from 'react';

const Salt: React.FC = () => {
  return (
    <section className="salt">
      <div className="salt__inner">
        <div className="box">
          <div className="box__inner">
            <div className="title">
              <img className="block" src="img/c02_title.png" alt="Salt Title" />
              <img className="none" src="img/c02_title_sp.png" alt="Salt Title SP" />
            </div>
            <div className="title__bottom">
              <img className="block" src="img/c02_img1.png" alt="Salt Image 1" />
              <img className="none" src="img/c02_img1_sp.png" alt="Salt Image 1 SP" />
            </div>
            <div className="link">
              <a href="#">
                <img src="img/c02_bnr.png" alt="Banner" />
              </a>
            </div>
            <div className="bottom__box">
              <div className="yuzu">
                <figure>
                  <img src="img/c02_yuzu.png" alt="Yuzu" />
                </figure>
                <div className="frame">
                  <ul>
                    <li>血行促進</li>
                    <li>冷え症予防</li>
                    <li>むくみ予防</li>
                  </ul>
                  <div className="link">
                    <a href="#">
                      <img src="img/c02_btn.png" alt="Button" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="ginger">
                <figure>
                  <img src="img/c02_ginger.png" alt="Ginger" />
                </figure>
                <div className="frame">
                  <ul>
                    <li>血行促進</li>
                    <li>発汗作用</li>
                    <li>鎮痛作用</li>
                  </ul>
                  <div className="link">
                    <a href="#">
                      <img src="img/c02_btn.png" alt="Button" />
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
