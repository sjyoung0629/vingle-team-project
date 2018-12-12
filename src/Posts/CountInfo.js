import React, { Component } from 'react';
import Like from './Like';
import Share from './Share';

class CountInfo extends Component {
    state = {
        likes: this.props.likes,
        share: this.props.shareCount,
    }

    handleUpdateLikes = (likes) => {
        // Post 좋아요
        const {updateLikes} = this.props;
        updateLikes(likes);
    }

    handleUpdateShare = (share) => {
        // Post 공유하기
        const {updateShare} = this.props;
        updateShare(share);
    }

    render() {
        const {likes, share} = this.state;

        return (
            <div className="countInfoArea">
                <Like likes={likes} onUpdate={this.handleUpdateLikes}/>
                <Share shareCount={share} onUpdate={this.handleUpdateShare} />
            </div>
        );
    }
}

export default CountInfo;