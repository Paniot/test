import p from './PostInfo.module.css';
import React from 'react';

const PostInfo = (props) => {
  debugger
  let newPostText = React.createRef();

  const onAddPost = () => {
    props.dispatch({type: 'ADD-POST'})
  }

  let onPostChange = () => {
    let text = newPostText.current.value;
    props.dispatch({type: 'UPDATE-NEW-POST-TEXT' ,newText: text} );
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