import p from './PostInfo.module.css';
import React from 'react';

const PostInfo = (props) => {
  
  let newPostText = React.createRef();

  const onAddPost = () => {
    debugger;
    props.addPost()
  }

  let onPostChange = () => {
    let text = newPostText.current.value;
    props.updateNewPostText(text);
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