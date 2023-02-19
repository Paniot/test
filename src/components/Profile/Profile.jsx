import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPosts updateNewPostText={props.updateNewPostText} postData={props.postData} newPostText={props.newPostText} addPost={props.addPost} />
    </div>
  )
};

export default Profile;
