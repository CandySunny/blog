import React, { Component } from 'react';
import './index.css';

class Login extends Component{
    render(){
        return (
            <div id="Login">
                <div className="bg"></div>
                <div className="dialog">
                    <div className="header">
                        <span>用户登录</span>
                    </div>
                    <div className="body">
                        <div className="input-prefix">
                            <span className="iconfont icon-yonghu"></span>
                            <input type="text"/>
                        </div>
                        <div className="input-prefix">
                            <span className="iconfont icon-mima"></span>
                            <input type="password"/>
                        </div>
                    </div>
                    <div className="footer">
                        <button>登 录</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;