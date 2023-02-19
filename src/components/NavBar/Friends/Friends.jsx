import p from './Friends.module.css';

const Friends = () => {
    return (
        <div className={p.friends}>
            <div className={p.friendsTittle}>FRIENDS</div>
            <div className={p.friendsIcons}>
                <div className={p.friend}>First</div>
                <div className={p.friend}>Second</div>
                <div className={p.friend}>Third</div>
            </div>
        </div>
    )
};

export default Friends;