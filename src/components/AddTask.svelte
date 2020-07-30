<script>
    import axios from "axios";
    // config
    import config from "../../config";
    // stores
    import Tasks from "../stores/TaskStore.js";
    import { showLoader } from "../stores/ShowStateStore.js";

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
            showLoader.update(s => 1);

            // api code
            axios.post(config.API_URL + "task", {
                name: task.name
            })
                .then(function (response) {

                    // update local store
                    Tasks.update(CurrentTasks => {
                        return [...CurrentTasks, response.data.task];
                    });

                })
                .catch(function (error) {
                    console.log("something went wrong");
                })

            // clear task.task
            task.name = '';
            showLoader.update(s => 0);

        }

    }

    function handleEnter(event) {
        if (event.key === 'Enter') {
            handleAdd();
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
                <input type="text" class="form-control" id="newtask" on:keydown={handleEnter} bind:value={task.name}>
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