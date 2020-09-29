const itemName = document.querySelector('.item-name');
const itemAmount = document.querySelector('.item-amount');
// const calculateItem = document.querySelector('.calculate-item');
let itemAmountArray = [];

class PurchaseItem {
  displayItem() {
    const itemEntryForm = document.querySelector('.form-container');
    itemEntryForm.addEventListener('submit', () => {
      event.preventDefault();
      const itemNameValue = itemName.value;
      const itemAmountValue = itemAmount.value;

      const output = `
        <div class="item-output">
          <button class="delete-item-button">X</button> 
          <p>Item Name: ${itemNameValue}</p>
          <span>Amount: $</span>
          <span>${itemAmountValue}</span>
        </div>
      `
      document.querySelector('.item-container').innerHTML += output;
      itemAmountArray.push(parseFloat(itemAmountValue));

      itemName.value = '';
      itemAmount.value = '';
      itemName.focus();

      cartItem.deleteItem();
    })
  }

  calculateTotalItem() {
    const calculateItem = document.querySelector('.calculate-item');
    calculateItem.addEventListener('click', () => {
      let sumOfItems = itemAmountArray.reduce(function(totalArrayNumber, initialValue){
        return totalArrayNumber + initialValue;
      }, 0);
      document.querySelector('.item-total').innerHTML = sumOfItems;
    })
  }

  deleteItem() {
    const deleteItemButtons = document.querySelectorAll('.delete-item-button');
    deleteItemButtons.forEach((deleteItemButton) => {
      deleteItemButton.addEventListener('click', () => {
        const itemDiv = deleteItemButton.parentElement;
        document.querySelector('.item-container').removeChild(itemDiv);
  
        const currentItemAmount = parseFloat(itemDiv.lastElementChild.innerText);
        const currentAmountIndex = itemAmountArray.indexOf(currentItemAmount);
        itemAmountArray.splice(currentAmountIndex, 1)
      })
    });
  }

  clearPurchaseItem(selector, value) {
    document.querySelector(selector).addEventListener('click', () => {
      document.querySelector('.item-container').innerHTML = '';
      document.querySelector('.item-total').innerHTML = '0';
      document.querySelector('.message').style.display = value;
      itemAmountArray = [];
    })
  }
}

const cartItem = new PurchaseItem();
cartItem.calculateTotalItem();
cartItem.displayItem();

const clearItem = new PurchaseItem();
clearItem.clearPurchaseItem('.clear-item','none');

const checkOutItem = new PurchaseItem();
checkOutItem.clearPurchaseItem('.checkout', 'block');
