import React, { Component } from 'react';
import './join.css';
import axios from 'axios';

class Join extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    joinSubmit = (e) => {
        e.preventDefault();
        
        const {email, password} = this.state;

        axios.post('http://dev-jolse.iptime.org:9000/register', {
            email: email,
            password: password,
        })
        .then( response => {
            const responseData = response.data;
            const successValue = responseData.success;
            if (successValue === 1) {
                console.log("회원가입 성공");
            }
        } )
        .catch( error => { console.log(error) } );
    }

    render() {
        return (
            <div className="signin_wrapper">
                <h1 className="signin_title">회원가입</h1>
                <form className="login_form">
                    <div className="login_input_area">
                        <input type="text" name="email" className="login_input"
                            placeholder="이메일" onChange={this.handleChange}/>
                    </div>
                    <div className="login_input_area">
                        <input type="password" name="password" className="login_input"
                            placeholder="비밀번호" onChange={this.handleChange}/>
                    </div>
                    <div className="login_button_area">
                        <input type="button" className="login_submit" value="회원가입"
                            onClick={this.joinSubmit}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Join;