import React, { Component } from 'react';
import './join.css';
import axios from 'axios';

class Join extends Component {
    state = {
        email: '',
        password: '',
        isValidEmail: false,
        isValidPw: false,
        doJoin: false,
    }

    handleChange = (e) => {
        let {isValidEmail, isValidPw} = this.state;
        const target_name = e.target.name;
        const value = e.target.value;
        // 정규식 활용하여 유효성 체크
        let reg_text = '';

        if (target_name === "email") {
            reg_text = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/
            isValidEmail = reg_text.test(value);

        } else if (target_name === "password") {
            reg_text = /^[a-zA-Z0-9]{6,12}$/;
            isValidPw = reg_text.test(value);
        }

        this.setState({
            [target_name]: value,
            isValidEmail: isValidEmail,
            isValidPw: isValidPw,
            doJoin: isValidEmail && isValidPw,
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
        const {doJoin} = this.state;

        return (
            <div className="signin_wrapper">
                <h1 className="signin_title">회원가입</h1>
                <form className="login_form">
                    <div className="login_input_area">
                        <input type="text" name="email" className="login_input"
                            placeholder="이메일" onChange={this.handleChange}/>
                        <span></span>
                    </div>
                    <div className="login_input_area">
                        <input type="password" name="password" className="login_input"
                            placeholder="비밀번호 (6~12자의 영문 대소문자 및 숫자)"
                            onChange={this.handleChange}/>
                    </div>
                    <div className="login_button_area">
                        <input type="button" value="회원가입" onClick={doJoin ? this.joinSubmit: null}
                            className={doJoin ? "submit_btn do_submit" : "submit_btn non_submit"} />
                    </div>
                </form>
            </div>
        );
    }
}

export default Join;