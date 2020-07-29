import { writable } from "svelte/store";

let ShowState = writable(2);

export let showLoader = writable(0);

export default ShowState;
