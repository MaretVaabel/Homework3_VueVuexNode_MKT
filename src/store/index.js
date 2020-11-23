import axios from 'axios'

const actions = {
    getUsers({ commit }) {
      let url = 'https://private-517bb-wad20postit.apiary-mock.com/profiles'
        axios.get(url)
        .then(response => {
            commit('SetUsers', response.data)
        });
    },
    getUser({ commit }) {
      let url = 'https://private-517bb-wad20postit.apiary-mock.com/users/1'
        axios.get(url)
        .then(response => {
            commit('SetUser', response.data)
        });
    },
    getPosts({ commit }) {
      let url = 'https://private-517bb-wad20postit.apiary-mock.com/posts'
        axios.get(url)
        .then(response => {
            commit('SetPosts', response.data)
        });
    }
};

const getters = {
    allUsers: (state) => state.users
};

const mutations = {
    SetUsers(state, users) {
        state.users = users;
    },
    SetUser(state, user) {
        state.user = user;
    },
    SetPosts(state, posts) {
        state.posts = posts;
    }
};

const state = {
    users: [],
    user: {},
    posts: []
};

export default {
    actions,
    getters,
    mutations,
    state,
}

