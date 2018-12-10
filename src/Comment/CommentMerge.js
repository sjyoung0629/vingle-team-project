import React, { Component, Fragment } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

class CommentMerge extends Component {
    state = {
        showReply: false,
    }

    // 하단에 답글 Form 생성
    showReplyForm = () => {
        this.setState({
            showReply: !this.state.showReply,
        });
    }

    // 답글 입력
    createReply = (data) => {
        const {info, onCreateReply} = this.props;
        onCreateReply(info.id, data);
    }

    render() {
        const {info, onUpdate, onRemove, updateLikes} = this.props;
        const {showReply} = this.state;

        const reply = info.reply;
        let replyList = '';
        if (reply && reply.length > 0) {
            replyList = reply.map(
                reply => (<Comment type="reply"
                            data={reply} key={reply.id}
                            onUpdate={onUpdate}
                            onRemove={onRemove}
                            updateLikes={updateLikes}/>)
            )
        }

        return (
            <div className="commentWrap">
                <Comment type="comment"
                        data={info} key={info.id}
                        onUpdate={onUpdate}
                        onRemove={onRemove}
                        updateLikes={updateLikes}
                        showReply={this.showReplyForm}/>
                {replyList}
                {
                    showReply && (
                        <Fragment>
                            <CommentForm type="reply" onCreate={this.createReply}/>
                        </Fragment>
                    )
                }
            </div>
        );
    }
}

export default CommentMerge;