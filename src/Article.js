import React from 'react';
import {Component} from "react";
import {connect} from 'react-redux';

class Article extends Component {
    render() {
        const post = this.props.post;
        return (
            <div>
                {
                    post.map((post)=>
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>)
                }
            </div>
        )
    }
}export default connect(
    state=>({
        post: state.post
    })
)(Article);