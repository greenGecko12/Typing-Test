import "./styles.css";

let arr = ["reeeeeeeeeeeeeeeeeee", "hello world", ":)"];
let testEl = document.getElementById("test-el");

const btn = document.getElementById("randomButton");

btn.addEventListener("click", function () {
  //console.log("hello Dan");
  testEl.textContent = arr[Math.floor(Math.random() * 3)];
  testEl.textContent = document.getElementById("form").value;
});

/*
document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
*/
