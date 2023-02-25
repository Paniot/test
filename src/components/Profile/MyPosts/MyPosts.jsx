import React from 'react';
import p from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsData = props.profilePage.postData.map(p => <Post message={p.message} name={p.name} likesCounter={p.likesCounter} />)

  const newPostText = React.createRef();

  const onAddPost = () => {
    props.addPostActionCreator()
  }

  const onPostChange = () => {
    let text = newPostText.current.value;
    props.updatePostActionCreator(text)
  }

  return (
    <div >
      <div className={p.label}>
        My Posts
      </div>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostText} value={props.profilePage.newPostText} />
        </div>
        <div>
          <button onClick={onAddPost}>Add Post</button>
        </div>
      </div>
      <div className={p.posts}>
        {postsData}
      </div>
    </div>
  )
};

export default MyPosts;