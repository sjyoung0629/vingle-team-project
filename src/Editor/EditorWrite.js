import React, { Component } from 'react'
import axios from 'axios';

export default class EditoerWrite extends Component {
    state = {
        title: '',
        contents: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    goPostView = (id) => {
        this.props.history.push('/posts/' + id);
      }

    // post 작성
    handleSubmit = () => {
        console.log(this.state);
        axios.post('http://dev-jolse.iptime.org:9000/feed', {
            title: this.state.title,
            content: this.state.contents,
        })
        .then( response => {
            const responseData = response.data;
            const successValue = responseData.success;
            if (successValue === 1) {
                // 작성 성공!
                console.log("## response id == " + responseData.insertId);
                const id = responseData.insertId;
                this.goPostView(id);
            }
        } )
        .catch( response => { console.log(response) } );
    }

    render() {
        return (
        <div className="editorWrite">
            <div className="editorTitle">
                <textarea 
                    className="editorTitleInput"
                    placeholder="제목" 
                    name="title"    
                    value={this.state.title}
                    onChange={this.handleChange}        
                >
                </textarea>
            </div>
            <div className="editorContents">
                <textarea
                    className="editorContentsTextarea"
                    placeholder="무슨 이야기를 나누고 싶으세요?"
                    name="contents"
                    value={this.state.contents}
                    onChange={this.handleChange}
                >
                </textarea>
                <div className="editorLeft">
                    <div className="editorFileInput editorInputIcon">
                        <label htmlFor="inputImg">IMG Upload</label>
                        <input type="file" id="inputImg" multiple accept="image/*" />
                    </div>
                    <div className="editorMovieInput editorInputIcon">
                        <label htmlFor="inputMovie">Movie Upload</label>
                        <input type="file" id="inputMovie" accept="video/*" />
                    </div>
                    <div className="editorLink"></div>
                    <ul>
                        <li>BOLD</li>
                        <li>ITALIC</li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <button 
                type="submit" 
                className="editorSave"
                onClick={this.handleSubmit}
            >
            게시
            </button>
        </div>
        )
    }
}

