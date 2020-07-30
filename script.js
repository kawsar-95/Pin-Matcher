// Disable Notification
function myLoadFunction() {
  var unsuccess = document.getElementById("pinNotMatch");
  unsuccess.style.display = "none";
  var success = document.getElementById("pinMatch");
  success.style.display = "none";

  // document.getElementById('displayNumber').value=fourDigitNumber;
}

//Random Number Generate
document
  .getElementById("random-generator")
  .addEventListener("click", function () {
    var fourDigitNumber = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("displayNumber").value = fourDigitNumber;
    myLoadFunction();
  });

//Number Pad Operation
function displayMe(number) {
  var oldNumber = document.getElementById("input_number").value;
  var result = oldNumber + number;
  document.getElementById("input_number").value = result;
}
//Display Clearing
function clearDisplay() {
  document.getElementById("input_number").value = "";
}
//Display error Correction
function errorCorrection() {
  var element = "";
  var result = document.getElementById("input_number").value;

  for (let i = 0; i < result.length - 1; i++) {
    var element = element + result[i];
  }
  document.getElementById("input_number").value = element;
}
//Verification

function passwordMatching() {
  var randomNumber = document.getElementById("displayNumber").value;
  var inputNumber = document.getElementById("input_number").value;
  if (inputNumber.length == 4) {
    if (parseInt(randomNumber) == parseInt(inputNumber)) {
      var success = document.getElementById("pinMatch");
      success.style.display = "block";
      var success = document.getElementById("door1");
      success.style.display = "none";
      var success = document.getElementById("door2");
      success.style.display = "none";
    } else {
      var unsuccess = document.getElementById("pinNotMatch");
      unsuccess.style.display = "block";
      clickCount();
    }
  } else {
    alert("please insert 4 Digit valid numbers");
  }
}

function clickCount() {
  var count = 0;
  var button = document.getElementById("check");
  var displayCount = document.getElementById("countCheck");
  button.onclick = function () {
    count++;

    if (count == 0) {
      displayCount.innerHTML = "Try-2 left";
    } else if (count == 1) {
      displayCount.innerHTML = "Try-1 left";
    } else {
      displayCount.innerHTML = "Try-0 left";
      document.getElementById("check").disabled = true;
    }
  };
}
