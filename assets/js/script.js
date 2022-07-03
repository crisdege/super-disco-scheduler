var today = moment().format("dddd, MMMM Do");
var appointment = {};
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
checkNineAM();
checkTenAM();
checkElevenAM();
checkTwelvePM();
checkOnePM();
checkTwoPM();
checkThreePM();
checkFourPM();
checkFivePM();
