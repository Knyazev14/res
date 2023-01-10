<template>
  <main class="main">
    <div class="container">
      <div class="main-body">
        <div class="main-content">
          <h1 class="main-title">
            Cайты и <span>веб-приложения</span> под ключ
          </h1>
          <p>Максимальная производительность и поисковая выдача!</p>
          <div class="btns">
            <nuxt-link class="btns-link" to="/about-us"
              ><img class="play-icon" src="/icon.svg" alt="Почему мы" />Обо
              ине</nuxt-link
            >
            <button class="btns-form">
              <a href="#formgo" v-smooth-scroll>Описать заказ</a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="container">
        <div class="center-body">
          <div class="item">
            <img
              src="/speed.svg"
              alt="Быстрее веб-студий:разработка, правки, результат"
            />
            <span>Быстрее веб-студий:разработка, правки</span>
          </div>
          <div class="item">
            <img
              src="/top.svg"
              alt="Быстрее веб-студий:разработка, правки, результат"
            />
            <span>Работаю на результат, а не ради отчётов</span>
          </div>
          <div class="item">
            <img
              src="/skill.svg"
              alt="Быстрее веб-студий:разработка, правки, результат"
            />
            <span>Использую современные технологии</span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-main">
      <div class="container">
        <div class="text-main-txt">
          <p>
            Ко мне можно обращаться по задачам любой сложности (от доработки
            небольших блоков сайта до full разработки крупных
            интернет-магазинов). Общаюсь с клиентами напрямую (доступен в любое
            время). Всю работу веду самостоятельно. Оплата производится после
            выполнения поставленной задачи.
          </p>
        </div>
      </div>
    </div>
    <Services />
    <Skills />
    <Form id="formgo" />
  </main>
</template>

<script>
export default {
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Князев Артём",
						"description": "Создание сайтов и веб-приложений, обучение верстке сайтов, доработка, ускорение, продвиждение сайтов.", 
            email: "knyazev_artemm@mail.ru",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5", 
              ratingCount: "56", 
            },
            "address": {
							"@type": "PostalAddress",
							"addressLocality": "Могилев",
							"addressRegion": "Могилевская область, Республика Беларусь",
							"addressCountry" : "RU"
						},
            url: "http://kniazey.ru",
            logo: "http://kniazey.ru/logo2.svg",
          }),
          type: "application/ld+json",
          body: true,
        },
      ],
      title: "Князев Артём | Разработка сайтов и веб-приложений",
      meta: [{ hid: "description", name: "description", content: "Создать сайт или веб-приложение, обучение верстке сайтов, доработка, ускорение, продвиждение сайтов. Дешевле и быстрее чем  веб-студии!" }],
    };
  },
};
</script>


<style>
.main {
  margin-top: 100px;
  color: #213547;
  flex: 1 1 auto;
}
.main-body {
  padding-top: 110px;
  margin-bottom: 90px;
}
.main-content p {
  color: rgba(60, 60, 60, 0.7);
  font-size: 24px;
  text-align: center;
  margin-bottom: 50px;
}
.main-title {
  font-size: 38px;
  font-weight: 700;
  max-width: 500px;
  text-align: center;
  margin: 0 auto 40px;
}
.main-title span {
  background: -webkit-linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.btns {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btns-link {
  display: inline-flex;
  background: #42b883;
  color: white;
  font-weight: 700;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  align-items: center;
  width: 180px;
  transition: all 0.3s ease;
}
@media (any-hover: hover) {
  .btns-link:hover {
    background: #155f3e;
  }
  .btns-form:hover {
    background: #e5e5e5;
  }
  .service-item:hover .service-img {
    scale: 1.2;
  }
  .form-1-btn:hover {
    background: #155f3e;
  }
}
.play-icon {
  width: 35px;
  height: 35px;
  margin-right: 10px;
}
.btns-form {
  width: 180px;
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  align-items: center;
  font-weight: 700;
  background: #f1f1f1;
  margin-top: 20px;
  min-height: 55px;
}
.btns-form a {
  color: #476582;
}
.center {
  widows: 100%;
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  padding: 20px 0;
  margin-bottom: 70px;
}
.center-body {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.center-body .item img {
  width: 70px;
  height: 70px;
  object-fit: contain;
  margin-bottom: 15px;
}
.center-body .item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.center-body .item + .item {
  margin-top: 40px;
}
.center-body span {
  font-size: 18px;
  max-width: 190px;
  text-align: center;
  font-weight: 700;
}
.text-main {
  margin-bottom: 100px;
}
.text-main-txt {
  display: flex;
  justify-content: center;
}
.text-main-txt p {
  max-width: 992px;
  font-size: 19px;
  line-height: 24px;
  text-align: center;
}
.title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 50px;
}
@media (min-width: 590px) {
  .center-body {
    flex-direction: row;
  }
  .center-body .item + .item {
    margin-top: 0;
    margin-left: 40px;
  }
}
@media (min-width: 768px) {
  .main-title {
    font-size: 76px;
    line-height: 80px;
    max-width: 900px;
  }
  .btns {
    flex-direction: row;
    justify-content: center;
  }
  .btns-form {
    margin-top: 0;
    margin-left: 20px;
  }
  .title {
    font-size: 40px;
  }
}
</style>

