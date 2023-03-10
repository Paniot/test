import { userAPI } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    usersList: [],
    totalUsersAmmount: 1,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false,
};


const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) {
                        return ({ ...user, followed: true })
                    }
                    return user;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(user => {
                    if (user.id === action.userId) {
                        return ({ ...user, followed: false })
                    }
                    return user;
                })
            };
        case SET_USERS:
            return {
                ...state,
                usersList: action.usersList,
            };
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            };
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersAmmount: action.totalUsersAmmount,
            };
        case TOOGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOOGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress
            }
        default:
            return state;
    }

}


export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (usersList) => ({ type: SET_USERS, usersList })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsers = (totalUsersAmmount) => ({ type: TOTAL_USERS_COUNT, totalUsersAmmount })
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export const toogleIsFollowingProgress = (followingInProgress) => ({ type: TOOGLE_IS_FOLLOWING_PROGRESS, followingInProgress })


export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true))
        dispatch(setUsers([]))
        userAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(setTotalUsers(data.totalCount))
                dispatch(toogleIsFetching(false))
            })
    }
}

export const onPageChangeThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toogleIsFetching(true))
        dispatch(setCurrentPage(pageNumber));
        dispatch(setUsers([]))
        userAPI.getUsers(pageNumber, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(toogleIsFetching(false))
        })
    }
}

export const followButtonThunkCreator = (user) => {
    return (dispatch) => {
        dispatch(toogleIsFollowingProgress(true))
        userAPI.followButtonState(user.id).then(resultCode => {
            if (resultCode === 0) {
                dispatch(follow(user.id))
            }
            dispatch(toogleIsFollowingProgress(false))
        })
    }
}

export const unFollowButtonThunkCreator = (user) => {
    return (dispatch) => {
        dispatch(toogleIsFollowingProgress(true))
        userAPI.unFollowButtonState(user.id).then(resultCode => {
            if (resultCode === 1) {
                dispatch(unfollow(user.id))
            }
            dispatch(toogleIsFollowingProgress(false))
        })
    }
}



export default usersReducer;