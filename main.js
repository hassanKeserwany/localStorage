

let btn = document.querySelector('#btn');

function remove(){
  localStorage.clear();

}
btn.addEventListener('click',function(){
  remove();
  var listDiv = document.querySelector(".list");
  listDiv.innerHTML='';
});



function saveText() {
  var inputElement = document.getElementById("inputText");
  var text = inputElement.value;

  var savedTexts = localStorage.getItem("savedTexts");
  savedTexts = savedTexts ? JSON.parse(savedTexts) : [];

  savedTexts.push(text);

  localStorage.setItem("savedTexts", JSON.stringify(savedTexts));

  inputElement.value = ""; // Clear input field after saving
  displayTexts();
}

function displayTexts() {
  var listDiv = document.querySelector(".list");

  var savedTexts = localStorage.getItem("savedTexts");
  savedTexts = savedTexts ? JSON.parse(savedTexts) : [];

  listDiv.innerHTML = "";

  for (var i = 0; i < savedTexts.length; i++) {
    var text = savedTexts[i];
    var textElement = document.createElement("p");
    textElement.classList.add("myclass");
    textElement.textContent = text;
    listDiv.appendChild(textElement);
  }
}
// Call displayTexts() on page load
// localStorage.clear();
window.onload = displayTexts;
