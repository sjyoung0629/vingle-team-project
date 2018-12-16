import React, { Component } from 'react';

class CommentForm extends Component {
    state = {
        content: '',
    }

    handleSubmit = (e) => {
        // preventDefault: submit의 기본 이벤트 동작을 막음
        e.preventDefault();
        const {content} = this.state;
        // content 값이 있을때만 댓글 입력하도록 함
        // 향후 button disabled/abled 로 관리
        if (content) {
            this.props.onCreate(content);
            // submit 후 초기화
            this.setState({
                content: '',
            });
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleKeyUp = (e) => {
        e.preventDefault();
        // Enter 키 눌렀을 떄 댓글 입력되도록 함
        if (e.keyCode === 13) {
            this.handleSubmit(e);
        }
    }

    render() {
        const {type} = this.props;

        return (
            <form className={(type === "comment") ? "commentFormArea" : "replyFormArea"}
                    onKeyUp={this.handleKeyUp}>
                {/* <div className="inputAuthor">
                    <input name="author" className="inputId"
                        value={this.state.author}
                        placeholder="아이디"
                        onChange={this.handleChange}></input>
                </div> */}
                <div className="inputForm">
                    <textarea className="inputContent" name="content"
                    value={this.state.content}
                    placeholder="댓글을 달아보세요"
                    onChange={this.handleChange}></textarea>
                    <div className="submitArea">
                        <input type="button" className="submitBtn"
                        onClick={this.handleSubmit}
                        value="게시"/>
                    </div>
                </div>
            </form>
        );
    }
}

export default CommentForm;