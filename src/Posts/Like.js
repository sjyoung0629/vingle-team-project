import React, { Component } from 'react';
import axios from 'axios';

class Like extends Component {
    state = {
        feed_id: this.props.id,
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

    handleLikeCount = () => {
        let {feed_id, like, likeCount} = this.state;
        let requestAPI = ''

        if (like) {
            // 좋아요 증가
            axios.put('/good/' + feed_id, {})
            .then( response => {
                const responseData = response.data;
                const successValue = responseData.success;
                if (successValue === 1) {
                    likeCount++;

                    this.setState({
                        like: !like,
                        likeCount: likeCount,
                    });
                }
            } )
            .catch( response => { console.log(response) } );

        } else {
            // 좋아요 취소
            axios.delete('/good/' + feed_id, {})
            .then( response => {
                const responseData = response.data;
                const successValue = responseData.success;
                if (successValue === 1) {
                    likeCount--;

                    this.setState({
                        like: !like,
                        likeCount: likeCount,
                    });
                }
            } )
            .catch( response => { console.log(response) } );
        }
    }

    render() {
        const {likeCount} = this.state;

        return (
            <div className="likeArea">
                <input type="button" value="좋아요" onClick={this.handleLikeCount}></input>
                <span>{likeCount}</span>
            </div>
        );
    }
}

export default Like;