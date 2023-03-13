document.getElementById('btn-withdraw').addEventListener('click', function () {
  const withdrawAmountElement = document.getElementById('withdraw-amount');
  const withdrawAmount = parseFloat(withdrawAmountElement.value);
  const totalBalanceElement = document.getElementById('display-total');
  const totalBalance = parseFloat(totalBalanceElement.innerText);
  if (withdrawAmount <= totalBalance) {
    totalBalanceElement.innerText = totalBalance - withdrawAmount;
    const displayWithdrawElement =
      document.getElementById('display-withdrawal');
    displayWithdrawElement.innerText =
      parseFloat(displayWithdrawElement.innerText) + withdrawAmount;
    withdrawAmountElement.value = '';
  } else {
    alert('you can not withdraw more than baper taka');
  }
});
