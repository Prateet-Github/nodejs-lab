document.getElementById("hello").innerHTML = "Hello, World!";

function changeText() {
  document.getElementById("ch").innerHTML = "You clicked the button!";
}

function sendAlert() {
  const d = new Date();

  window.alert("Button clicked on " + d.toString() + "!");
}
