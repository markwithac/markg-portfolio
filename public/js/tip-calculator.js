const totalHeader = document.getElementById('total-header')
const totalBody = document.getElementById('total-body')
const totalWithTipHeader = document.getElementById('total-w-tip-header')
const totalWithTipBody = document.getElementById('total-w-tip-body')

function calculateTip() { 
  let amount = document.getElementById('amount').value
  let percent = document.getElementById('percent').value

  // Validate input
  let errors = []
  totalBody.innerHTML = ''

  if (isNaN(amount) || amount == '') {
    errors.push('Please enter a valid number for the amount')
  } 
  if (isNaN(percent) || percent == '') {
    errors.push('Please enter a valid percent.')
  }
  if (errors.length > 0) {
    for (let err of errors) {
      totalBody.innerHTML += err + '<br>'
    }
  } else {
    // Calculate tip
    const convertTip = percent / 100;
    let tip = amount * convertTip;
    tip = tip.toFixed(2)  // Round tip

    // Display Totals
    totalHeader.style.display = 'inline'
    totalBody.style.display = 'inline';

    totalBody.innerHTML = `$ ${tip}`;
  }
}

totalHeader.style.display = 'none'

document.getElementById('btn').onclick = function() {
  calculateTip() 
}