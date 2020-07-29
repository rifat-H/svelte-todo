<script>
	import Index from './pages/index.svelte';
	import config from "../config.js";
</script>

<svelte:head>
	<title>{config.APP_NAME}</title>
</svelte:head>

<div class="container">
	<Index />
</div>


<style>
	@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>