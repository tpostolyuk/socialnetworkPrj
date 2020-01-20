import React from 'react';
import classes from './Posts.module.css';
import Post from './Post.js';

// function sendPost() {
//     let value = document.getElementById('inpt').value;
//     React.createElement(<Post message={value}/>);
// }

const Posts = () => {
    return (
        <div className={classes.posts}>
            <div>
                <span>My posts</span>
            </div>
            <div>
                <input id="inpt" className={classes.postsInput} type="text" title="your news..."/>
                <div onClick={sendPost} className={classes.btn}>Send</div>
            </div>
            <div className={classes.postWrapper}>
                <Post message="Hey, how are u?" />
                <Post message="It's not my first post" />
            </div>
        </div>
    );
}

export default Posts;