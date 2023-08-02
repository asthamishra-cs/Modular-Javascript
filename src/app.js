import Counter from "./components/counter.js";
import Timer from "./components/timer.js";

const counter = new Counter();
counter.mount(document.getElementById("root"));

const timer = new Timer();
timer.mount(document.getElementById("root"));