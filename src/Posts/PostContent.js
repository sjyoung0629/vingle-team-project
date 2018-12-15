import React, { Component } from 'react';

class PostContent extends Component {
    render() {
        const {title, content} = this.props;

        return (
            <div className="postContentWrap">
                <div>
                    <span>{title}</span>
                </div>
                <div>
                    <span>{content}</span>
                </div>
            </div>
        );
    }
}

export default PostContent;