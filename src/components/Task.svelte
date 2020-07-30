<script>
    import axios from "axios";
    import { fly } from 'svelte/transition';

    // config
    import config from "../../config";

    // store
    import Tasks from "../stores/TaskStore.js";

    export let task;

    function handleTaskDelete(id) {
        Tasks.update(CurrentTasks => {
            return CurrentTasks.filter(task => task.id != id);
        });

        // api code 
        axios.delete(config.API_URL + "task/" + id)
            .then(function (response) {
                // console.log(response);
            })
            .catch(function (error) {
                console.log("something went wrong");
            })
    }

    function handleTaskUpdate(task) {

        Tasks.update(CurrentTasks => {
            // let tsk = CurrentTasks.filter(t => t.id == task.id);
            let dtasks = CurrentTasks.filter(t => t.id != task.id);
            // tsk = task;
            return [...dtasks, task];
        });


        // api code
        axios.put(config.API_URL + "task/" + task.id, {
            name: task.name,
            status: task.status
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log("something went wrong");
            })
    }

</script>

<style>
    .task-control {
        display: none;
        transition: all linear .3s;

    }

    .task:hover .task-control {
        transition: all linear .3s;
        display: block;
    }
</style>

<!-- markup (zero or more items) goes here -->

<div class="task" transition:fly="{{ y: 1000, duration: 400 }}">
    <div class="mt-3 mb-3">
        <div class="form-group">

            <div class="form-group row">

                <div class="col-md-1 pl-0">
                    <input type="checkbox" class="form-control" bind:checked={task.status}
                        on:change={()=>handleTaskUpdate(task)}>
                </div>
                <div class="col-sm-9 pl-0">
                    <input type="text" class="form-control" id="staticEmail" bind:value="{task.name}"
                        disabled="{task.status}">
                </div>
                <div class="col-md-2 pl-0 task-control">
                    <div class="row">
                        <div class="col-md-6">
                            <button class="btn btn-success" on:click={()=>handleTaskUpdate(task) }>Update</button>
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