<template>
    <nav class="d-flex justify-content-between">
        <div class="menu-item"><router-link  to="/base"><img class="mx-auto d-block" style="width:50px" src="../assets/logo.png" alt/></router-link></div>
        <form>
            <div class="row">
            <div class="col p-0">
                <input type="text" class="form-control" >
            </div>
            <button type="search" class="btn btn-primary" src="www.google.com">Search</button>
            </div>
        </form>
        <Dropdown class="dropdown" :src="user.avatar"/>
    </nav>
</template>

<script>
import Dropdown from './Dropdown.vue'
import { mapGetters } from "vuex"

export default {
    name: 'navbar',
    components: {
        Dropdown,
    },
    computed: {
        ...mapGetters("account", ["user"]),
     },
   
    
}
</script>

<style scoped>
nav {
    display: flex;
    align-items: center;
    justify-content: center;
}

nav .menu-item {
    padding: 10px;
    position: relative;
    text-align: center;
    display: flex;
}
.dropdown {
    align-content: right;
    margin-right: 10px;
}

</style>