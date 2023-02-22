import p from './PostInfo.module.css';
import React from 'react';
import { addPostActionCreator, updatePostActionCreator } from '../../../../../redux/store';



const PostInfo = (props) => {

  const newPostText = React.createRef();


  const onAddPost = () => {
    props.dispatch(addPostActionCreator())
  }

  const onPostChange = () => {
    let text = newPostText.current.value;
    let action = updatePostActionCreator(text)
    props.dispatch(action);
  }

  return (
    <div>
      <div>
        <textarea onChange={onPostChange} ref={newPostText} value={props.newPostText} />
      </div>
      <div>
        <button onClick={onAddPost}>Add Post</button>
      </div>
    </div>
  )
};

export default PostInfo;