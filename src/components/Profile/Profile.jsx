import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts dispatch={props.dispatch}
        postData={props.postData}
        newPostText={props.newPostText}
         />
    </div>
  )
};

export default Profile;
