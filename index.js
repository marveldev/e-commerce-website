const itemName = document.querySelector('.item-name');
const itemAmount = document.querySelector('.item-amount');
const itemEntryForm = document.querySelector('.form-container');
const calculateItem = document.querySelector('.calculate-item');
let itemAmountArray = [];

itemEntryForm.addEventListener('submit', () => {
  event.preventDefault();
  const itemNameValue = itemName.value;
  const itemAmountValue = itemAmount.value;

  const output = `
    <div class="item-output">
      <button id=index-${index} class="delete-item-button">X</button> 
      <p>Item Name: ${itemNameValue}</p>
      <p>Amount: $${itemAmountValue}</p>
    </div>
  `
  document.querySelector('.item-container').innerHTML += output;
  itemAmountArray.push(parseFloat(itemAmountValue));

  itemName.value = '';
  itemAmount.value = '';
  
  const deleteItemButtons = document.querySelectorAll('.delete-item-button');
  deleteItemButtons.forEach((deleteItemButton) => {
    deleteItemButton.addEventListener('click', () => {
      const deleteItem = deleteItemButton.parentElement;
      document.querySelector('.item-container').removeChild(deleteItem);
    })
  });
})

calculateItem.addEventListener('click', () => {
  let sumOfItems = itemAmountArray.reduce(function(totalArrayNumber, initialValue){
    return totalArrayNumber + initialValue;
  }, 0);
  document.querySelector('.item-total').innerHTML = sumOfItems;
})

document.querySelector('.clear-item').addEventListener('click', () => {
  document.querySelector('.item-container').innerHTML = '';
  document.querySelector('.item-total').innerHTML = '0';
  document.querySelector('.message').style.display = 'none';
  itemAmountArray = [];
})

document.querySelector('.checkout').addEventListener('click', () => {
  document.querySelector('.item-container').innerHTML = '';
  document.querySelector('.item-total').innerHTML = '0';
  document.querySelector('.message').style.display = 'block';
  itemAmountArray = [];
})
