import avatar from './avatar/logo.png';
import p from './Users.module.css';
import React from 'react';
import { NavLink } from 'react-router-dom';


const Users = (props) => {

    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages.push(i)
    };


    return (
        <div className={p.container}>
            <div className={p.pages}>
                {pages.map(page => {
                    return <span key={page} className={props.currentPage === page ? p.selectedPage : null}
                        onClick={() => { props.onPageChanged(page, props.pageSize) }}>{page}</span>
                })}
            </div>
            {props.usersList.map(user =>
                <div key={user.id} className={p.user}>
                    <div className={p.avatar_button}>
                        <div>
                            <NavLink to={`/profile/` + user.id}>
                                <img alt='' src={user.photos.small !== null ? user.photos.small : avatar} className={p.avatar} />
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={props.followingInProgress} onClick={() => { props.unFollowButton(user) }} >{user.followed ? 'Follow' : 'Unfollow'}</button>
                                : <button disabled={props.followingInProgress} onClick={() => { props.followButton(user) }} >{user.followed ? 'Follow' : 'Unfollow'}</button>}
                        </div>
                    </div>
                    <div className={p.mainInfo}>
                        <div className={p.name_status}>
                            <div className={p.name}>{user.name}</div>
                            <div className={p.status}>{user.status}</div>
                        </div>
                        <div className={p.location}>
                            <div className={p.location_city}></div>
                            <div className={p.location_country}></div>
                        </div>
                    </div>
                </div>
            )
            }
        </div >
    )
};

export default Users;