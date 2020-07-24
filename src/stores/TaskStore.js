import { writable } from "svelte/store";

const Tasks = writable([
  {
    id: 1,
    status: true,
    task: "task 1",
    description: "task 1 description text here",
  },
  {
    id: 2,
    status: false,
    task: "task 2",
    description: "task 2 description text here",
  },
]);

export default Tasks;
