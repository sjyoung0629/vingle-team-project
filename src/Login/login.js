import React, { Component, Fragment } from 'react';
import './login.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { cc } from '../actions/infoAction';

class Login extends Component {
    state = {
        email: '',
        password: '',
        isValidEmail: false,
        isValidPw: false,
        doLogin: false
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
            doLogin: isValidEmail && isValidPw,
        });
    }

    handleKeyUp = (e) => {
        e.preventDefault();
        // Enter 키 눌렀을 떄 댓글 입력되도록 함
        if (e.keyCode === 13) {
            this.loginSubmit(e);
        }
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
                    this.props.b();
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
        const {doLogin} = this.state;

        return (
            <Fragment>
                {/* logged=true 면 List로 이동 */}
                {this.props.logined && <Redirect to="/list" />}
                <div className="signin_wrapper">
                    <h1 className="signin_title">로그인</h1>
                    <form className="login_form" onKeyUp={this.handleKeyUp}>
                        <div className="login_input_area">
                            <input type="text" name="email" className="login_input"
                                placeholder="이메일" onChange={this.handleChange}/>
                        </div>
                        <div className="login_input_area">
                            <input type="password" name="password" className="login_input"
                                placeholder="비밀번호" onChange={this.handleChange}/>
                        </div>
                        <div className="login_button_area">
                            <input type="button" value="로그인" onClick={doLogin ? this.loginSubmit: null}
                                className={doLogin ? "submit_btn do_submit" : "submit_btn non_submit"} />
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        logined: state.infoFunc.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log("## dispatch 로그인하기 function");
    return {
        b: () => {dispatch(cc())},
    }
}

// connect(state, action)
// mapStateToProps: store의 state를 props로 갖고 온다
export default connect(mapStateToProps, mapDispatchToProps)(Login);