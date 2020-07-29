<script>
    import ShowState from "../stores/ShowStateStore.js";

    function stateUpdate(id) {
        ShowState.update(i => id);
    }


</script>

<style>
    /* your styles go here */
</style>

<!-- markup (zero or more items) goes here -->
<div class="row mt-3">
    <div class="col-md-1">
        <button class="btn btn-primary" on:click={()=> {stateUpdate(2)}} >ALL</button>
    </div>
    <div class="col-md-3">
        <div class="row">
            <div class="col-md-6">
                <button class="btn btn-primary" on:click={()=> {stateUpdate(1)}} >Completed</button>
            </div>
            <div class="col-md-6">
                <button class="btn btn-primary" on:click={()=> {stateUpdate(0)}} >!Completed</button>
            </div>
        </div>
    </div>
</div>