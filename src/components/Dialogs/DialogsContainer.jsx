import { connect } from 'react-redux';
import { addMessageActionCreator, updateMessageActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    };
};
 
const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageActionCreator: (body) => {
            dispatch(updateMessageActionCreator(body))
        }, 
        addMessageActionCreatorButton: () => {
            dispatch(addMessageActionCreator())
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;