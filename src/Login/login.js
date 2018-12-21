import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
            <div className="signin_wrapper">
                <form className="login_form">
                    <div className="login_input_area">
                        <input type="text" className="login_input" placeholder="이메일"/>
                    </div>
                    <div className="login_input_area">
                        <input type="password" className="login_input" placeholder="비밀번호"/>
                    </div>
                    <div>
                        <input type="button" className="login_submit" placeholder="로그인"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default login;