import p from './MyPosts.module.css';
import Post from './Post/Post';
import PostInfo from './Post/Postinfo/PostInfo';

const MyPosts = (props) => {

  let postsData = props.postData.map(p => <Post message={p.message} name={p.name} likesCounter={p.likesCounter} />)

  return (
    <div >
      <div className={p.label}>
        My Posts
      </div>
      <PostInfo updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} addPost={props.addPost} />
      <div className={p.posts}>
        {postsData}
      </div>
    </div>
  )
};

export default MyPosts;