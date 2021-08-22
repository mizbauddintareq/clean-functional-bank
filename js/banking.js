function getInputValue (id){
    const inputValue = document.getElementById(id);
    const inputInText = inputValue.value;
    const value = parseFloat(inputInText);
    inputValue.value = '';
    return value;
};

function getInnerTextValue (fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInText = fieldTag.innerText;
    const value = parseFloat(fieldValueInText);
    return value;

};

function updateTotal (id, amount){
    const previousTotal = getInnerTextValue(id)
    const newTotal = previousTotal + amount;
    document.getElementById(id).innerText = newTotal;
    return newTotal;
};

// update balance
function updateBalance (amount, isAdding){
    const previousBalance = getInnerTextValue('balance-total');
    let newBalance;
    if (isAdding == true){
        newBalance = previousBalance + amount;
    }
    else{
        newBalance = previousBalance - amount;
    }
    document.getElementById('balance-total').innerText = newBalance;
};

// handle deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
    const amount = getInputValue('deposit-amount');
    if (amount > 0){
        updateTotal('total-deposit', amount);
        updateBalance(amount, true)
    }
});

// handle withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const amount = getInputValue('withdraw-amount');
    const balance = getInnerTextValue('balance-total')
    if (amount > 0 && amount <= balance){
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
});

