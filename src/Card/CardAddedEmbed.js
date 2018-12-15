import React, { Component } from 'react';

class CardAddedEmbed extends Component {
  render() {
    const {
      added,
    } = this.props;
    return (
      <>
        <Embed type={added.type}
                more={added.more}
                insight={added.insight}
                sight={added.sight}
                view = {this.props.view}
        />
        {console.log(this.props.added)}
      </>
    );
  }
}

class Embed extends Component {
  render() {
    const { sight } = this.props;
    const first = sight[0];
    
    return (
      <>
        <div className="added share embed">
          <div className="inner">
            <div className="source"><iframe src={"https://www.youtube.com/embed/"+ first.title} frameBorder="0" title="유튜브 보기" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            <div className="url"><a href={first.href} target="_blank">{first.url} <i className="fas fa-angle-right"></i></a></div>
          </div>
          {this.props.more &&
          <button type="button" className="more" onClick={this.props.view}>+ {this.props.more}개의 미디어 더 보기</button>
          }
        </div>

        {/* 카드 :: 첨부 - 영상 ifame : 임베드형태
        <div className="added share embed">
          <div className="inner">
            <div className="source"><iframe src="https://www.youtube.com/embed/mP--G6TmH8Q" frameBorder="0" title="" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
            <div className="url"><a href="https://www.youtube.com/watch?time_continue=2&amp;v=mP--G6TmH8Q" target="_blank">www.youtube.com <i className="fas fa-angle-right"></i></a></div>
          </div>
          <button type="button" className="more">+ 3개의 미디어 더 보기</button>
        </div>
         */}
      </>
    );
  }
}

export default CardAddedEmbed;