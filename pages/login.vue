<template>
  <div class="wrapper">
    <div class="container">
      <form class="sign" @submit.prevent="userLogin">

        <input class="sign__inp" placeholder="Login" type="text" v-model="login.user" />

        <input class="sign__inp" type="text" placeholder="Password" v-model="login.password" />

        <button class="sign__btn" type="submit">Submit</button>
      </form>
			{{ this.$auth.loggedIn }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: {
        user: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login,
        });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>


<style  scoped>
.sign {
  padding-top: 200px;
}
.sign__inp{
	width: 100%;
	max-width: 600px;
	padding: 15px;
	font-size: 20px;
	border: 1px solid rgb(62, 193, 62);
	border-radius: 10px;
}
.sign__inp + .sign__inp{
	margin-top: 30px;
}
.sign__btn{
	width: 100%;
	max-width: 600px;
	padding: 15px;
	font-size: 20px;
	margin-top: 30px;
	display: inline-block;
	background: #42d392;
	color: white;
	border-radius: 10px;
	font-weight: 700;
}
</style>


