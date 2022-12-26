


<template>
  <div class="wrapper">
    <Header />
    <button class="logout" @click="logout" v-if="this.$auth.loggedIn">
      Выход
    </button>
    <nuxt />
    <Footer />
  </div>
</template>


<script>
export default {
  head() {
    return {
      link: [
        { rel: "canonical", hred: `http://localhost:3000${this.$route.path}` },
      ],
    };
  },

  methods: {
    logout() {
      this.$auth.logout();
    },
  },
};
</script>


<style>
.logout {
  padding: 20px;
  background: rgba(128, 128, 128, 0.515);
  position: fixed;
  top: 200px;
  right: 0;
  color: white;
  font-weight: 700;
}
</style>
