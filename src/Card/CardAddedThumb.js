import React, { Component } from 'react';
import {BrowserRouter as Link} from 'react-router-dom';

class CardUser extends Component {

  render() {
    return (
      <>
        <Link to="/commentView/1">
          {/* 카드 :: 첨부 - 이미지/동영상 : 썸네일형태 */}
          <div className="added thumb thumbratio_w thumbtype_5">
              <div className="box clear">
                <div className="wrap">
                  <div className="inner"><img src="https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg" alt="" /></div>
                </div>
                <div className="wrap">
                  <div className="inner format_video"><img src="https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg" alt="" /></div>
                  <div className="inner format_gif"><img src="https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg" alt="" /></div>
                  <div className="inner"><img src="https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg" alt="" /></div>
                  <div className="inner"><img src="https://cdn.2kgames.com/civilization.com/RF-Cree/RF-Cree-leader.jpg" alt="" /></div>
                  <span className="more">+1</span>
                </div>
              </div>
            </div>
          </Link>
      </>
    );
  }
}

export default CardUser;