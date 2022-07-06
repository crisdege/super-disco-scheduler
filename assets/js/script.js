var today = moment().format("dddd, MMMM Do");
var curentHour = moment().format("HH");

document.getElementById("currentDay").innerHTML = today;

var checkNineAM = function () {
  if (curentHour > 9) $("#nineAm").addClass("past");
  else if (curentHour == 9) $("#nineAm").addClass("present");
  else if (curentHour < 9) $("#nineAm").addClass("future");
};

var checkTenAM = function () {
  if (curentHour > 10) $("#tenAm").addClass("past");
  else if (curentHour == 10) $("#tenAm").addClass("present");
  else if (curentHour < 10) $("#tenAm").addClass("future");
};

var checkElevenAM = function () {
  if (curentHour > 11) $("#elevenAm").addClass("past");
  else if (curentHour == 11) $("#elevenAm").addClass("present");
  else if (curentHour < 11) $("#elevenAm").addClass("future");
};
var checkTwelvePM = function () {
  if (curentHour > 12) $("#twelvePm").addClass("past");
  else if (curentHour == 12) $("#twelvePm").addClass("present");
  else if (curentHour < 12) $("#twelvePm").addClass("future");
};

var checkOnePM = function () {
  if (curentHour > 13) $("#onePm").addClass("past");
  else if (curentHour == 13) $("#onePm").addClass("present");
  else if (curentHour < 13) $("#onePm").addClass("future");
};

var checkTwoPM = function () {
  if (curentHour > 14) $("#twoPm").addClass("past");
  else if (curentHour == 14) $("#twoPm").addClass("present");
  else if (curentHour < 14) $("#twoPm").addClass("future");
};

var checkThreePM = function () {
  if (curentHour > 15) $("#threePm").addClass("past");
  else if (curentHour == 15) $("#threePm").addClass("present");
  else if (curentHour < 15) $("#threePm").addClass("future");
};

var checkFourPM = function () {
  if (curentHour > 16) $("#fourPm").addClass("past");
  else if (curentHour == 16) $("#fourPm").addClass("present");
  else if (curentHour < 16) $("#fourPm").addClass("future");
};

var checkFivePM = function () {
  if (curentHour > 17) $("#fivePm").addClass("past");
  else if (curentHour == 17) $("#fivePm").addClass("present");
  else if (curentHour < 17) $("#fivePm").addClass("future");
};
//load and save functions

var saveNineAM = function () {
  $(".nineAm").click(function () {
    console.log("clicked");
    var nineAM = document.getElementById("nineAm").value;
    localStorage.setItem("nineAm", nineAM);
  });
};

var loadNineAM = function () {
  var nineAM = localStorage.getItem("nineAm");
  console.log(nineAM);
  $("#nineAm").text(nineAM);
};

var loadTenAM = function () {
  var tenAM = localStorage.getItem("tenAm");
  console.log(tenAM);
  $("#tenAm").text(tenAM);
};

$(".tenAm").click(function () {
  console.log("clicked");
  var tenAM = document.getElementById("tenAm").value;
  localStorage.setItem("tenAm", tenAM);
});

var loadElevenAM = function () {
  var elevenAM = localStorage.getItem("elevenAm");
  console.log(elevenAM);
  $("#elevenAm").text(elevenAM);
};

$(".elevenAm").click(function () {
  console.log("clicked");
  var elevenAM = document.getElementById("elevenAm").value;
  localStorage.setItem("elevenAm", elevenAM);
});

var loadTwelvePM = function () {
  var twelvePM = localStorage.getItem("twelvePm");
  console.log(twelvePM);
  $("#twelvePm").text(twelvePM);
};

$(".twelvePm").click(function () {
  console.log("clicked");
  var twelvePM = document.getElementById("twelvePm").value;
  localStorage.setItem("twelvePm", twelvePM);
});

var loadOnePM = function () {
  var onePM = localStorage.getItem("onePm");
  console.log(onePM);
  $("#onePm").text(onePM);
};

$(".onePm").click(function () {
  console.log("clicked");
  var onePM = document.getElementById("onePm").value;
  localStorage.setItem("onePm", onePM);
});

var loadTwoPM = function () {
  var twoPM = localStorage.getItem("twoPm");
  console.log(twoPM);
  $("#twoPm").text(twoPM);
};

$(".twoPm").click(function () {
  console.log("clicked");
  var twoPM = document.getElementById("twoPm").value;
  localStorage.setItem("twoPm", twoPM);
});

var loadThreePM = function () {
  var threePM = localStorage.getItem("threePm");
  console.log(threePM);
  $("#threePm").text(threePM);
};

$(".threePm").click(function () {
  console.log("clicked");
  var threePM = document.getElementById("threePm").value;
  localStorage.setItem("threePm", threePM);
});

var loadFourPM = function () {
  var fourPM = localStorage.getItem("fourPm");
  console.log(fourPM);
  $("#fourPm").text(fourPM);
};

$(".fourPm").click(function () {
  console.log("clicked");
  var fourPM = document.getElementById("fourPm").value;
  localStorage.setItem("fourPm", fourPM);
});

var loadFivePM = function () {
  var fivePM = localStorage.getItem("fivePm");
  console.log(fivePM);
  $("#fivePm").text(fivePM);
};

$(".fivePm").click(function () {
  console.log("clicked");
  var fivePM = document.getElementById("fivePm").value;
  localStorage.setItem("fivePm", fivePM);
});

checkNineAM();
checkTenAM();
checkElevenAM();
checkTwelvePM();
checkOnePM();
checkTwoPM();
checkThreePM();
checkFourPM();
checkFivePM();

saveNineAM();
loadNineAM();
loadTenAM();
loadElevenAM();
loadTwelvePM();
loadOnePM();
loadTwoPM();
loadThreePM();
loadFourPM();
loadFivePM();
