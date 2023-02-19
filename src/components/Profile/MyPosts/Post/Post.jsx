import p from './Post.module.css';
import Avatar from './avatar/logo.png'
import React from 'react';

const Post = (props) => {
  return (
    <div className={p.item}>
      <img src={Avatar} className={p.image} alt=''></img>
      {props.message}, from {props.name}
      <div>
        <span>Like</span>
        <span>{props.likesCounter}</span>
      </div>
    </div>
  )
};

export default Post;