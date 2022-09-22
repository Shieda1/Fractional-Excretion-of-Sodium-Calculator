// https://www.omnicalculator.com/health/fena

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const fractionalexcretionofsodiumRadio = document.getElementById('fractionalexcretionofsodiumRadio');
const creatinineRadio = document.getElementById('creatinineRadio');
const sodiumRadio = document.getElementById('sodiumRadio');
const urinecreatinineRadio = document.getElementById('urinecreatinineRadio');
const urinesodiumRadio = document.getElementById('urinesodiumRadio');

let fractionalexcretionofsodium;
let creatinine = v1;
let sodium = v2;
let urinecreatinine = v3;
let urinesodium = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

fractionalexcretionofsodiumRadio.addEventListener('click', function() {
  variable1.textContent = 'Creatinine';
  variable2.textContent = 'Sodium';
  variable3.textContent = 'Urine creatinine';
  variable4.textContent = 'Urine sodium';
  creatinine = v1;
  sodium = v2;
  urinecreatinine = v3;
  urinesodium = v4;
  result.textContent = '';
});

creatinineRadio.addEventListener('click', function() {
  variable1.textContent = 'Fractional excretion of sodium';
  variable2.textContent = 'Sodium';
  variable3.textContent = 'Urine creatinine';
  variable4.textContent = 'Urine sodium';
  fractionalexcretionofsodium = v1;
  sodium = v2;
  urinecreatinine = v3;
  urinesodium = v4;
  result.textContent = '';
});

sodiumRadio.addEventListener('click', function() {
  variable1.textContent = 'Fractional excretion of sodium';
  variable2.textContent = 'Creatinine';
  variable3.textContent = 'Urine creatinine';
  variable4.textContent = 'Urine sodium';
  fractionalexcretionofsodium = v1;
  creatinine = v2;
  urinecreatinine = v3;
  urinesodium = v4;
  result.textContent = '';
});

urinecreatinineRadio.addEventListener('click', function() {
  variable1.textContent = 'Fractional excretion of sodium';
  variable2.textContent = 'Creatinine';
  variable3.textContent = 'Sodium';
  variable4.textContent = 'Urine sodium';
  fractionalexcretionofsodium = v1;
  creatinine = v2;
  sodium = v3;
  urinesodium = v4;
  result.textContent = '';
});

urinesodiumRadio.addEventListener('click', function() {
  variable1.textContent = 'Fractional excretion of sodium';
  variable2.textContent = 'Creatinine';
  variable3.textContent = 'Sodium';
  variable4.textContent = 'Urine creatinine';
  fractionalexcretionofsodium = v1;
  creatinine = v2;
  sodium = v3;
  urinecreatinine = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(fractionalexcretionofsodiumRadio.checked)
    result.textContent = `Fractional excretion of sodium = ${computefractionalexcretionofsodium().toFixed(2)}`;

  else if(creatinineRadio.checked)
    result.textContent = `Creatinine = ${computecreatinine().toFixed(2)}`;

  else if(sodiumRadio.checked)
    result.textContent = `Sodium = ${computesodium().toFixed(2)}`;

  else if(urinecreatinineRadio.checked)
    result.textContent = `Urine creatinine = ${computeurinecreatinine().toFixed(2)}`;

  else if(urinesodiumRadio.checked)
    result.textContent = `Urine sodium = ${computeurinesodium().toFixed(2)}`;
})

// calculation

// fractionalexcretionofsodium = (creatinine * urinesodium) / (sodium * urinecreatinine)

function computefractionalexcretionofsodium() {
  return ((Number(creatinine.value) * Number(urinesodium.value)) / (Number(sodium.value) * Number(urinecreatinine.value))) * 100;
}

function computecreatinine() {
  return ((Number(fractionalexcretionofsodium.value) / 100) / Number(urinesodium.value)) * (Number(sodium.value) * Number(urinecreatinine.value));
}

function computesodium() {
  return (Number(creatinine.value) * Number(urinesodium.value)) / ((Number(fractionalexcretionofsodium.value) / 100) * Number(urinecreatinine.value));
}

function computeurinecreatinine() {
  return (Number(creatinine.value) * Number(urinesodium.value)) / (Number(sodium.value) * (Number(fractionalexcretionofsodium.value) / 100));
}

function computeurinesodium() {
  return ((Number(fractionalexcretionofsodium.value) / 100) / Number(creatinine.value)) * (Number(sodium.value) * Number(urinecreatinine.value));
}