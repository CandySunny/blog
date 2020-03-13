import React from 'react';
import Loadable from 'react-loadable';

// 通用的过场组件
const LoadingComponent = () => {
    return (
        <div>
            Loading
        </div>
    )
}

// 过场组件采用通用的，若传入loading则采用传入的
export default (loader, loading = LoadingComponent) => {
    return Loadable({
        loader,
        loading
    })
}