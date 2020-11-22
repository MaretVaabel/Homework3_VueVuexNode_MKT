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

.main-container {
   width: 50%;
    min-height: 100%;
    margin: auto auto;
    padding: 90px 15px 15px 15px;
    background-color: #ffffff;
}
</style>