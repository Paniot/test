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
            newPostText: 'Hello',
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
                { id: 2, message: 'I am studying props in React.' },
                { id: 3, message: 'Sorry, i am a little busy today.' },
                { id: 4, message: 'Today my web site was improved.' },
            ],
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
    addPost() {
    },
    updateNewPostText(newText) {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 9,
                message: this._state.profilePage.newPostText,
                name: 'Denis',
                likesCounter: 23
            };
            this._state.profilePage.postData.unshift(newPost)
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }

    }

}
window.store = store;

export default store;