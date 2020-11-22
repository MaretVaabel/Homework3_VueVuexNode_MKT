<template>
  <div>
    <div class = "container" style = "padding-top: 10%">
      <div class = "row d-flex justify-content-center">
        <div class = "col-6 text-left login-form-container">
          <div class = "d-flex justify-content-center">
            <img src = "../../assets/logo.png" width = "175" alt/>
          </div>
           <div class = "text-center">
            <h3>Welcome to postIt!</h3>
          </div>
          <div>
            <div class = "form-group">
              <h4 class = "text-center p-4">Please Log In</h4>
              
              <input
                type = "email"
                class = "form-control"
                id = "exampleInputEmail1"
                aria-describedby = "emailHelp"
                placeholder = "Email"
              />
              <small
                id = "emailHelp"
                class = "form-text text-muted"
              >We'll never share your email with anyone else.</small>
            </div>
            <div class = "form-group">
              <input type = "password" class = "form-control" id = "exampleInputPassword1" placeholder = "Password"/>
            </div>
            <button @click = "login() && (isClicked = true)" :status = "isClicked" type = "submit" class = "btn btn-primary btn-block">Login</button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "Login",
  
  data () {
    return {
      isClicked: false
    }
  },
  methods: {
    ...mapActions("account", ["login"]),
  },
};
</script>

<style>
.form-control {
  border-radius: 0%;
}
.login-form-container {
  background-color: white;
  padding: 20px;
  box-shadow: 0px 2px 5px 2px grey;
}
.btn:hover {
  background: lightskyblue;
}
.btn:focus {
  background: teal;
}
</style>