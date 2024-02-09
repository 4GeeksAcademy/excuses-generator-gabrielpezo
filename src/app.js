/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = excuses();
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

  let whoarr = Math.floor(Math.random() * 3);
  let actionarr = Math.floor(Math.random() * 3);
  let whatarr = Math.floor(Math.random() * 2);
  let whenarr = Math.floor(Math.random() * 4);

  return (
    who[whoarr] +
    " " +
    action[actionarr] +
    " " +
    what[whatarr] +
    " " +
    when[whenarr] +
    "."
  );
};
let excusesComplete = excuses();
console.log(excusesComplete);
