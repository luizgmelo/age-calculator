function calculateYear() {
  const birth = document.querySelector('#birth').value;

  const actualYear = new Date().getFullYear();
  const birthYear = Number(birth.substr(0, 4));

  const output = document.querySelector('#output');
  const yearsOld = actualYear - birthYear;
  output.innerText = `You have ${yearsOld} years old`;
}

const btCalculate = document.querySelector('#btCalculate');
btCalculate.addEventListener('click', calculateYear);
