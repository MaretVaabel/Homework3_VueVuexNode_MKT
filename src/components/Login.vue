<template>
  <div class="login-page">
    <section id="login-container">
      <div class="h1">
        <h1>Welcome to postIt!</h1>
      </div>
      <div class="h4">
        <h4>
          <router-link to="/login">Create an Account</router-link>
        </h4>
      </div>
      <div>
        <h4>Or</h4>
      </div>
      <div class="h3">
        <h3>Please Log In</h3>
        <form class="form">
          <div>
            <input type="text" name="email" placeholder="Email">
          </div>
          <div>
            <input type="password" name="password" placeholder="Password">
          </div>
          <div>
            <router-link to="/" tag="button">Log In</router-link>
          </div>
          <div>
            <small>
              <router-link to="/login">Forgot password?</router-link>
            </small>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.login-page {
  width: 100%;
  height: 100%;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto auto;
  padding: 90px 15px 15px 15px;
}
div h1 {
  font-size: 27px;
}
div h4 {
  font-size: 17px;
}
div h3 {
  font-size: 17px;
}
form form {
  font-size: 25px
}
#login-container {
  background-image: url(../assets/logo.png);
  background-size: 10% auto;
  background-repeat: no-repeat;
  background-position: 10px 10px;
  min-width: 25%;
  padding: 45px 45px;
  background-color: white;
  box-shadow: 0 0 15px hsla(200, 19%, 18%, 0.33);
  text-align: center;
  font-size: 20px;
}
#login-container form div > input {
  padding: 6px 12px;
  margin: 2px 2px;
}
</style>