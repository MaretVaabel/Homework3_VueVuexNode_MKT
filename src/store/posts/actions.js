import axios from "axios"

//Action to get posts list


    export function getPosts({ commit }) {
        let url = "https://private-anon-5a6551f4d8-wad20postit.apiary-mock.com/posts";
        axios.get(url).then((response) => {
            commit("setPosts", response.data);
            //console.log("getPosts");
            //console.log(response.data);
        }).catch(error => {
            console.log(error);
        });


    }

    /*export function getPost({ commit }) {
        let url = "https://private-anon-5a6551f4d8-wad20postit.apiary-mock.com/users/1";
        axios.get(url).then((response) => {
            commit("setPosts", response.data);
            //console.log("getProfiles");
            //console.log(response.data);
        }).catch(error => {
            console.log(error);
        });*/
    /*export function postDetails({ commit }) {
        let url = "https://private-anon-5a6551f4d8-wad20postit.apiary-mock.com/profiles";
        axios.get(url).then((response) => {
            commit("setPost", response.data[0]);
        }).catch(function (error) {
            console.log(error);
        });
    }
    //export function postDetails({ commit }, id) 
  //axios.get(url, { params: { id: id } }).then((response) =>*/