document.getElementById('calculate-button').addEventListener('click' , function(){
   
    calculate()
   
})

document.getElementById('save-button').addEventListener('click' , function(){
    parcentage()
})



function calculate(){
    if(income.value && food.value && rent.value && clothes.value !== ''){

        const incomeText = document.getElementById('income').value;
        const income = parseFloat(incomeText)
        
        
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
    else{
        alert('Please Fillup All The Filed')
    }
    
    
}



//parcentage calculate
function parcentage(){
    const incomeText = document.getElementById('income').value;
    const income = parseFloat(incomeText)
   

    const saveInputText = document.getElementById('save-input').value ;
    const saveinput = parseFloat(saveInputText)
    

    if(saveInputText > 0){
        const parcentage = (income * saveinput)/100 ;
        document.getElementById('saving-amount').innerText =  parcentage ;
        const balanceText = document.getElementById('balance').innerText;
        const balance = parseFloat(balanceText);
    
        const remainingBalance = balance - parcentage ;
        document.getElementById('remaing-balance').innerText = remainingBalance ;
        document.getElementById('error').innerText= "Sucessfull"
        
        
        
        
    }
    else{
        document.getElementById('error').innerText= "Please enter positive value"
    }


}

