/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["Jhon Scarzo", "Carlos Velasco", "Joan", "Luis"];
  let action = ["se ha comido", "se meó en", "me ha perdido", "sobreescribió"];
  let what = ["mi ejercicio", "una pull request", "el merge"];
  let when = [
    "antes de clase",
    "mientras dormía",
    "mientras eliminaba codespaces",
    "cuando abría GitHub",
    "cuando hemos entrado en el breakout"
  ];
  let excu1 = Math.floor(Math.random() * who.length);
  let excu2 = Math.floor(Math.random() * action.length);
  let excu3 = Math.floor(Math.random() * what.length);
  let excu4 = Math.floor(Math.random() * when.length);

  document.getElementById("excusitas").innerHTML =
    "No te lo vas a creer, pero " +
    who[excu1] +
    " " +
    action[excu2] +
    " " +
    what[excu3] +
    " " +
    when[excu4];
};
