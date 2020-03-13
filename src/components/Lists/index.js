import React, { Component } from 'react';
import "./index.css";
import Item from "./Item";
import axios from '../../api';

const data = [
    {
        id: 1,
        title: 'JS数组去重',
        desc: '数组去重的多种方式',
        tag: 'JS',
        archive: '前端',
        createTime: '2019-11-11 10:57',
        views: 108
    },
    {
        id: 2,
        title: 'JS数组去重',
        desc: '数组去重的多种方式',
        tag: 'JS',
        archive: '前端',
        createTime: '2019-11-11 10:57',
        views: 108
    },
    {
        id: 3,
        title: 'JS数组去重',
        desc: '数组去重的多种方式',
        tag: 'JS',
        archive: '前端',
        createTime: '2019-11-11 10:57',
        views: 108
    },
    {
        id: 4,
        title: 'JS数组去重',
        desc: '数组去重的多种方式',
        tag: 'JS',
        archive: '前端',
        createTime: '2019-11-11 10:57',
        views: 108
    }
]


class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    getList = async () => {
        await axios.get('api/blog/list')
        .then(
            res => {
                console.log('列表:', res.data.data)
                this.setState({
                    data: res.data.data
                })
            }
        )
        .catch( err => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.getList()
    }

    render(){
        return (
            <ul id="Lists" className="list">
                {
                    this.state.data.map((item) => 
                        <Item item={item} key={item.id} />
                    )
                }
            </ul>
        );
    }
}

export default List;