import React, { Component } from 'react';

class CardUser extends Component {

  render() {
    return (
      <>
        {/* 카드 :: 첨부 - 페이지 링크형태 */}
        <div className="added share page">
          <a href="#" target="_blank">
            <div className="inner">
              <div className="source">
                <p className="title">제목</p>
                <p className="desc">설명</p>
              </div>
              <div className="url">www.link.com <i className="fas fa-angle-right"></i></div>
            </div>
          </a>
          <button type="button" className="more">+ 1개의 링크 더 보기</button>
        </div>
      </>
    );
  }
}

export default CardUser;