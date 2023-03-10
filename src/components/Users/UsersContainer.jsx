import React from "react";
import { connect } from "react-redux";
import { followButtonThunkCreator, getUsersThunkCreator, onPageChangeThunkCreator, unFollowButtonThunkCreator } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";


class UsersContainer extends React.Component {
    
    componentDidMount () {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber, pageSize) => {
       this.props.onPageChangeThunkCreator(pageNumber, pageSize)
    }

    followButton = (user) => {
        this.props.followButtonThunkCreator(user)
    }

    unFollowButton = (user) => {
        this.props.unFollowButtonThunkCreator(user)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                currentPage={this.props.currentPage}
                usersList={this.props.usersList}
                onPageChanged={this.onPageChanged}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                unFollowButton={this.unFollowButton}
                followButton={this.followButton}
                followingInProgress={this.props.followingInProgress}
                pageSize={this.props.pageSize}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    
    return {
        usersList: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersAmmount: state.usersPage.totalUsersAmmount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default connect(mapStateToProps, {
    getUsersThunkCreator, onPageChangeThunkCreator, 
    followButtonThunkCreator,unFollowButtonThunkCreator,
})(UsersContainer)
