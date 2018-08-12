import React, { Component } from 'react';
import {connect} from 'react-redux';

import './App.css';
import Item from './Item';

class Articles extends Component {

    render(){
        const posts = this.props.posts;
    return(
        <div>
            {
                posts.map((post)=>{
                    return(
                        <Item key={post.id} post={post}/>
                    )
                })
            }
            </div>
        )
    }
}

export default connect(
    state=>({
        posts: state.posts
    }),
)(Articles);


