import Picture from './../img/profile.jpg';
import './Profile.css'

const Profile = () => {
  return (
    <div className="content">
      <div className="content-img">
        <img src={Picture} alt="" className='image'></img>
      </div>
      <div>ava + des</div>
      <div>my posts
        <div>new post</div>
        <div>post 1</div>
        <div>post 2</div>
      </div>
    </div>
  )
};

export default Profile;