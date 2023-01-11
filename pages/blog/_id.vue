<template>
		<main class="main">
			<div class="container">
				<div id="content">
					<Breadcrumbs 
					catalogLink="/blog/"
					catalogName="Вопросы верстальщика /"
					:pageH1="blog.h1"
				/>
					<div class="card">
						<img class="blog__item-img" :src="`/uploads/blog/${blog.coverImageName.filename}`" alt="Верстальщик сайтов">
					</div>
					<h2 class="title">{{blog.h1}}</h2>
					<div v-html="blog.content">
						
					</div>
				</div>
			</div>
		
		</main>
</template>

<script>
import axios from 'axios';

export default {
	head(){
		return{
			title: this.blog.title,
			meta: [
				{hid: "description", name:"description", content: this.blog.description}
			]
		}
	},
	async asyncData ({params}) {
    const { data } = await axios.get(`http://kniazey.ru/api/blog/${params.id}`);
		return { blog: data }
	}
}
</script>


<style>
.card .blog__item-img{
	width: 100%;
	max-width: 100%;
	max-height: 400px;
	object-fit: cover;
	overflow: hidden;
	border-radius: 25px;
	transition: all .3s ease;
	cursor: pointer;
}
.card{
	margin-bottom: 50px;
	overflow: hidden;
}

@media(any-hover:hover){
	.card .blog__item-img:hover{
		scale: 1.2;
}
}
	.txt{
		font-size: 16px !important;
		line-height: 30px;
		margin-bottom: 20px;
	}
	@media(min-width: 1120px){
		.txt{
		font-size: 22px !important;
		line-height: 32px;
		text-align: justify;
		margin-bottom: 20px;
	}
	}
</style>