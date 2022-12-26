<template>
  <header class="header">
    <div class="container">
      <div class="header-body">
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
        <button class="menu__icon" @click="menuShow = !menuShow">
          <span></span>
        </button>
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
.header {
  color: #fff;
  background-color: #3b8070;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 3;
}
.header-body {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
}
.logo {
  width: 40px;
  height: 40px;
}
.menu-link {
  color: white;
  font-weight: 500;
  font-size: 22px;
}
@media (any-hover: hover) {
  .menu-link:hover {
    color: rgb(223, 221, 221);
  }
}
.menu__list {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 100px;
  left: -200%;
  background: #3b8070;
  align-items: center;
  padding-top: 100px;
  transition: all 0.3s ease;
}
.menu__list-active {
  left: 0;
}
.menu li + li {
  margin-top: 40px;
}
.header-contacts-bot {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.name {
  display: flex;
  justify-content: flex-end;
  font-size: 22px;
  margin-bottom: 5px;
  font-weight: 700;
}
.mail {
  color: white;
  text-decoration: none;
  font-size: 14px;
}
.telegram {
  width: 25px;
  height: 25px;
  margin-right: 10px;
}
.menu__icon {
  width: 30px;
  height: 25px;
  position: relative;
  background: transparent;
}
.menu__icon::before,
.menu__icon::after,
.menu__icon span {
  content: "";
  width: 100%;
  height: 16%;
  position: absolute;
  background: white;
  left: 0;
}
.menu__icon::before {
  content: "";
  top: 0;
}
.menu__icon::after {
  content: "";
  bottom: 0;
}
.menu__icon span {
  bottom: 50%;
  transform: translate(0, 50%);
}
@media(min-width: 590px){
	.logo{
		width: 60px;
	  height: 60px;
	}
}
@media (min-width: 769px) {
  .menu__icon {
    display: none;
  }
	.name{
		font-size: 26px;
	}
	.mail{
		font-size: 16px;
	}
  .menu__list {
    position: static;
    flex-direction: row;
    background: transparent;
    padding-top: 0;
  }
  .menu li + li {
    margin-top: 0;
    margin-left: 20px;
  }
}
</style>