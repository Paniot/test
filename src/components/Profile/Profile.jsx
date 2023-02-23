import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        // store={props.store}
        // dispatch={props.dispatch}
        // postData={props.postPage.postData}
        // newPostText={props.postPage.newPostText}
      />
    </div>
  )
};

export default Profile;
