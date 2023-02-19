import p from './Dialogs.module.css'
import Dialog from './DialogElement/Dialog';
import Message from './MessageElement/Message';
import avatar from './avatar/logo.png'
import React from 'react';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => <Dialog name={dialog.name} id={dialog.id} avatar={avatar} />);

    let messagesElements = props.messagesData.map(messagesText => <Message message={messagesText.message} avatar={avatar} />);

    let newMessageText = React.createRef()

    const AddNewMessage = () => {
        alert(newMessageText.current.value)
        newMessageText.current.value = '';
    }

 
    return (
        <div className={p.dialogs} >
            <div className={p.dialogsItems}>
                {dialogsElements}
            </div> 
            <div className={p.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={p.workingArea}>
                    <div>
                        <textarea  ref={newMessageText} />
                    </div>
                    <button onClick={AddNewMessage} >Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;