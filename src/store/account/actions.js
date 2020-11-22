import Axios from "axios";
import router from "../../router"

export function login({ commit }) {
    let url = "https://private-anon-e0d4b76204-wad20postit.apiary-mock.com/users/1";
    Axios.get(url).then(response => {
        console.log(response)
        let userInfo = {
            name: response.data.firstName + ' ' + response.data.lastName,
            email: response.data.email,
            avatar: response.data.avatar
        }
        commit("setUserData", userInfo)
        router.push("/base")
    })
        .catch(function (error) {
            console.log(error)
        });
}

export function browse({ commit }) {
    let url = "https://private-anon-5a6551f4d8-wad20postit.apiary-mock.com/profiles";
    Axios.get(url).then( response => {
        console.log(response)
        let userInfo = {
            name: response.data.firstName + " " + response.data.lastName,
            email: response.data.email,
            avatar: response.data.avatar
        }
        commit("setProfiles", userInfo)
        router.push("/base")
    })
        .catch(function (error) {
            console.log(error)
        });
}