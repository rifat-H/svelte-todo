<script>
	// config
	import config from "../config.js";

	// components
	import Index from './pages/index.svelte';
	// import Loader from './components/Loader.svelte';

	// routify router
	import { Router } from "@sveltech/routify";
	import { routes } from "@sveltech/routify/tmp/routes";

</script>

<svelte:head>
	<title>{config.APP_NAME}</title>
</svelte:head>

<Router {routes} />

<style>
	@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css");
</style>