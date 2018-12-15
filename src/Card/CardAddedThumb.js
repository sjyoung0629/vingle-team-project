import React, { Component } from 'react';

class CardAddedThumb extends Component {

  render() {
    const {
      added,
    } = this.props;
    return (
      <>
        <Thumb type={added.type}
                ratio={added.ratio}
                more={added.more}
                insight={added.insight}
                sight={added.sight}
                view={this.props.view}
         />
        {/*console.log(this.props.added)*/}
      </>
    );
  }
}

class Thumb extends Component {
  render() {
    const { sight } = this.props;

    return (
      <>
         <div className={"added thumb thumbratio_"+ this.props.ratio +" thumbtype_"+this.props.insight}>
            <div className="box" onClick={this.props.view}>
              {this.props.ratio === 'q' && this.props.insight >= 4
                ? <>
                  <div className="wrap">
                    {sight.map((s, i) => {
                      if (i <= 1){
                        return (<div className={"inner format_"+s.format} key={i}><img src={s.src} alt="" /></div>);
                      }
                    })}
                  </div>
                  <div className="wrap">
                    {sight.map((s, i) => {
                      if (i > 1){
                        if (i === sight.length-1 && this.props.more) {
                          return (
                            <React.Fragment key={i}>
                            <div className={"inner format_"+s.format} key={i}><img src={s.src} alt="" /></div>
                            <span className="more">+{this.props.more}</span>
                            </React.Fragment>
                          );
                        } else {
                          return (<div className={"inner format_"+s.format} key={i}><img src={s.src} alt="" /></div>);
                        }
                      }
                    })}
                  </div>
                  </>
                : <>
                  <div className="wrap">
                    {sight.map((s, i) => {
                      if (i === 0){
                        return (<div className={"inner format_"+s.format} key={i}><img src={s.src} alt="" /></div>);
                      }
                    })}
                  </div>
                  <div className="wrap">
                    {sight.map((s, i) => {
                      if (i !== 0){
                        if (i === sight.length-1 && this.props.more) {
                          return (
                            <React.Fragment key={i}>
                            <div className={"inner format_"+s.format}><img src={s.src} alt="" /></div>
                            <span className="more">+{this.props.more}</span>
                            </React.Fragment>
                          );
                        } else {
                          return (<div className={"inner format_"+s.format} key={i}><img src={s.src} alt="" /></div>);
                        }
                      }
                    })}
                  </div>
                  </>
              }
            </div>
          </div>


        {/* 카드 :: 첨부 - 이미지/동영상 : 썸네일형태
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
           */}
      </>
    );
  }
}

export default CardAddedThumb;