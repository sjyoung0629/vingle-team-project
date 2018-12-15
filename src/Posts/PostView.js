import React, { Component } from 'react';
import PostContent from './PostContent';
import CommentView from './CommentView';
import PostUserInfo from './PostUserInfo';
import CountInfo from './CountInfo';
import axios from 'axios';

class PostView extends Component {
    state = {
        feed_id: this.props.match.params.id,
        author: '홍길동',
        authorImg: '',
        shareCount: 10,
    }

    // 변경될 때만 업데이트
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState){
            return true;
        }

        return this.props.data !== nextProps.data;
    }

    componentWillMount () {
        this.getCardDetail();
    }

    getCardDetail = () => {
        console.log("getCardDetail");
        const feed_id = this.state.feed_id;
        axios.get('http://dev-jolse.iptime.org:9000/feed/' + feed_id, {})
        .then( response => {
            const responseData = response.data;
            const successValue = responseData.success;
            if (successValue === 1) {
                // 성공!
                let result = responseData.results;
                console.log(result);

                this.setState({
                    feed_id: result.feed_id,
                    author: this.state.author,
                    title: result.title,
                    content: result.content,
                    build_date: result.build_date,
                    good: result.good,
                    hits: result.hits,
                    shareCount: this.state.shareCount,
                    comments: result.comments,
                });
                
            }
        } )
        .catch( response => { console.log(response) } );
    }

    updateLikes = (likes) => {
        // Post 좋아요
        this.setState({
            good: likes,
        });
    }

    updateShare = (share) => {
        // Post 공유
        this.setState({
            shareCount: share,
        });
    }

    render() {
        const {feed_id, author, title, content, build_date, good, shareCount, hits, comments} = this.state;
        console.log(this.state);

        return (
            <div className="postWrap">
                <div className="postFrame">
                    <PostUserInfo time={build_date} author={author} views={hits} />
                    <PostContent id={feed_id} title={title} content={content} />
                    <CountInfo likes={good} updateLikes={this.updateLikes}
                                shareCount={shareCount} updateShare={this.updateShare}/>
                    <CommentView id={feed_id} comments={comments}/>
                </div>
            </div>
        );
    }
}

export default PostView;