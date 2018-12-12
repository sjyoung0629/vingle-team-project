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
        let {like, likeCount} = this.state;

        if (like) {
            likeCount++;

        } else {
            likeCount--;
        }
        
        onUpdate(likeCount);

        this.setState({
            like: !like,
            likeCount: likeCount,
        });
    }

    render() {
        const {likeCount} = this.state;

        return (
            <div className="likeArea">
                <input type="button" value="좋아요" onClick={this.likeCmt}></input>
                <span>{likeCount}</span>
            </div>
        );
    }
}

export default Like;