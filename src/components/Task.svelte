<script>
    export let task;

    import Tasks from "../stores/TaskStore.js";


    function handleTaskDelete(id) {
        Tasks.update(CurrentTasks => {
            return CurrentTasks.filter(task => task.id != id);
        });
    }
</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->

<div class="task">
    <div class="mt-3 mb-3">
        <div class="form-group">

            <div class="form-group row">

                <div class="col-md-1 pl-0">
                    <input type="checkbox" class="form-control" bind:checked={task.status}>
                </div>
                <div class="col-sm-9 pl-0">
                    <input type="text" class="form-control" id="staticEmail" bind:value="{task.task}"
                        disabled="{task.status}">
                </div>
                <div class="col-md-2 pl-0">
                    <div class="row">
                        <div class="col-md-6">
                            <button class="btn btn-success">Update</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-danger" on:click={()=>handleTaskDelete(task.id)}>Delete</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</div>