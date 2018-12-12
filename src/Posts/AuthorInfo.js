import React, { Component } from 'react';

class AuthorInfo extends Component {
    state = {

    }

    render() {
        const {author} = this.props;

        return (
            <div className="authorArea">
                <span className="author">{author}</span>
            </div>
        );
    }
}

export default AuthorInfo;