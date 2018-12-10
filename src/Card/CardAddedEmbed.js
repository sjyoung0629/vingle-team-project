import React, { Component } from 'react';

class CardUser extends Component {

  render() {
    return (
      <>
        {/* 카드 :: 첨부 - 영상 ifame : 임베드형태 */}
        <div className="added share embed">
          <div className="inner">
            <div className="source"><iframe src="https://www.youtube.com/embed/mP--G6TmH8Q" frameBorder="0" title="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            <div className="url"><a href="https://www.youtube.com/watch?time_continue=2&amp;v=mP--G6TmH8Q" target="_blank">www.youtube.com <i className="fas fa-angle-right"></i></a></div>
          </div>
          <button type="button" className="more">+ 3개의 미디어 더 보기</button>
        </div>
      </>
    );
  }
}

export default CardUser;