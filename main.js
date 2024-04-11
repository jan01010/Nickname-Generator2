// Element Listener
document.getElementById("all").addEventListener("click", allNames);
document.getElementById("rand").addEventListener("click", randNames);
// Function
let nameArray = [
  "The Eighth",
  "The Sinner",
  "The King",
  "The Technologist",
  "The Savage",
  "The Nerd",
  "The Furry",
  "The Chatterbox",
];
let nameIndex = 0;
let nicknameEl = document.getElementById("nickname");
let firstnameEl = document.getElementById("first");
let lastnameEl = document.getElementById("last");

function allNames() {
  for (let i = 0; i < nameArray.length; i++) {
    nicknameEl.innerHTML +=
      "<p>" +
      `<b> ${firstnameEl.value}  "${nameArray[i]}"  ${lastnameEl.value} </b>` +
      "</p>";
  }
}

function randNames() {
  nameIndex = Math.randomInt(0, nameArray.length);
  nicknameEl.innerHTML =
    "<p>" +
    `<b> ${firstnameEl.value}  "${nameArray[nameIndex]}" ${lastnameEl.value} </b>` +
    "</p>";
}
