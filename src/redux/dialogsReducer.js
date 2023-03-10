const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            };
            return {
                ...state,
                messagesData: [ ...state.messagesData, newMessage],
                newMessageText: '',
            };

        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return { 
                ...state,
                newMessageText: action.newMessageText,
             }
        }
        default:
            return state
    }  
}

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE,
})

export const updateMessageActionCreator = (message) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newMessageText: message
});

export default dialogsReducer;