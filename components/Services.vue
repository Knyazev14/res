<template>
	  <section class="service">
      <div class="container">
        <h3 class="title">Услуги</h3>
        <div class="service-body">
          <nuxt-link
            :to="`/service/${service.url}`"
            class="service-item"
            v-for="service in services"
            :key="service._id"
          >
            <div>
              <img
                class="service-img"
                :src="`/uploads/service/${service.coverImageName.filename}`"
                :alt="`${service.h1}`"
              />
            </div>
            <span>{{ service.h1 }}</span>
          </nuxt-link>
        </div>
      </div>
    </section>
</template>


<script>

export default {
	async fetch() {
    this.services = await this.$http.$get(`https://kniazey.ru/api/service/`);
  },
	data(){
		return{
			services: "",
		};
	}
};
</script>

<style>
.service {
  margin-bottom: 70px;
}
.service-body {
  display: flex;
  justify-content: space-around;
	flex-direction: column;
  flex-wrap: wrap;
}
.service-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  margin-bottom: 40px;
}
.service-item div {
  overflow: hidden;
  position: relative;
  border-radius: 25px;
}
.service-item img {
  border-radius: 25px;
  width: 270px;
  height: 200px;
  object-fit: cover;
  object-position: 50% 50%;
  overflow: hidden;
  scale: 1;
  transition: all 0.3s ease;
}
.service-item div::before {
  content: "";
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(25, 56, 188, 0.7) 100%
  );
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 25px;
  z-index: 2;
}
.service-item span {
  margin-top: 20px;
  font-size: 22px;
  color: rgba(60, 60, 60, 0.7);
  max-width: 280px;
  text-align: center;
}
@media(min-width: 590px){
	.service-body {
		flex-direction: row;
}

}
@media(min-width: 840px){
	.service-item img {
  width: 300px;
  height: 250px;
}
}
@media(min-width: 930px){
	.service-item img {
  width: 280px;
  height: 250px;
}
}
@media(min-width: 1120px){
	.service-item img {
  width: 350px;
  height: 250px;
}
.service-item span {
  font-size: 28px;
	max-width: 350px;
}
.service-body {
	justify-content: space-between;
}
}
</style>