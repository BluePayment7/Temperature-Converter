window.addEventListener("DOMContentLoaded", domLoaded);
//Grab Elements needed

function domLoaded() {
  celcius = document.getElementById("cInput");
  fahr = document.getElementById("fInput");
  convert = document.getElementById("convertButton");

  convert.addEventListener("click", function() {
    cValue = celcius.value;
    fValue = fahr.value;

    if (cValue != "" && fValue == "") {
      convertCtoF(cValue);
    } else if (fValue != "" && cValue == "") {
      convertFtoC(fValue);
    } else if (
      (fValue == "" && cValue == "") ||
      (fValue != "" && cValue != "")
    ) {
      console.log("Error");
    }
  });

  celcius.addEventListener("input", function() {
    fahr.value = "";
  });

  fahr.addEventListener("input", function() {
    celcius.value = "";
  });
}

function convertCtoF(degreesCelsius) {
  // TODO: Complete the function
  celcius = document.getElementById("cInput");
  fahr = document.getElementById("fInput");
  err = document.getElementById("errorMessage");
  if (isNaN(degreesCelsius)) {
    err.innerHTML = degreesCelsius + " is not a number";
  } else {
    Fah = (parseFloat(degreesCelsius) * 9) / 5 + 32;
    fahr.value = Fah;
    setImage(Fah);
    celcius.value = "";
    err.innerHTML = "";
    return Fah;
  }
}

function convertFtoC(degreesFahrenheit) {
  // TODO: Complete the function
  fahr = document.getElementById("fInput");
  celcius = document.getElementById("cInput");
  err = document.getElementById("errorMessage");
  if (isNaN(degreesFahrenheit)) {
    err.innerHTML = degreesFahrenheit + " is not a number";
  } else {
    Cel = ((parseFloat(degreesFahrenheit) - 32) * 5) / 9;
    celcius.value = Cel;
    setImage(degreesFahrenheit);
    fahr.value = "";
    err.innerHTML = "";
    return Cel;
  }
}

let setImage = (num) => {
  weather = document.getElementById("weatherImage");
  if (num < 32) {
    weather.src = "cold.png";
  } else if (num >= 32 && num <= 50) {
    weather.src = "cool.png";
  } else if (num > 50) {
    weather.src = "warm.png";
  }
};
