import React, { Component } from 'react';
import './login.css';
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    loginSubmit = (e) => {
        e.preventDefault();
        
        const {email, password} = this.state;

        axios.post('http://dev-jolse.iptime.org:9000/login', {
            email: email,
            password: password,
        })
        .then( response => {
            const responseData = response.data;
            const successValue = responseData.success;
            switch(successValue) {
                case 1:
                    // 로그인 성공
                    console.log("로그인에 성공했습니다.");
                    break;
                case 2:
                    // 비밀번호 틀림
                    console.log("비밀번호가 틀렸습니다.");
                    break;
                case 3:
                    // 아이디 없음
                    console.log("아이디가 존재하지 않습니다.");
                    break;
            }
        } )
        .catch( error => { console.log(error) } );
    }

    render() {
        return (
            <div className="signin_wrapper">
                <h1 className="signin_title">로그인</h1>
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
                        <input type="button" className="login_submit" value="로그인"
                            onClick={this.loginSubmit}/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;