<template>
  <section class="profile-container">
    <div class="profile" v-for="user in users" :key="user.id">
      <img :src="user.avatar" :alt="user.firstname + ' ' + user.lastname">
      <h4> {{ user.firstname }} {{ user.lastname }} </h4>
      <button class="follow-button" :id="user.id" @click="toggleFollow(user.id)">Follow</button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Browse',
  data () {
    return {}
  },
  methods: {
    toggleFollow(id) {
      let el = document.getElementById(id);
      if (el.innerHTML == "Follow") {
        el.innerHTML = "Followed"
      } else {
        el.innerHTML = "Follow"
      }
      el.classList.toggle("followed");
    }
  },
  computed: {
    users () {
      return this.$store.state.users;
    },
  },
  mounted () {
    this.$store.dispatch('getUsers');
  },
}
</script>
<style scoped>
.profile-container {
  display: flex;
  width: 50%;
  min-height: 100%;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
  background-color: white;
  flex-flow: row wrap;
}
.profile {
  width: 40%;
  max-width: 300px;
  display: flex;
  border: 1px solid white;w
border-radius: 5px;
  align-items: center;
  flex-direction: column;
  margin: 15px auto;
}
.profile img {
  width: 75px;
  height: 75px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}
.profile h2 {
  font-size: 16px;
}
.follow-button {
  background-color: purple;
}
.follow-button.followed {
  background-color: white;
  border: 1px solid purple;
  color: purple;
}
</style>