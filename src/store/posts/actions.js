import axios from "axios"

//Action to get products list


    export function getPosts({ commit }) {
        let url = "";
        axios.get(url).then((response) => {
            commit("setPosts", response.data);
        }).catch(error => {
            console.log(error);
        });
    }
    export function postDetails({ commit }, id) {
        let url = "";
        axios.get(url, { params: { id: id } }).then((response) => {
            commit("setPost", response.data[0]);
        }).catch(function (error) {
            console.log(error);
        });
    }
  