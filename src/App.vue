<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  name: "app",
  components: {
    Navbar
  }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Literata&display=swap");
* {
  font-family: "Literata", serif;
  outline: none;
}
body {
  background-color: dodgerblue;
}
#app {
  outline: none;
  color: darkslategray;
  width: 100%;
  height: 100%;
}
button {
  padding: 6px 12px;
  margin: 4px 0;
  color: white;
  background-color: dodgerblue;
  border: none;
  border-radius: 4px;
  font-size: 12px;
}
button:hover {
  box-shadow: 0 0 5px hsla(200, 16%, 19%, 0.5);
  cursor: pointer;
}
</style>