import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';

import Article from './Article';


class Item extends Component{
    render(){
        const post = this.props.post;
        const url = '/posts/post/:' + post.id;
        return(
            <div className="item">
                <Link to={url} className="link_item"><h3 onClick={()=>{this.props.toArticle(post)}} >{post.title}</h3></Link>
                {/*<Link to={url}><button onClick={()=>{this.props.toArticle(post)}} className="btn">Open</button></Link>*/}
            </div>
        )
    }
}

export default connect(
    state=>({
        posts: state.posts
    }),
    dispatch=>({
        toArticle: (post)=>{
            console.log(post);
            dispatch({type: 'TO_ARTICLE', payload: post})
        }
    })
)(Item);