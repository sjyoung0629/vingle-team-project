import React, { Component, Fragment } from 'react';
import Like from './Like';
import FromNow from './FromNow';

class Comment extends Component {
    state = {
        isComment: (this.props.type === "comment"),
        editing: false,
    }

    // 변경된 부분만 업데이트
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState){
            return true;
        }

        return this.props.data !== nextProps.data;
    }

    // 답글 달기
    inputReply = () => {
        const {showReply} = this.props;
        showReply();
    }

    // editing 값에 따라 수정/적용
    handleToggleEdit = () => {
        const {data, onUpdate} = this.props;
        if (this.state.editing) {
            // 수정 모드: 수정된 content값을 업데이트하도록 함
            onUpdate(data.id, {
                content: this.state.content,
            });

        } else {
            // 적용 모드: 수정된(또는 원본) 내용을 가져와서 State에 세팅
            this.setState({
                content: data.content,
            });
        }

        // editing 값을 반전시킴
        this.setState({
            editing: !this.state.editing,
        })
    }

    // '좋아요' 수 반영
    handleUpdateLikes = (likes) => {
        const {data, updateLikes} = this.props;
        updateLikes(data.id, likes);
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleKeyUp = (e) => {
        // Enter 키 눌렀을 떄 댓글 수정되도록 함
        if (e.keyCode === 13) {
            this.handleToggleEdit();
        }
    }

    // 댓글 삭제
    handleRemove = () => {
        const {data, onRemove} = this.props;
        onRemove(data.id);
    }

    render() {
        const {author, content, likes, time} = this.props.data;
        const {isComment, editing} = this.state;

        return (
            <div className={isComment ? "comment" : "reply"}>
                <div className="author">{author}</div>
                {
                    editing ? (
                        <Fragment>
                            <div className="contentArea">
                                <input name="content" value={this.state.content}
                                onChange={this.handleChange}
                                onKeyUp={this.handleKeyUp} />
                            </div>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <div>{content}</div>
                        </Fragment>
                    )
                }
                <div className="commentFooterArea">
                    <div className="timeReplyArea">
                        <FromNow time={time}/>
                        {
                            isComment ? (
                                <Fragment>
                                    <span>·</span>
                                    <a className="replyArea" onClick={this.inputReply}>
                                        <span>답글 달기</span>
                                    </a>
                                </Fragment>
                            ) : ''
                        }
                    </div>
                    <div className="updateArea">
                        <Like likes={likes} onUpdate={this.handleUpdateLikes}/>
                        <span>{this.state.cmtCount}</span>
                        <input type="button" value={editing ? "적용" : "수정"}
                                onClick={this.handleToggleEdit}></input>
                        <input type="button" value="삭제"
                                onClick={this.handleRemove}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Comment;