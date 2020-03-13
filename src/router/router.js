import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import loadable from '../utils/loadable';

// import Home from '../pages/Home';
// import Archive from '../pages/Archive';
// import Collect from '../pages/Collect';
// import About from '../pages/About';
// import Login from '../pages/Login';
// import Detail from '../pages/Detail';
// import Header from '../components/Header';
const Home = loadable(() => import('../pages/Home'));
const Archive = loadable(() => import('../pages/Archive'));
const Collect = loadable(() => import('../pages/Collect'));
const About = loadable(() => import('../pages/About'));
const Login = loadable(() => import('../pages/Login'));
const Detail = loadable(() => import('../pages/Detail'));
const Header = loadable(() => import('../components/Header'));

class RouteConf extends Component{
    render(){
        return (
            <HashRouter>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/login' component={Login} />
                    <Route path='/archive' component={Archive} />
                    <Route path='/collect' component={Collect} />
                    <Route path='/about' component={About} />
                    <Route path='/articleDetail' component={Detail} />
                    <Redirect to='/login' />
                </Switch>
            </HashRouter>
        )
    }
}

export default RouteConf;