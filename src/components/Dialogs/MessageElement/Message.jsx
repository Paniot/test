import p from './../Dialogs.module.css'
import avatar from './../avatar/logo.png'

const Message = (props) => {
    return (
        <div className={p.message}>
            {props.message}
        </div>
    )
}

export default Message;