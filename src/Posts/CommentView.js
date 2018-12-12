import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentList from './CommentList';
import './Comment.css';

class CommentView extends Component {
    // 댓글마다 고유한 id값
    comment_id = 3;
    reply_id = 2;

    state = {
        sortBy: "likes",
        information: [{
            id: 0,
            author: 'sjyoung',
            content: '안녕하세요',
            likes: 0,
            time: 1544064880438,
            reply: [{
                id: '0-0',
                author: 'kkk',
                content: '반갑습니다',
                likes: 0,
                time: 1544089503275,
            },
            {
                id: '0-1',
                author: 'sjyoung',
                content: '네~~ 반가워요^^',
                likes: 0,
                time: 1544089503444,
            }]
        },
        {
            id: 1,
            author: 'julia',
            content: '안녕~~',
            likes: 4,
            time: 1544007341933,
            reply: [],
        },
        {
            id: 2,
            author: 'herry0917',
            content: '???',
            likes: 1,
            time: 1544535429596,
            reply: [],
        }]
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

    // 댓글 입력
    handleCreate = (data) => {
        const {information} = this.state;
        this.setState({
          information: information.concat({
            // data가 추가될때마다 id 값 ++
            ...data,
            id: this.comment_id++,
            reply: [],
          })
        });
    }

    // 답글 입력
    handleCreateReply = (id, data) => {
        const {information} = this.state;

        this.setState({
            information: information.map(
                info => {
                    if (info.id === id) {
                        return {
                            id: info.id,
                            author: info.author,
                            content: info.content,
                            likes: info.likes,
                            time: info.time,
                            reply: info.reply.concat({
                                // 답글이 추가될 때 id 설정
                                id: info.id + "-" + this.reply_id++,
                                ...data
                            })
                        }
                    }
                    return info;
                }
            )
        });
    }

    // 댓글 수정
    handleUpdate = (id, data) => {
        let {information} = this.state;
        // id 의 type으로 댓글/답글 여부 판단
        const isReply = (typeof(id) === 'string');

        if (isReply) {
            // 댓글의 답글 수정
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
                                                time: rep.time,
                                                likes: rep.likes,
                                                ...data
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
            // 기본 댓글 수정
            this.setState({
                information: information.map(
                    info => {
                        if (info.id === id) {
                            return {
                                id: id,
                                author: info.author,
                                time: info.time,
                                likes: info.likes,
                                reply: info.reply,
                                ...data,
                            };
                        }
                        return info;
                    }
                )
            });
        }
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

    // 댓글 삭제
    handleRemove = (id) => {
        const {information} = this.state;
        // id 의 type으로 댓글/답글 여부 판단
        const isReply = (typeof(id) === 'string');

        if (isReply) {
            // 답글 삭제
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
                                reply: reply.filter(rep => rep.id !== id),
                            }
                        }
                        return info;
                    }
                )
            });

        } else {
            // 댓글 삭제
            this.setState({
                information: information.filter(info => info.id !== id)
            });
        }        
    }
    
    render() {
        let {sortBy, information} = this.state;
        const arr_len = information.length;

        // 기준(추천순/최신순)에 따라 정렬 수행
        information = information.sort(function(a, b) {
            return b[sortBy] - a[sortBy];
        });

        return (
            <div className="commentListWrap">
            {/* {this.props.match.params.id} */}
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
                    <CommentList data={information}
                    onUpdate={this.handleUpdate}
                    onRemove={this.handleRemove}
                    updateLikes={this.updateLikes}
                    onCreateReply={this.handleCreateReply}/>
                    <hr />
                    <CommentForm type="comment" onCreate={this.handleCreate}/>
                </div>
            </div>
        );
    }
}

export default CommentView;