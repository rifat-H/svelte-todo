import { writable } from "svelte/store";

const Tasks = writable([
  {
    id: 1,
    status: false,
    task: "task 1",
  },
  {
    id: 2,
    status: true,
    task: "task 2",
  },
  {
    id: 3,
    status: false,
    task: "Update Button does nothing",
  },
]);

export default Tasks;
