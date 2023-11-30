function calculateYearMonth() {
  const birth = document.querySelector('#birth').value;
  const date = new Date();

  let actualYear = date.getFullYear();
  const birthYear = Number(birth.substr(0, 4));

  let actualMonth = date.getMonth() + 1;
  const birthMonth = Number(birth.substr(5, 2));

  const output = document.querySelector('#output');
  let monthsOld = actualMonth - birthMonth;
  // 8 - 10 = -2 two months left to complete
  if (actualMonth < birthMonth) {
    actualYear--;
    actualMonth = 12 + actualMonth;
    monthsOld = actualMonth - birthMonth
  }

  let yearsOld = actualYear - birthYear;

  // 11 - 10 = 1
  console.log(monthsOld)

  output.innerText = `You have ${yearsOld} years old\nYou have ${monthsOld} months old`;
}

const btCalculate = document.querySelector('#btCalculate');
btCalculate.addEventListener('click', calculateYearMonth);
