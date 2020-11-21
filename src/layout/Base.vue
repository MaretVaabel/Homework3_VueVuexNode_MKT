<template>
  <div>
  
    <header >
        <Navbar />
    </header>

          
  </div>
</template>
<script>
import Navbar from './Navbar.vue'

export default {
  name: "Base",
  components: {
    Navbar,
  }
};
</script>

<style>
header {
  width: 100vw;
  background-color: white;
  padding: 15px;
}
</style>