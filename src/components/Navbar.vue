<template>
    <header v-if="putNavbar()">
        <nav>
            <div class="logo-container">
                <img src="../assets/logo.png" alt="postIt" />
            </div>
            <div class="search-container">
                <input type="text" name="search" />
                <button type="button">Search</button>
            </div>
            <div class="avatar-container">
                <img class="avatar" :src='user["avatar"]' :alt='user.firstname + " " + user["lastname"]'
                     @click="toggleDropdown">
                <div v-if="dropdown" class="drop-down-container">
                    <span id="user-name"> {{ user.firstname }} {{ user.lastname }} </span>
                    <span id="user-email"> {{ user.email }} </span>
                    <span class="separator"></span>
                    <span @click="toggleDropdown">
                        <router-link to="/browse">Browse</router-link>
                    </span>
                    <span class="separator"></span>
                    <span @click="toggleDropdown">
                        <router-link to="/">Posts</router-link>
                    </span>
                    <span class="separator"></span>
                    <span @click="toggleDropdown">
                        <router-link to="/login">Log Out</router-link>
                    </span>
                     
                </div>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Navbar',
    data () {
        return {
            dropdown: false,
        }
    },
    methods: {
        toggleDropdown () {
            this["dropdown"] = !this.dropdown
        },
        putNavbar() {
            return !(this.$route.path === "/login");
        }
    },
    computed: {
        user () {
            return this.$store.state.user;
        },
    },
    mounted () {
        this.$store.dispatch('getUser');
    },
}

</script>

<style scoped>
header {
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1;
}

header:hover {
    box-shadow: 0 -20px 30px darkolivegreen;
}

nav {
    display: flex;
    background-color: white;
    align-items: center;
}

nav div {
    height: 53px;
    flex-grow: 4;
    padding: 10px;
}

nav div img {
    height: 100%;
    width: 30px;
    margin-left: 15px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
}

nav div.search-container > input {
    box-sizing: border-box;
    height: 30px;
    width: 80%;
    margin: 0;
    padding: 5px;
    border: 1px solid silver;
}

nav div.search-container > button {
    height: 30px;
    width: 20%;
    margin: 0;
    padding: 5px;
    color: white;
    background-color: dodgerblue;
    border: none;
    border-radius: 0 4px 4px 0;
}
nav div.search-container > button:hover {
	box-shadow: 0 0 5px rgba(40, 50, 55, 0.5);
	cursor: pointer;
}

nav div.avatar-container {
    margin-right: 15px;
    text-align: right;
}

.drop-down-container {
    position: absolute;
    min-width: 150px;
    height: auto;
    background-color: white;
    padding: 10px;
    right: 0;
    top: 50px;
    text-align: left;
}
.drop-down-container span{
    display: block;
}
.drop-down-container span.separator{
    border-bottom: 1px solid whitesmoke;
    margin: 10px -10px;
}
</style>