import React, { Component } from 'react';
import PostContent from './PostContent';
import CommentView from './CommentView';
import PostUserInfo from './PostUserInfo';
import CountInfo from './CountInfo';
import axios from 'axios';
import './Comment.css';

class PostView extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);

        this.state = {
            feed_id: this.props.match.params.id,
            author: '홍길동',
            authorImg: '',
            shareCount: 10,
            title: '',
            content: '',
            build_date: '',
            good: 0,
            hits: 0,
            comments: [],
        };
    }

    // 변경될 때만 업데이트
    shouldComponentUpdate(nextProps, nextState) {
        if(this.state !== nextState){
            return true;
        }

        return this.props.data !== nextProps.data;
    }

    // 컴포넌트가 DOM 위에 만들어진 후에 실행
    componentDidMount () {
        this._isMounted = true;
        // console.log("### PostView componentDidMount");
        this.getCardDetail();
    }

    componentWillUnmount () {
        this._isMounted = false;
    }

    // 상세 페이지 보여주기
    getCardDetail = () => {
        const feed_id = this.props.match.params.id;
        // console.log("getCardDetail feed == ", feed_id);
        axios.get('http://dev-jolse.iptime.org:9000/feed/' + feed_id, {})
        .then( response => {
            const responseData = response.data;
            const successValue = responseData.success;
            if (successValue === 1) {
                // 성공!
                let result = responseData.results;
                // console.log(result);

                const build_date = new Date(result.build_date);
                // console.log("time == ", build_date.getTime());

                this._isMounted && this.setState({
                    feed_id: result.feed_id,
                    title: result.title,
                    content: result.content,
                    build_date: build_date.getTime(),
                    good: result.good,
                    hits: result.hits,
                    comments: result.comments,
                });
            }
        } )
        .catch( error => { console.log(error) } );
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

        return (
            <div className="postWrap">
                <div className="postFrame">
                    <PostUserInfo time={build_date} author={author} views={hits} />
                    <PostContent id={feed_id} title={title} content={content} />
                    <CountInfo id={feed_id} likes={good} updateLikes={this.updateLikes}
                                shareCount={shareCount} updateShare={this.updateShare}/>
                    <CommentView id={feed_id} comments={comments}/>
                </div>
            </div>
        );
    }
}

export default PostView;