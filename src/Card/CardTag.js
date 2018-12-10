import React, { Component } from 'react';

class CardUser extends Component {

  render() {
    return (
      <>
        {/* 카드 :: 태그 */}
        <div className="tag">
          <span className="list">
            <a href="#">#태그1</a>
            <a href="#">#태그2</a>
          </span>
          <span className="more">+1개 관심사</span>
        </div>
      </>
    );
  }
}

export default CardUser;