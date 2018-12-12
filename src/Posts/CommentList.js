import React, { Component } from 'react';
import CommentMerge from './CommentMerge';

class CommentList extends Component {
    static defaultProps = {
        data: []
    }
    
    render() {
        const {data, onUpdate, onRemove, updateLikes, onCreateReply} = this.props;

        const list = data.map(
            info => (<CommentMerge info={info} key={info.id}
                                    onUpdate={onUpdate}
                                    onRemove={onRemove}
                                    updateLikes={updateLikes}
                                    onCreateReply={onCreateReply}/>)
        )

        return (
            <div className="commentList">
                {list}
            </div>
        );
    }
}

export default CommentList;