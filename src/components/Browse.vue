<template>
  <section class="profiles-container"  >
    <div class="profile" v-for="user in users" :key="user.id">
      <div class="profile-author">
        <img alt="avatar" :src="user.avatar">
        <p>{{user.firstname + " " + user.lastname}}</p>
      </div>
      <button :index="user.id" :class="{'follow':!selected[user.id], 'followed': selected[user.id]}" @click="followed(user.id)">
        <span v-if="!selected[user.id]">Follow</span>
        <span v-if="selected[user.id]">Followed</span>
      </button>
    </div>
  </section>
</template>
<script>
export default {
  name:'Browse',
  data() {
    return {
      selected: [],
    }
  },
  mounted(){
    this.$store.dispatch('getUsers')
  },
  computed: {
    users: function() {
      return this.$store.state["users"];
    },
  },
  methods:{
    loadUsers:function (data){
      for (let user of data) {
        this.users.push(user)
        this.$set(this.selected,user.id, false)
      }
    },
    followed(id) {
      this.$set(this.selected, id, !this["selected"][id])
    }
  },
}
</script>
<style>
.profiles-container{
  display: flex;
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: white;
  flex-flow: row wrap;
}
.profile{
  box-shadow: 0 0 15px hsla(200, 16%, 19%, 0.5);
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 43%;
  margin:15px;
}
.profile .profile-author img {
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 175px;
  height: 175px;
}
.profile .profile-author p {
  text-align: center;
  padding: 10px;
}
.follow {
  line-height: 15px;
  height: 30px;
  border-color: indigo;
  text-align: center;
  margin-bottom: 15%;
  background-color: indigo;
  color: white;
}
.followed {
  line-height: 15px;
  height: 30px;
  text-align: center;
  margin-bottom: 15%;
  background-color: white;
  color: indigo;
}
</style>