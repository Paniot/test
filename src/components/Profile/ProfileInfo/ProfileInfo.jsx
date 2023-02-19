import Picture from './profile.jpeg';
import p from './ProfileInfo.module.css'

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src={Picture} alt="" className={p.image}></img>
      </div>
      <div className={p.descriptionBlock}>
        ava + des
      </div>
    </div>
  )
};

export default ProfileInfo;