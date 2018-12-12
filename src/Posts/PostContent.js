import React, { Component } from 'react';

class PostContent extends Component {
    state = {
        content: this.props.content,
    }

    render() {
        return (
            <div className="postContentWrap">
                <span>{this.state.content}</span>
            </div>
        );
    }
}

export default PostContent;