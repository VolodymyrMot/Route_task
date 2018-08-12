import React, { Component } from 'react';
import {Router, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Content from './Content'
import './App.css'

const history = createBrowserHistory();

class Header extends Component {
    render(){
        return(
            <Link to='/posts' className="link_header">
                <div id="header">
                    <h1>Posts</h1>
                </div>
            </Link>
        )
    }
}

class App extends Component{
    render(){
        return(
            <Router history={history}>
                <div id="container">
                    <Header/>
                    <Content/>
                </div>
            </Router>
        )
    }
}
export default App;