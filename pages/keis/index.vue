<template>
	<main class="main main-service">
		<section class="service">
			<div class="container">
				<Breadcrumbs 
					catalogLink="/keis/"
					catalogName="Кейсы"
				/>
				<h3 class="title">
					Кейсы
				</h3>
				<div class="service-body">
					<a :href="`${keis.url}`" class="service-item" target="blanck" v-for="keis in keises" :key="keis._id">
						<div><img class="service-img" loading="lazy" :src="`/uploads/keis/${keis.coverImageName.filename}`" :alt="`${keis.h1}`"></div>
						<span>{{keis.h1}}</span>
					</a>
					<div class="gap"></div>
					<div class="gap"></div>
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
			title: "Кейсы | Разработка сайтов и веб-приложений",
			meta: [
				{hid: "description", name:"description", content: "Тест"}
			]
		}
	},
	async asyncData () {
    const { data } = await axios.get(`http://kniazey.ru/api/keis`)
    return { keises: data }
  }
}
</script>

<style>
	.main-service .service{
		margin-top: 70px;
	}
</style>
