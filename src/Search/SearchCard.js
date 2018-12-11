import React, { Component } from 'react'

export default class SearchCard extends Component {
    goCommentView = () => {
        const cardID = this.props.id;
        this.props.history.push('/commentView/' + cardID);
    }

    render() {
        return (
        <div className="searchCard">
            <div className="cardThumbnail"><img src={this.props.thumbnail} /></div>
            <div className="cardInfo">
                <div className="cardInfoTitle" onClick={this.goCommentView}>{this.props.title}</div>
                <div className="cardInfoContents">{this.props.contents}</div>
                <div className="cardInfoBottom">
                    <div className="cardInfoNicname">{this.props.nicname}</div>
                    <div className="cardInfoIcon">
                        <ul>
                            <li className="">좋아요</li>
                            <li className="">댓글</li>
                            <li className="">링크</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
