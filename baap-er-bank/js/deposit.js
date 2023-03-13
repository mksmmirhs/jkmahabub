document.getElementById('btn-deposit').addEventListener('click', function () {
  const depositAmountField = document.getElementById('deposit-amount');
  const depositAmount = parseFloat(depositAmountField.value);
  const displayDepositField = document.getElementById('display-deposit');
  displayDepositField.innerText =
    parseFloat(displayDepositField.innerText) + depositAmount;
  const displayTotalElement = document.getElementById('display-total');
  displayTotalElement.innerText =
    parseFloat(displayTotalElement.innerText) + depositAmount;
  depositAmountField.value = '';
});
