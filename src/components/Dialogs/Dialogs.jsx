import p from './Dialogs.module.css'
import Dialog from './DialogElement/Dialog';
import Message from './MessageElement/Message';
import avatar from './avatar/logo.png'
import React from 'react';


const Dialogs = (props) => {
    

    const dialogsElements = props.dialogsPage.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} key={dialog.id}  avatar={avatar} />);
    const messagesElements = props.dialogsPage.messagesData.map(messagesText => <Message message={messagesText.message} key={messagesText.id} avatar={avatar} />);


    const onAddMessageButton = () => {
        props.addMessageActionCreatorButton()
    }

    const onMessageChange = (e) => {
        let body = e.target.value
        props.updateMessageActionCreator(body)
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
                        <textarea onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
                    </div>
                    <button onClick={onAddMessageButton}>Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;