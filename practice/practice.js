const data = parseInt(prompt("please enter number"));

if (typeof data === "number") {
  alert("ok");
} else if (typeof data === "string") {
  alert("else if ok");
} else {
  alert("no");
}
