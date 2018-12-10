import React, { Component } from 'react';

class Like extends Component {
    state = {
        like: true,
        likeCount: this.props.likes,
    }

    /**
     * 댓글의 원래 '좋아요' 수에서
     * '좋아요'버튼을 한번 누르면 ++, 그 상태에서 한번 더 누르면 --
     */
    likeCmt = () => {
        const {onUpdate} = this.props;
        let {likes} = this.props;
        let isLike = this.state.like;

        if (isLike) {
            likes++;

        } else {
            likes--;
        }
        
        onUpdate(likes);

        this.setState({
            like: !isLike,
            likeCount: likes,
        });
    }

    render() {
        return (
            <div className="likeArea">
                <input type="button" value="좋아요" onClick={this.likeCmt}></input>
                <span>{this.state.likeCount}</span>
            </div>
        );
    }
}

export default Like;