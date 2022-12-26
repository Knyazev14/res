<template>
  <div class="wrapper">
		<div class="container">
			<img class="error-img" src="/errors.jpg" alt="Ошибка">
			<h1 class="error">Что-то пошло не так...</h1>
		</div>
  </div>
</template>


<script>

export default {
	head(){
		return{
		}
	},
}
</script>


<style scoped>
.error-img{
	position: absolute;
	top: 100px;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: -1;
	margin-top: -200px;
	object-fit: cover;
}
	.error{
		padding-top: 200px;
		font-size: 42px;
		font-weight: 700;
		text-align: center;
	}
</style>>
