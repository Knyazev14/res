<template>
	  <ul itemscope itemtype="https://schema.org/BreadcrumbList" class="breadcrumbs">
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <nuxt-link exact class="breadcrumbs__link" to="/" itemprop="item">
              <span itemprop="name">Главная /</span>
							<meta itemprop="position" content="1">
            </nuxt-link>
          </li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <nuxt-link exact class="breadcrumbs__link" :to="catalogLink" itemprop="item">
              <span itemprop="name">{{ catalogName}}</span>
							<meta itemprop="position" content="2">
            </nuxt-link>
          </li>
          <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
            <nuxt-link no-prefetch class="breadcrumbs__link" to="" itemprop="item">
              <span itemprop="name">{{ pageH1 }}</span>
							<meta itemprop="position" content="3">
            </nuxt-link>
          </li>
        </ul>
</template>


<script>
export default{
	props: ["catalogLink", "catalogName", "pageH1"] 
}

</script>

<style>
.breadcrumbs {
	margin-top: 40px;
	margin-bottom: 40px;
	display: flex;
	font-size: 16px;
	flex-wrap: wrap;
}
.breadcrumbs li + li{
	margin-left: 10px;
	margin-bottom: 5px;
}
.breadcrumbs__link{
color: rgba(60, 60, 60, .7);
white-space: nowrap;
}
.breadcrumbs .nuxt-link-active{
color: #42b883;
white-space: normal;
height: 40px;
}
</style>