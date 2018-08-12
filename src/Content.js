import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Articles from './Articles';
import Article from './Article';

class Content extends Component{

    render(){
        return(
            <div id="content">
                <Route exact path='/posts' component={Articles}/>
                <Route path='/posts/post/:id' component={Article}/>
            </div>
        )
    }
}export default Content;

