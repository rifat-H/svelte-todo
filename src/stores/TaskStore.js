import { writable } from "svelte/store";
import config from "../../config";
import axios from "axios";

let tasks = [
  {
    id: 500,
    name: "task 1",
    status: 0,
  },
];

axios
  .get(config.API_URL + "task")
  .then(function (response) {
    response.data.tasks.forEach((task) => {
      tasks.push(task);
      tasks = tasks;
    });
  })
  .catch(function (error) {
    console.log("something went wrong");
  });

console.log(tasks);

const Tasks = writable(tasks);

export default Tasks;
