import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import axios from 'axios';

class CommentView extends Component {
    static defaultProps = {
        comments: []
    }

    constructor (props) {
        super(props);
        this.state = {
            sortBy: "likes",
            feed_id: props.id,
            comments: props.comments,
        }
    }

    /**
     * 댓글 정렬 (디폴트: 추천순 정렬)
     * 여기서는 정렬기준을 on/off해주고,
     * 렌더링할 때 이 기준에 따라 정렬되도록 함
     */
    handleSort = (e) => {
        let {sortBy} = this.state;
        const type = e.target.getAttribute('name');

        if (sortBy !== type) {
            this.setState({
                sortBy: type,
            });
        }
    }

    // 변경된 부분만 업데이트
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state !== nextState) {
            return true;
        }
        
        const isUpdate = (this.props.comments !== nextProps.comments);
        if (isUpdate) {
            this.setState({
                comments: nextProps.comments
            });
        }
        
        return isUpdate;
    }

    componentDidMount () {
        console.log("### CommentView ComponentDidMount");
        this.setState({
            comments: this.props.comments
        });
    }

    // 댓글 입력
    handleSubmitComment = (data) => {
        const {feed_id} = this.state;
        let {comments} = this.state;
        console.log("comment input data = ", data);

        axios.post('http://dev-jolse.iptime.org:9000/comment/' + feed_id, {
            comment: data,
        })
        .then( response => {
            const responseData = response.data;
            const successValue = responseData.success;
            if (successValue === 1) {
                // 작성 성공!
                let comment_id = responseData.insertId;
                console.log("### comment 입력 성공! id = " + comment_id);
                this.setState({
                    comments: comments.concat({
                        id: comment_id,
                        comment: data,
                        feed_id: feed_id,
                    })
                });
            }
        } )
        .catch( response => { console.log(response) } );
    }

    // 댓글 수정
    handleUpdateComment = (id, data) => {
        const comment_id = id;
        let {feed_id, comments} = this.state;
        console.log(comments);
        axios.put('http://dev-jolse.iptime.org:9000/comment/' + comment_id, {
            comment: data,
        })
        .then( response => {
            const responseData = response.data;
            const successValue = responseData.success;
            if (successValue === 1) {
                // 댓글 수정 성공!
                console.log("### comment 수정 성공! id = " + comment_id);

                this.setState({
                    comments: comments.map(
                        info => {
                            if (info.comment_id === comment_id) {
                                console.log(info.comment_id + "===" + comment_id);
                                return {
                                    id: comment_id,
                                    comment: data,
                                    feed_id: feed_id,
                                };
                            }
                            return info;
                        }
                    )
                });
            }
        } )
        .catch( response => { console.log(response) } );
    }

    // 댓글 삭제
    handleDeleteCommit = (id) => {
        const comment_id = id;
        let {comments} = this.state;

        axios.delete('http://dev-jolse.iptime.org:9000/comment/' + comment_id, {})
        .then( response => {
            const responseData = response.data;
            const successValue = responseData.success;
            if (successValue === 1) {
                // 댓글 삭제 성공!
                console.log("### comment 삭제 성공! id = " + comment_id);
                console.dir(comments);
                this.setState({
                    comments: comments.filter(info => info.comment_id !== comment_id)
                });
            }
        } )
        .catch( response => { console.log(response) } );
    }

    // 좋아요 수 반영
    updateLikes = (id, likes) => {
        const {information} = this.state;
        // id 의 type으로 댓글/답글 여부 판단
        const isReply = (typeof(id) === 'string');

        if (isReply) {
            // 답글의 좋아요 반영
            const idArr = id.split('-');
            const commentId = idArr[0];

            this.setState({
                information: information.map(
                    info => {
                        if (info.id.toString() === commentId) {
                            let reply = info.reply;
                            return {
                                id: info.id,
                                author: info.author,
                                content: info.content,
                                likes: info.likes,
                                time: info.time,
                                reply: reply.map(
                                    rep => {
                                        if (rep.id === id) {
                                            return {
                                                id: rep.id,
                                                author: rep.author,
                                                content: rep.content,
                                                time: rep.time,
                                                likes: likes,
                                            }
                                        }
                                        return rep;
                                })
                                
                            }
                        }
                        return info;
                    }
                )
            });

        } else {
            // 댓글의 좋아요 반영
            this.setState({
                information: information.map(
                    info => {
                        if (info.id === id) {
                            return {
                                id: id,
                                author: info.author,
                                content: info.content,
                                likes: likes,
                                time: info.time,
                                reply: info.reply,
                            };
                        }
                        return info;
                    }
                )
            });
        }
    }
    
    render() {
        let {comments} = this.state;
        console.log("render comments = ", comments);
        let {sortBy} = this.state;
        const arr_len = comments.length;

        // 기준(추천순/최신순)에 따라 정렬 수행
        comments = comments.sort(function(a, b) {
            return b[sortBy] - a[sortBy];
        });

        return (
            <div className="commentListWrap">
                <div className="commentListFunc">
                    <div className="commentCount">
                        <span>{arr_len}</span><span>개의 댓글</span>
                    </div>
                    <div className="commentSort">
                        <div className={(sortBy === "likes") ? "sortSelected" : "sort"}
                            onClick={this.handleSort}>
                            <span name="likes">추천순</span>
                        </div>
                        <div className="sortSep"></div>
                        <div className={(sortBy === "time") ? "sortSelected" : "sort"}
                            onClick={this.handleSort}>
                            <span name="time">최신순</span>
                        </div>
                    </div>
                </div>
                <div>
                    <CommentList data={comments}
                    onUpdate={this.handleUpdateComment}
                    onRemove={this.handleDeleteCommit}
                    updateLikes={this.updateLikes}
                    onCreateReply={this.handleCreateReply}/>
                    <hr />
                    <CommentForm type="comment" onCreate={this.handleSubmitComment}/>
                </div>
            </div>
        );
    }
}

export default CommentView;