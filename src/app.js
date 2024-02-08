/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = excuses();
  console.log("Hello Rigo from the console! ");
};
let excuses = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let whoarr = Math.floor(Math.random() * who.lenght);
  let actionarr = Math.floor(Math.random() * action.lenght);
  let whatarr = Math.floor(Math.random() * what.lenght);
  let whenarr = Math.floor(Math.random() * when.lenght);

  return;
  who[whoarr] +
    " " +
    action[actionarr] +
    " " +
    what[whatarr] +
    " " +
    whenarr[whenarr] +
    ".";
};
