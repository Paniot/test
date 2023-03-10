import Preloader from '../../common/Preloader/Preloader';
import Picture from './profile.jpeg';
import p from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img src={Picture} alt="" className={p.image}></img>
      </div>
      <div className={p.descriptionBlock}>
      <img alt='' src={props.profile.photos.large}/>
      <div>{props.profile.fullName}</div>
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.lookingForAJob ? 'Open For Any Job Opportunity' : 'Closed For Any Job Opportunity' }</div>
      </div>
    </div>
  )
};

export default ProfileInfo;