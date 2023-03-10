import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
    _state: {
        profilePage: {
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
            newPostText: '',
        },
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Vova' },
                { id: 3, name: 'Thorat' },
                { id: 4, name: 'Sased' },
                { id: 5, name: 'Sasedka' },
                { id: 6, name: 'Slave' },
            ],
            messagesData: [
                { id: 1, message: 'Hello? How are you?' },
                { id: 2, message: 'Second Message' },
                { id: 3, message: 'Third Message' },
                { id: 4, message: 'Fourth Message' },
            ],
            newMessageText: '',
        },
        sideBar: {
            friends: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Vova' },
                { id: 3, name: 'Thorat' },
                { id: 4, name: 'Sased' },
                { id: 5, name: 'Sasedka' },
                { id: 6, name: 'Slave' },
            ],
        }
    },
    _callSubscriber() {
        alert('State Changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state)
    }
}


export default store;