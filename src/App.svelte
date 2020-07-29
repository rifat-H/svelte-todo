<script>

	// config
	import config from "../config.js";

	// stores
	import showLoader from "./stores/ShowStateStore.js";

	// components
	import Index from './pages/index.svelte';
	import Loader from './components/Loader.svelte';

	console.log(showLoader);
</script>

<svelte:head>
	<title>{config.APP_NAME}</title>
</svelte:head>

<div class="container">

	<Loader />
	<Index />
</div>


<style>
	@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>