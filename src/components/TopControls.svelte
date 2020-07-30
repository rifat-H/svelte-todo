<script>
    import Filter from './Filter.svelte';
    import AddTask from './AddTask.svelte';
</script>

<style>
    .topcontrols {
        position: sticky;
        top: 0;
        z-index: 9999;
        background-color: white !important;
    }
</style>

<div class="topcontrols">
    <Filter />
    <AddTask />
</div>