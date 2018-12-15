import React, { Component } from 'react';

class CardContents extends Component {
  render() {
    const {
      title,
      contents,
    } = this.props;
    return (
      <>
        {/* 카드 :: 제목 */}
        <div className="title" onClick={this.props.view}>{title}</div>

        {/* 카드 :: 내용 - 5줄까지 노출, 6줄이상부터는 마지막줄의 3글자 삭제 후 ...더보기 노출 */}
        <div className="contents" onClick={this.props.view}>
        {contents &&
         contents
        }
        {/* 
          카드 내용<br />
          줄바꿈은 적용된채로 나와야 한다<br />
          볼드나 이탤릭, 하이퍼링크는 빠진 채로 콘텐츠의 텍스트들만 들어가 있다<br />
          최대 다섯줄까지 노출되어야 하고 여섯줄 이상일때<br />
          다섯줄째의 마지막 세글자는 말줄임이 되어야 하는데 어떻게 하는거야<span className="more">더 보기</span><br />
          여섯줄이 되면 이건 안보여야 함
         */}
        </div>
      </>
    );
  }
}

export default CardContents;