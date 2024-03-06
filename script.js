let total = 0;

document.getElementById('add-btn').addEventListener('click', function() {
    const itemName = document.getElementById('item-name').value;
    const itemPrice = parseFloat(document.getElementById('item-price').value);
    
    if (isNaN(itemPrice) || itemPrice <= 0) {
        alert('Please enter a valid price.');
        return;
    }

    total += itemPrice;
    document.getElementById('total').innerText = total.toFixed(2);
    alert(`Item "${itemName}" added. Total: ${total.toFixed(2)}`);
    
    document.getElementById('item-name').value = '';
    document.getElementById('item-price').value = '';
});
