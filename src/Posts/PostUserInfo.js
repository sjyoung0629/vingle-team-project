import React, { Component } from 'react';
import FromNow from './FromNow';
import AuthorInfo from './AuthorInfo';
import View from './View';

class PostUserInfo extends Component {
    state = {
        postAuthor: this.props.author,
        postViews: this.props.views,
        postTime: this.props.time,
        moreInfo: false,
    }

    render() {
        const {author, time, views} = this.props;

        return (
            <div className="userInfoWrap">
                <AuthorInfo author={author}/>
                <FromNow time={time}/>
                <View view={views}/>
            </div>
        );
    }
}

export default PostUserInfo;