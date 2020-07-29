<script>
    import Task from "./Task.svelte";
    import Tasks from "../stores/TaskStore.js";
    import ShowState from "../stores/ShowStateStore.js";
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div class="card mt-5 p-3">
    {#each $Tasks as task (task.id)}

        {#if $ShowState == 1 || $ShowState == 0}

            {#if task.status == $ShowState}
                <Task {task} />
            {/if}

        {:else}
            <Task {task} />
        {/if}


    {:else}
         <h2 class="text-center" >No Tasks Found</h2>
    {/each}
</div>