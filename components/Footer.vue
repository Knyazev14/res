<template>
  <header class="footer">
    <div class="container">
      <div class="footer__body">
        <nuxt-link to="/">
          <img class="logo" src="/logo.svg" alt="Логотип" />
        </nuxt-link>
        <nav class="menu">
          <ul
            :class="[menuShow ? 'menu__list' : 'menu__list menu__list-active']"
          >
            <li @click="menuShow = !menuShow">
              <nuxt-link class="menu-link" to="/service"> Услуги</nuxt-link>
            </li>
            <li @click="menuShow = !menuShow">
              <nuxt-link class="menu-link" to="/keis">Кейсы</nuxt-link>
            </li>
            <li @click="menuShow = !menuShow">
              <nuxt-link class="menu-link" to="/blog"
                >Вопросы верстальщика</nuxt-link
              >
            </li>
          </ul>
        </nav>
        <div class="header-contacts">
          <div class="name">Князев Артём</div>
          <div class="header-contacts-bot">
            <a href="https://t.me/knyazevmog">
              <img class="telegram" src="/telegram.svg" alt="Телеграм" />
            </a>
            <a
              class="mail"
              href="mailto:knyazev_artemm@mail.ru"
              target="_blank"
            >
              knyazev_artemm@mail.ru
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuShow: true,
    };
  },
};
</script>

<style>
	.footer{
		color: #fff;
		background-color: #3b8070;
		width: 100%;
		margin-top: 70px;
	}
	.footer__body{
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100px;
	}
</style>