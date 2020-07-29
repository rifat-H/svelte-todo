<script>
    import axios from "axios";
    import config from "../../config";
    import Tasks from "../stores/TaskStore.js";

    let task = {
        name: '',
        status: false,
    };
    let isValidated = true;

    function handleAdd() {
        isValidated = true;

        // validate form
        if (task.name.trim().length < 5) {
            isValidated = false;
        }

        // add data
        if (isValidated) {

            // api code
            let t;

            console.log(task.name);
            axios.post(config.API_URL + "task", {
                name: task.name
            })
                .then(function (response) {
                    t = response.data.task;
                    console.log(t);

                    // update local store

                    Tasks.update(CurrentTasks => {
                        return [t, ...CurrentTasks];
                    });



                })
                .catch(function (error) {
                    console.log("something went wrong");
                })

            // clear task.task
            task.name = '';

        }

    }

</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div class="mt-4 mb-5">
    <div class="add">
        <div class="form-group row">
            <label for="newtask" class="col-sm-2 col-form-label">Add new task</label>
            <div class="col-sm-9">
                <input type="text" class="form-control" id="newtask" bind:value={task.name}>
                {#if !isValidated}
                     <span class="text-danger">Task cannot be less than 5 letter</span>
                {/if}
            </div>
            <div class="col-md-1">
                <button class="btn btn-primary" on:click={handleAdd}>Add</button>
            </div>
        </div>
    </div>
</div>