<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	export default {
		name: 'App',
		created(){
			remChange()
			window.addEventListener('resize',remChange)
			function remChange(){
				let html = document.getElementsByTagName('html')[0]
				let width = html.getBoundingClientRect().width
				if(width >= 750){
					width = 750
				}
				html.style.fontSize = width/10 + 'px'
			}
		},
		mounted(){

		},
		methods:{
			
		}
	}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		background-color: #F2F2F2;
	
	}
</style>
