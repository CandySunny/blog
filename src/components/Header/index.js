import React, { Component } from 'react';
import './index.css';
import '../../assets/font/iconfont.css';
// import { useHistory } from 'react-router-dom';
// const history = useHistory();
import { Link } from 'react-router-dom';
import { createHashHistory } from 'history';
const history = createHashHistory();

class Header extends Component{
    constructor(props){
        super(props);
    }

    handleLogin = () => {
        history.push('/login');
    }

    render(){
        return (
            <div id="Header" className="clearfix">
                <div className="logo fl">
                    <img src={require("../../assets/images/logo.jpg")} alt=""/>
                    <span>糖果屋的博客</span>
                </div>
                <div className="login-state fr">
                    <button onClick={this.handleLogin}>登录</button>
                </div>
                <ul className="nav">
                    <li className="active">                    
                        <Link to='/'>
                            <i className="iconfont icon-weibiaoti-"></i><span>首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/archive">
                            <i className="iconfont icon-pan_icon"></i><span>归档</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/collect">
                            <i className="iconfont icon-shoucang"></i><span>收藏</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="about">
                            <i className="iconfont icon-people"></i><span>关于</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Header;