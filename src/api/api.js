import axios from "axios";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
});

export const userAPI = {
    getUsers(currentPage, pageSize) {
        return (
            instance
                .get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data))

    },
    getUsersProfile(userId) {
        return (
            instance
                .get(`profile/` + userId)
        )
    },
    followButtonState(userId) {
        return (
            instance
                .post(`follow/${userId}`, {}).then(response => response.data.resultCode)
        )
    },
    unFollowButtonState(userId) {
        return (
            instance
                .delete(`follow/${userId}`).then(response => response.data.resultCode)
        )
    },
    getAuthUserData() {
        return (
            instance
                .get('auth/me')
        )
    }
}

