import { writable } from "svelte/store";
import config from "../../config";
import axios from "axios";

let tasks = [];

axios
  .get(config.API_URL + "task")
  .then(function (response) {
    Tasks.set(response.data.tasks);
  })
  .catch(function (error) {
    console.log("something went wrong");
  });

const Tasks = writable(tasks);

export default Tasks;
