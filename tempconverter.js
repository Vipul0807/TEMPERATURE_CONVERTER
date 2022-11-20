function calculateTemp() {
  var x = document.getElementById("inputTemperature").value;
  console.log(x);
  if (x == "") {
    let x = 0;
    alert("Temperature is 0");
  }
  var displayString = "";
  selectElement = document.querySelector("#WHO");

  var y = selectElement.options[selectElement.selectedIndex].value;

  if (y == "Celsius") {
    var z = x * 1.8 + 32;

    displayString = z.toFixed(2) + " Farenheit";
  } else {
    var z = (x - 32) / 1.8;
    displayString = z.toFixed(2) + " Celsius";
  }

  document.getElementById("convertedTemp").innerHTML = displayString;
}
