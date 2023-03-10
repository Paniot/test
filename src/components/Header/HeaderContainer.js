import { useEffect } from "react";
import { connect } from "react-redux";
import { userAPI } from "../../api/api";
import { setAuthUserData } from "../../redux/authReducer";
import Header from "./Header"


const HeaderContainer = (props) => {

    useEffect(() => {
        userAPI.getAuthUserData()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data
                    props.setAuthUserData(id, email, login)
                }
            })
    })

    return <Header props={props} />
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer);