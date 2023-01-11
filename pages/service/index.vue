<template>
	<main class="main main-service">
		<section class="service">
			<div class="container">
				<ul class="breadcrumbs">
						<li>
							<nuxt-link exact class="breadcrumbs__link" to="/">
								<span>Главная /</span>
							</nuxt-link>
						</li>
						<li>
							<nuxt-link exact class="breadcrumbs__link" to="/service/">
								<span>Услуги</span>
							</nuxt-link>
						</li>
					</ul>
				<h3 class="title">
					Услуги
				</h3>
				<div class="service-body">
					<nuxt-link :to="`/service/${service.url}`" class="service-item" v-for="service in services" :key="service._id">
						<div><img class="service-img" loading="lazy" :src="`/uploads/service/${service.coverImageName.filename}`" :alt="`${service.h1}`"></div>
						<span>{{service.h1}}</span>
					</nuxt-link>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import axios from 'axios';
export default {
	head(){
		return{
			title: "Услуги | Разработка сайтов и веб-приложений",
			meta: [
				{hid: "description", name:"description", content: "Услуги по веб-разработке, контекстной рекламе , SEO и обучению верстке."}
			]
		}
	},
	async asyncData () {
    const { data } = await axios.get(`http://kniazey.ru/api/service`)
    return { services: data }
  }
}
</script>

<style>
	.main-service .service{
		margin-top: 70px;
	}
</style>
