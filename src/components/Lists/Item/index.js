import React, { Component } from 'react';
import './index.css';
import { createHashHistory } from 'history';
const history = createHashHistory();

class Item extends Component{
    constructor(props){
        super(props);
    }

    goArticleDetail = (id) => {
        // history.push("/articleDetail/?id=" + id);
        history.push("/articleDetail");
    }
                 
    render(){
        return (
            <li className="item" key={this.props.item.id} onClick={this.goArticleDetail.bind(this, this.props.item.id)}>
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.desc}</p>
                <div className="extra-info">
                    <ul className="clearfix">
                        <li><i className="iconfont icon-biaoqian"></i><span className="tag">{this.props.item.tag}</span></li>
                        <li><i className="iconfont icon-wenjianjia"></i><span className="tag">{this.props.item.archive}</span></li>
                        <li><i className="iconfont icon-rili"></i><span>{this.props.item.createTime}</span></li>
                        <li><i className="iconfont icon-yanjing"></i><span>{this.props.item.views}次浏览</span></li>
                    </ul>
                </div>
            </li>
        )
    }
}

export default Item;