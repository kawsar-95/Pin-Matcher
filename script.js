// Disable Notification

function myFunction() {
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
    myFunction();
  });

//Number Pad Operation

function displayNumber(number) {
  var oldNumber = document.getElementById("input-number").value;
  var result = oldNumber + number;
  document.getElementById("input-number").value = result;
}
//Display Clearing

function clearDisplay() {
  document.getElementById("input-number").value = "";
}
//Display error Correction

function resetButton() {
  var element = "";
  var result = document.getElementById("input-number").value;

  for (var i = 0; i < result.length - 1; i++) {
    var element = element + result[i];
  }
  document.getElementById("input-number").value = element;
}

//Verification

function pinMatcher() {
  var randomNumber = document.getElementById("displayNumber").value;
  var inputNumber = document.getElementById("input-number").value;
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
    alert("please insert a valid pin");
  }
}

function clickCount() {
  var count = 0;
  var button = document.getElementById("check");
  var displayCount = document.getElementById("checkCount");
  button.onclick = function () {
    count++;

    if (count == 0) {
      displayCount.innerHTML = "Try Again-2";
    } else if (count == 1) {
      displayCount.innerHTML = "Try Again-1";
    } else {
      displayCount.innerHTML = "Try Again-0";
      document.getElementById("check").disabled = true;
    }
  };
}
