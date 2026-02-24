const API_KEY = "f4c00b967598c2dcc659eed5";
const BASE_URL = "https://v6.exchangerate-api.com/v6/" + API_KEY;

const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const amountInput = document.getElementById("amount");
const convertBtn = document.getElementById("convertBtn");
const switchBtn = document.getElementById("switchBtn");
const resultP = document.getElementById("result");
const rateP = document.getElementById("rate");

async function loadCurrencies() {
  try {
    const res = await fetch(BASE_URL + "/codes");
    const data = await res.json();

    if (data.result !== "success") {
      resultP.innerText = "Error loading currencies: " + (data["error-type"] || "");
      return;
    }

    fromSelect.innerHTML = "";
    toSelect.innerHTML = "";

    for (let i = 0; i < data.supported_codes.length; i++) {
      const code = data.supported_codes[i][0];
      const name = data.supported_codes[i][1];

      const option1 = document.createElement("option");
      option1.value = code;
      option1.textContent = code + " - " + name;

      const option2 = document.createElement("option");
      option2.value = code;
      option2.textContent = code + " - " + name;

      fromSelect.appendChild(option1);
      toSelect.appendChild(option2);
    }

    fromSelect.value = "USD";
    toSelect.value = "ILS";

    convert(); 
  } catch (err) {
    resultP.innerText = "Network error: " + err.message;
  }
}

async function convert() {
  const from = fromSelect.value;
  const to = toSelect.value;
  const amount = amountInput.value;

  if (!from || !to) {
    resultP.innerText = "Please choose currencies.";
    return;
  }

  if (amount === "" || Number(amount) < 0) {
    resultP.innerText = "Please enter a valid amount.";
    return;
  }

  resultP.innerText = "Converting...";
  rateP.innerText = "";

  try {
    const url = BASE_URL + "/pair/" + from + "/" + to + "/" + amount;
    const res = await fetch(url);
    const data = await res.json();

    if (data.result !== "success") {
      resultP.innerText = "Conversion error: " + (data["error-type"] || "");
      return;
    }

    resultP.innerText = data.conversion_result + " " + to;
    rateP.innerText = "1 " + from + " = " + data.conversion_rate + " " + to;
  } catch (err) {
    resultP.innerText = "Network error: " + err.message;
  }
}
function switchCurrencies() {
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convert();
}

convertBtn.addEventListener("click", convert);
switchBtn.addEventListener("click", switchCurrencies);
fromSelect.addEventListener("change", convert);
toSelect.addEventListener("change", convert);
amountInput.addEventListener("input", convert);

loadCurrencies();