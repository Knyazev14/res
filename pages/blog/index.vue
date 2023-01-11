<template>
	<main class="main">
		<div class="container">
			<section class="blog">
				<Breadcrumbs 
					catalogLink="/blog/"
					catalogName="Вопросы верстальщика"
				/>
					<div class="filter">
						<nuxt-link class="filter__link" to="/blog">Все записи</nuxt-link>
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
					<div class="gap">

					</div>
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
				{hid: "description", name:"description", content: "Теория и практика создания сайтов и веб-приложений"}
			]
		}
	},
	async asyncData () {
    const { data } = await axios.get(`https://kniazey.ru/api/blog/`)
    return { blogs: data }
  }
}
</script>

<style>
.blog {
}
.blog__content {
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	flex-wrap: wrap;
	margin: 0 -15px;
	margin-top: 50px;
}
.blog__item {
	max-width: 400px;
	width: 100%;
	padding: 0 15px;
	border-radius: 15px;
	overflow: hidden;
	margin-bottom: 30px;
	display: flex;
	flex-direction: column;
	height: 400px;
}
.blog__item-wrap {
	border-radius: 15px;
	overflow: hidden;
}
.blog__item-img {
	max-width: 400px;
	width: 100%;
	height: 220px;
	border-radius: 15px;
	overflow: hidden;
	transition: all .3s ease;
}
.blog__item-txt {
	font-size: 20px;
	line-height: 26px;
	margin-top: 20px;
	margin-bottom: 10px;
	color: rgba(60, 60, 60, .7);
	flex: 1 1 auto;
}
.blog__item-btn {
	padding: 10px 20px;
	background: #42b883;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: white;
	border-radius: 5px;
	font-size: 18px;
	width: 100%;
}
.blog__item-bottom{
	display: flex;
	flex-direction: column;
	height: 150px;
}
.gap{
	max-width: 400px;
	width: 100%;
	display: inline-block;
}
@media(any-hover:hover){
	.blog__item:hover .blog__item-img{
		scale: 1.2;
}
.filter__link:hover {
	background:#647eff;
}
	}

.filter {
		display: flex;
		flex-wrap: wrap;
	}
.filter__link {
	background: #42b883;
	padding: 10px 20px;
	color: white;
	font-size: 16px;
	font-weight: 500;
}
.filter .nuxt-link-active{
	background:#647eff;
}
@media(min-width: 860px){
	.blog__content {
	justify-content: space-around;
	align-items: stretch;
	flex-direction: row;
}
.blog__item-img {
	height: 246px;	
}
}
@media(min-width: 1200px){
	.blog__content {
		justify-content: space-between;
}
}
</style>
