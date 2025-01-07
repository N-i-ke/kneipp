import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__inner">
        <div className="top">
          <div className="top__inner">
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Kneipp</a></li>
            </ul>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom__inner">
            <a href="#">プライバシーポリシー</a>
            <div className="bottom">Copyright © 2018 Kneipp Japan. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
