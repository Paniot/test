const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData: [
        { id: 1, message: 'Hi, How are you?', name: 'Serhii', likesCounter: 25 },
        { id: 2, message: 'It is second post', name: 'Vlad', likesCounter: 20 },
        { id: 3, message: 'It is second post', name: 'Vlad', likesCounter: 20 },
        { id: 4, message: 'It is second post', name: 'Vlad', likesCounter: 20 },
        { id: 5, message: 'It is second post', name: 'Vlad', likesCounter: 20 },
        { id: 6, message: 'It is second post', name: 'Vlad', likesCounter: 20 },
        { id: 7, message: 'It is second post', name: 'Vlad', likesCounter: 20 },
        { id: 8, message: 'It is second post', name: 'Vlad', likesCounter: 20 },
    ],
    profile: null,
    newPostText: '',
};



const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.postData.length + 1,
                message: state.newPostText,
                name: 'Denis',
                likesCounter: 23
            };
            return {
                ...state,
                postData: [newPost, ...state.postData],
                newPostText: '',
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state
    }
};

export const addPostActionCreator = () => ({
    type: ADD_POST,
});

export const updatePostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile,
});

export default profileReducer;