import React from 'react';

import classes from './Posts.module.css';
import Posts from './Posts.js';
// import Post from './Post.js';

export default class PostBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    sendPost () {
        this.setState()
    }
    
    render() {
        return (
            <div>
                <input id="inpt" className={classes.postsInput} type="text" title="your news..."/>
                <div className={classes.btn}>Send</div>
                <Posts />
            </div>
            );
    }
}
