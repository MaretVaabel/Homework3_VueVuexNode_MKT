<template>
  <div id = "app">
        <router-view />
  </div>
</template>

<script>

export default {
  name: "app",
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box; 
}

body {
  font-family: 'Open Sans', sans-serif;
  background-color: dodgerblue;
  color: darkslategray;
}
</style>

