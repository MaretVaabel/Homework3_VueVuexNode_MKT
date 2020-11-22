<template>
    <div class="menu-item" @click="isOpen = !isOpen">
        <a href="#">
            <img :src="user.avatar" alt/>
        </a>
        <transition name='fade' appear>
        <div class="sub-menu" v-if="isOpen">
            <div class="menu-item">
                <div class="menu-info">
                    <p> {{ user.name }} </p>
                    <p> {{ user.email }} </p>
                </div>
               <p><router-link  to="/browse">Browse</router-link></p>
               <p><router-link  to="/login">Log out</router-link></p>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
    name: 'dropdown',

    data () {
        return {
            isOpen: false
        }
    },
     computed: {
        ...mapGetters("account", ["user"]),
     },
}
</script>

<style scoped>
nav .menu-item .sub-menu {
    position: absolute;
    background-color: white;
    top: calc(100% + 10px);
    transform: translateX(-50%);
    width: max-content;
    text-align: left;
    padding: 10px;
    border-bottom: 1px solid black;

}

.fade-enter-active,
.fade-leave-active {
    transition: all .5s ease-out;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top center;
    margin-right: 12px;
}

</style>