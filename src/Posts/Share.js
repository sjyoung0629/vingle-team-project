import React, { Component } from 'react';

class Share extends Component {
    state = {
        shareCount: this.props.shareCount,
    }

    /**
     * 공유하기는 클릭할수록 증가
     */
    sharePost = () => {
        const {onUpdate} = this.props;
        let {shareCount} = this.state;
        
        shareCount++;

        onUpdate(shareCount);

        this.setState({
            shareCount: shareCount,
        });
    }

    render() {
        const {shareCount} = this.state;

        return (
            <div className="shareArea">
                <input type="button" value="공유" onClick={this.sharePost}></input>
                <span>{shareCount}</span>
            </div>
        );
    }
}

export default Share;