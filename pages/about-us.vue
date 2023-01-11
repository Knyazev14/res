<template>
  <main class="main">
    <div class="container">
      <Breadcrumbs catalogLink="" catalogName="Обо мне" />
      <h2 class="title">Обо мне</h2>
      <div class="me">
        <ul class="me__list">
          <li>Князев Артём Александрович</li>
          <li>Full-stack developer</li>
          <li>
            С 2019 года занимаюсь версткой сайтов. С 2021 года и по настоящее
            время разрабатываю сайты от А до Я.
          </li>
          <li>Проживаю в г.Могилеве (Республика Беларусь)</li>
        </ul>
        <div class="me-wrap">
          <img src="/me2.jpg" alt="Князев Артём" />
        </div>
      </div>
      <Skills />
      <Form />
    </div>
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
            "@type": "Person",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Могилев",
              addressRegion: "Могилевскаая область, Республика Беларусь",
            },
						description: "Князев Артём - разработчик самых производительных и индексируемых сайтов и веб приложений",
            email: "knyazev_artemm@mail.ru",
            image: "me2.jpg",
            jobTitle: "Full-stack developer",
            name: "Князев Артём",
            url: "http://kniazey.ru",
          }),
          type: "application/ld+json",
          body: true,
        },
      ],
      title: "Разработка сайтов и веб-приложений",
      meta: [{ hid: "description", name: "description", content: "Князев Артём - разработчик самых производительных и индексируемых сайтов и веб приложений" }],
    };
  },
};
</script>

<style>
.me {
  display: flex;
  align-items: center;
  margin-bottom: 70px;
  flex-direction: column;
  justify-content: center;
}
.me-wrap img {
  width: 290px;
  object-fit: cover;
  border-radius: 40px;
}
.me__list {
  margin-right: 30px;
  font-size: 16px;
  margin-bottom: 30px;
  line-height: 30px;
}
.me__list li + li {
  margin-top: 20px;
  line-height: 30px;
}
.me__list li {
  position: relative;
  padding-left: 30px;
  max-width: 460px;
}
.me__list li::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  background: url("/logo2.svg") no-repeat;
  background-size: contain;
  transform: translate(0, 50%);
}
@media (min-width: 820px) {
  .me {
    flex-direction: row;
    justify-content: flex-start;
  }
  .me__list {
    margin-right: 30px;
    font-size: 22px;
    margin-bottom: 0;
  }
  .me__list li::before {
    width: 30px;
    height: 30px;
    transform: translate(0, 0);
  }
  .me__list li {
    padding-left: 40px;
  }
  .me__list li + li {
    margin-top: 30px;
  }
  .me-wrap img {
    width: 320px;
  }
}
</style>
