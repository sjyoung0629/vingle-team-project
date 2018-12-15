import React, { Component } from 'react';

class CardAddedPage extends Component {
  render() {
    const {
      added,
    } = this.props;
    return (
      <>
        <Page type={added.type}
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
class Page extends Component {
  render() {
    const { sight } = this.props;
    const first = sight[0];
    
    return (
      <>
        {/* 카드 :: 첨부 - 페이지 링크형태 */}
        <div className="added share page">
          <a href={first.href} target="_blank">
            <div className="inner">
              <div className="source">
                <p className="title">{first.title}</p>
                <p className="desc">{first.desc}</p>
              </div>
              <div className="url">{first.url} <i className="fas fa-angle-right"></i></div>
            </div>
          </a>
          {this.props.more &&
          <button type="button" className="more" onClick={this.props.view}>+ {this.props.more}개의 링크 더 보기</button>
          }
        </div>
      </>
    );
  }
}

export default CardAddedPage;