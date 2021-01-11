let ptr = 0;
let max;
function showLines(read, index = 0) {
  console.log(read[index]);
  document.getElementById("item1").innerText = read[index].name;
  document.getElementById("item2").innerText = read[index].charater;
  document.getElementById("item3").innerText = read[index].text;
  document.getElementById("item4").innerText = read[index].text2;
  document.getElementById("item5").innerText = read[index].text3;
}
function start() {
  var requestURL = "https://mst9999.github.io/LearnJapanese/json/lines.json";
  var request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    let line = request.response;
    console.log(line);
    let read = line["line"];
    max = read.length - 1;
    console.log("max", max);
    showLines(read);
    $("#back").click(function () {
      ptr = ptr == 0 ? max : ptr - 1;
      console.log("p-", ptr);
      showLines(read, ptr);
    });
    $("#next").click(function () {
      ptr = ptr == max ? 0 : ptr + 1;
      console.log("p+", ptr);
      showLines(read, ptr);
    });
  };
}
window.addEventListener("load", start, false);
