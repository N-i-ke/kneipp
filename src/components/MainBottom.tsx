import React from 'react';
import c01title from '../assets/c01_title.png';

const MainBottom: React.FC = () => {
  return (
    <section className="main__bottom">
      <div className="main__bottom__inner">
        <div className="title">
          <img src={c01title} alt="C01 Title" />
        </div>
        <div className="title__text">
          <p className="text">
            こだわりの天然岩塩にユズとジンジャーの天然植物成分を配合したバスソルト。
            <br />爽やかでほろ苦いユズに、ピリッとスパイシーなジンジャーをブレンドした香りで、
            <br />全身にぬくもり巡る発汗バスタイムを。
          </p>
          <div className="price">850g : 2,400円 (税抜) 50g 150円 (税抜) </div>
        </div>
        <button className="green">
          <a href="">ご購入はこちら</a>
        </button>
        <button className="orange">
          <a href="">詳しく見る</a>
        </button>
      </div>
    </section>
  );
}

export default MainBottom;
