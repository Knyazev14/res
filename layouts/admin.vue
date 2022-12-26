<template>
  <div class="wrapper">
		<Header/>
		<button class="logout" @click="logout" v-if="this.$auth.loggedIn">Выход</button>
    <nuxt />
		<Footer/>
  </div>
</template>


<script>

export default {
	middleware: 'auth',
		methods: {
    logout() {
      this.$auth.logout();
    }
  }
}
</script>



