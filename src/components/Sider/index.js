import React, { Component } from "react";
import "./index.css";

class Sider extends Component{
    render(){
        return (
            <div id="Sider" className="sider-con">
                <div className="admin-info">
                    <div className="avatar">
                        <img src={require('../../assets/images/avatar.jpg')} alt=""/>
                    </div>
                    <p className="admin-name">糖果屋</p>
                    <p className="admin-desc">爱旅行，爱运动，前端程序媛</p>
                </div>
                <div className="recent-article">
                    <h3 className="title">最近文章</h3>
                    <ul>
                        <li>blog 迁移到 http://xiangxi.red/doc</li>
                        <li>event loop 回答得最难受的一次面试</li>
                        <li>面试题的细嚼慢咽，真香啊</li>
                        <li>JS 数组去重</li>
                        <li>node + koa + mysql 搭建博客 server 端</li>
                    </ul>
                </div>
                <div className="tag-wrapper">
                    <h3 className="title">标签</h3>
                </div>
            </div>
        )
    }
}

export default Sider;