<template>
  <main class="main">
    <div class="container">
      <div id="content">
        <Breadcrumbs
          catalogLink="/service/"
          catalogName="Услуги /"
          :pageH1="service.h1"
        />
        <div class="card">
          <h2 class="title">{{ service.h1 }}</h2>
          <div class="card__content">
            <div v-html="service.content"></div>
            <Form />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  head() {
    return {
      __dangerouslyDisableSanitizers: ["script"],
      script: [
        {
          innerHTML: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: this.service.h1,
            image: "https://kniazey.ru/seo.webp",
            description: this.service.description,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              ratingCount: "56",
            },
            offers: {
              "@type": "Offer",
              availability: "https://schema.org/InStock",
              price: "10",
              priceCurrency: "USD",
							seller:{
								"@type": "Organization",
								name: "Князев Артём"
							}
            },
          }),
          type: "application/ld+json",
          body: true,
        },
      ],
      title: this.service.title,
      meta: [{ hid: "description", name: "description", content: this.service.description }],
    };
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://kniazey.ru/api/service/${params.id}`
    );
    return { service: data };
  },
};
</script>


<style>
.top {
  display: flex;
  flex-direction: column;
}
.card__content-txt {
  font-size: 18px;
  width: 100%;
  text-align: justify;
  line-height: 30px;
  margin-bottom: 20px;
}
.card__content-txt .price__item {
  margin-top: 15px;
  display: block;
  max-width: 450px;
  text-align: center;
}
.card__content-img {
  width: 100%;
  max-width: 100%;
  max-height: 300px;
  border-radius: 25px;
  object-fit: cover;
  margin-bottom: 20px;
}
.color {
  color: rgba(25, 56, 188, 0.7);
  font-weight: 500;
}
.seo-card {
  flex-wrap: wrap;
}
.card__center-item {
  width: 45%;
}
.seo-card-item {
  width: 100% !important;
}
.seo-block {
  display: flex;
  margin-bottom: 70px;
  flex-direction: column;
}
.seo-block .card__center-content {
  display: flex;
  flex-direction: column;
}
.seo-text {
  text-align: center;
  font-size: 30px;
  margin-bottom: 50px;
}
.seo-block h6 {
  font-weight: 500;
  border-bottom: 3px solid #de6969;
  font-size: 18px;
  text-align: center;
  width: 100%;
}
.seo-block img {
  border-radius: 25px;
  width: 100%;
  object-fit: cover;
  max-height: 300px;
  margin-bottom: 20px;
}
.card__center-item-title {
  font-size: 26px;
  font-weight: 700;
  border-bottom: 5px solid #42b883;
  display: inline-block;
  padding-right: 30px;
  margin-bottom: 20px;
  padding-bottom: 5px;
}
.card__center {
}
.card__center-title {
  text-align: center;
  margin-top: 50px;
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
}
.card__center-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: column;
}
.card__center-item {
  width: 100%;
  margin-bottom: 25px;
}
.card__center-item-txt {
  font-size: 18px;
  line-height: 30px;
}
.card__center-box {
  font-size: 18px;
  line-height: 30px;
}
.card__center-box p {
  text-align: justify;
  margin-bottom: 20px;
}
.card__center-sub-title {
  text-align: center;
  font-size: 18px;
  line-height: 30px;
  max-width: 665px;
  margin: 0 auto 30px;
}
.price__item {
  border: 1px solid #42b883;
  display: inline-flex;
  padding: 10px;
  border-radius: 20px;
  margin-bottom: 20px;
  margin-right: 5px;
  font-size: 16px;
}
.price__ps {
  color: #42b883;
  max-width: 868px;
  display: inline-block;
  font-weight: 500;
  margin-bottom: 70px;
}
.remake__list {
  margin-bottom: 50px;
}
.remake__list li {
  font-size: 22px;
  line-height: 30px;
  position: relative;
  padding-left: 40px;
}
.remake__list li::before {
  content: "";
  top: 50%;
  transform: translate(0, -50%);
  left: 0;
  width: 20px;
  height: 20px;
  background: url("../../static/cross.svg") no-repeat;
  position: absolute;
  background-size: contain;
}
.remake__list li + li {
  margin-top: 30px;
}
.color-2 {
  color: orange;
  font-weight: 500;
}
.color-3 {
  color: gold;
  font-weight: 500;
}
.learn-color {
  color: #42b883;
  font-weight: 500;
}
.learn__list {
  font-size: 22px;
  line-height: 30px;
  margin-bottom: 70px;
}
.learn__list li + li {
  margin-top: 30px;
}
@media (min-width: 768px) {
  .card__center-item {
    width: 40%;
    margin-bottom: 25px;
  }
  .card__center-content {
    justify-content: space-between;
    flex-direction: row;
  }
  .price__item {
    padding: 15px;
    margin-right: 30px;
    font-size: 22px;
  }
}
@media (min-width: 1120px) {
  .top {
    justify-content: space-between;
    flex-direction: row;
  }
  .card__content-img {
    max-width: 440px;
    margin-bottom: 0;
  }
  .card__content-txt {
    font-size: 22px;
    max-width: 600px;
  }
  .card__center-item-txt {
    font-size: 22px;
    line-height: 30px;
    text-align: justify;
  }
  .card__center-box {
    font-size: 22px;
  }
  .card__center-item {
    width: 30%;
  }
  .card__center-sub-title {
    font-size: 22px;
    line-height: 30px;
    max-width: 768px;
  }
  .card__content-txt .price__item {
    margin-top: 15px;
    display: inline-block;
  }
  .seo-block {
    flex-direction: row;
  }
  .seo-block img {
    margin-right: 30px;
    margin-bottom: 0;
    width: 100%;
    max-width: 440px;
    max-height: 300px;
  }
  .seo-block img {
    max-width: 440px;
  }
}
</style>