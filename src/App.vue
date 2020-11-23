<template>
  <div id="app">
<<<<<<< Updated upstream
     
        <router-view />
      
=======
    <Navbar/>
    <router-view/>
>>>>>>> Stashed changes
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
<<<<<<< Updated upstream
  name: 'app',
=======
  name: "app",
  components: {
    Navbar
  }
>>>>>>> Stashed changes
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Literata&display=swap");
* {
<<<<<<< Updated upstream
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
=======
  font-family: "Literata", serif;
  outline: none;
>>>>>>> Stashed changes
}
body {
<<<<<<< Updated upstream
  font-family: 'montserrat', sans-serif;
  background-color: #0277bd;
  color: #263238;
}

</style>

=======
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
>>>>>>> Stashed changes
