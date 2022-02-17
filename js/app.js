document.getElementById('calculate-button').addEventListener('click' , function(){
    calculate()
})


function calculate(){
    const incomeText = document.getElementById('income').value;
    const income = parseFloat(incomeText)
    console.log(income);
    
    //expense
    const food = document.getElementById('food').value
    const rent = document.getElementById('rent').value
    const clothes  = document.getElementById('clothes').value
   
    //calculate
    const calculateTotal = parseFloat(food) + parseFloat(rent) + parseFloat(clothes)
    //calculate balance
    const balance = income - calculateTotal ; 
    document.getElementById('balance').innerText = balance;
    document.getElementById('total-expense').innerText =  calculateTotal  ;
}



//parcentage calculate
function parcentage(){
    const incomeText = document.getElementById('income').value;
    const income = parseFloat(incomeText)
   

    const saveInputText = document.getElementById('save-input').value ;
    const saveinput = parseFloat(saveInputText)
    

    const parcentage = (income * saveinput)/100 ;
    document.getElementById('saving-amount').innerText =  parcentage ;
    const balanceText = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceText);

    const remainingBalance = balance - parcentage ;
    document.getElementById('remaing-balance').innerText = remainingBalance ;

}

document.getElementById('save-button').addEventListener('click' , function(){
    parcentage()
})
