import p from './Dialogs.module.css'
import Dialog from './DialogElement/Dialog';
import Message from './MessageElement/Message';
import avatar from './avatar/logo.png'
import React from 'react';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/store';



const Dialogs = (props) => {
    let store = props.store.getState().dialogsPage;

    const dialogsElements = store.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} avatar={avatar} />);
    const messagesElements = store.messagesData.map(messagesText => <Message message={messagesText.message} avatar={avatar} />);


    const onAddMessage = (e) => {
        if ((e.keyCode === 13 && e.shiftKey === false)) {
        props.store.dispatch(addMessageActionCreator())
        }
    }

    const onAddMessageButton = (e) => {
        props.store.dispatch(addMessageActionCreator())
    }

    const onMessageChange = (e) => {
            let text = e.target.value
            let action = updateMessageActionCreator(text)
            props.store.dispatch(action)
        
    }

    return (
        <div className={p.dialogs} >
            <div className={p.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={p.messages}>
                <div className={p.messagesArea}>
                    {messagesElements}
                </div>
                <div className={p.workingArea}>
                    <div>
                        <textarea onChange={onMessageChange} onKeyDown={onAddMessage} value={store.newMessageText} />
                    </div>
                    <button onClick={onAddMessageButton}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;