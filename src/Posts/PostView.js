import React, { Component } from 'react';
import PostContent from './PostContent';
import CommentView from './CommentView';
import PostUserInfo from './PostUserInfo';
import CountInfo from './CountInfo';

class PostView extends Component {
    state = {
        postID: this.props.match.params.id,
        author: '홍길동',
        authorImg: '',
        postTitle: '보헤미안 랩소디',
        postContent: '보헤미안 랩소디 설명 영역',
        time: 1544535429596,
        likes: 6,
        shareCount: 10,
        views: 120,
    }

    updateLikes = (likes) => {
        // Post 좋아요
        this.setState({
            likes: likes,
        });
    }

    updateShare = (share) => {
        // Post 공유
        this.setState({
            shareCount: share,
        });
    }

    render() {
        const {postID, author, authorImg, postTitle, postContent, time, likes, shareCount, views} = this.state;

        return (
            <div className="postWrap">
                <div className="postFrame">
                    <PostUserInfo time={time} author={author} authorImg={authorImg} views={views} />
                    <PostContent id={postID} title={postTitle} content={postContent} />
                    <CountInfo likes={likes} updateLikes={this.updateLikes}
                                shareCount={shareCount} updateShare={this.updateShare}/>
                    <CommentView id={postID} />
                </div>
            </div>
        );
    }
}

export default PostView;