<template>
  <div>
    <Navbar/>
    <section class="main-container">
      <div class="profile" v-for="profile in profiles" :key="profile.id">
        <img :src="profile.avatar" alt="Avatar">
        <div class="profile-name">
          {{profile.firstname}} {{profile.lastname}}
        </div>
        <div class="profile-actions">
          <button type="button" name="follow" class="follow-button " @click="followedFilter">Follow</button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from '../../layout/Navbar.vue';

export default {
  name: 'Browse',
  components: {
    Navbar
  },
  computed: {
    profiles() {
      return this.$store.getters.getProfiles;
    }
  },
  methods: {
    followedFilter: e => {
      e.target.classList.toggle('followed');
      e.target.textContent = e.target.classList.contains("followed") ? "Followed" : "Follow";
    }
  },
  mounted() {
    this.$store.dispatch("fetchProfiles");
  }
}
</script>

<style>
.profile {
    width: 45%;
    display: inline-block;
    border: 1px solid #dedede;
    border-radius: 5px;
    text-align: center;
    margin: 1%;
}
.profile img{
    width: 75px;
    height: 75px;
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    margin: 5px;
}

.profile h2{
    font-size: 16px;
}
</style>