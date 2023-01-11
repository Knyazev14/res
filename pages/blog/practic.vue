<template>
	<main class="main">
		<div class="container">
			<section class="blog">
				<Breadcrumbs 
					catalogLink="/blog/"
					catalogName="Вопросы верстальщика /"
					pageH1="Практика"
				/>
					<div class="filter">
						<nuxt-link exact class="filter__link" to="/blog">Все записи</nuxt-link>
						<nuxt-link exact class="filter__link" to="/blog/teory">Теория</nuxt-link>
						<nuxt-link exact class="filter__link" to="/blog/practic">Практика</nuxt-link>
					</div>
				<div class="blog__content">
					<nuxt-link class="blog__item" v-for="blog in blogs" :key="blog._id" :to="`/blog/${blog.url}`">
						<div class="blog__item-wrap">
							<img class="blog__item-img" :src="`/uploads/blog/${blog.coverImageName.filename}`" alt="Верстальщик сайтов">
						</div>
						<div class="blog__item-bottom">
							<p class="blog__item-txt">{{ blog.h1 }}</p>

							<button class="blog__item-btn">Подробнее</button>
						</div>
					</nuxt-link>
					<div class="gap">

					</div>
				</div>

			</section>
		</div>
	</main>
</template>

<script>
import axios from 'axios';

export default {
	head(){
		return{
			title: "Князев Артём | Блог",
			meta: [
				{hid: "description", name:"description", content: "Тест"}
			]
		}
	},
	async asyncData () {
    const { data } = await axios.get(`https://kniazey.ru/api/blog/practic`)
    return { blogs: data }
  }
}
</script>

