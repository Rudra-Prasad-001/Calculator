document.addEventListener('DOMContentLoaded' , () => {
    const display = document.querySelector('#display');

    const buttonsContainer = document.querySelector('.buttons-container');

    const operators = document.querySelectorAll('.operator') ;   //Node list

    const numbers = document.querySelectorAll('.number');  //Node list

    const number = [...numbers] ;  //Converted Node list to array

    const operator = [...operators] ;  // Converted Node list to array

    let currentInput = '';
    let previousInput = '';
    let operation = null ;

    buttonsContainer.addEventListener('click' , (e) => {
        const target = e.target ;
        const classList = target.classList;
        
        
        switch(true) {
            case classList.contains('AC') :
                clearDisplay() ;
                break;
            case classList.contains('plus-or-minus') :
                toggleSign();
                break;
            case classList.contains('equal') :
                calculateResult();
                break;
            
            default : if(operator.includes(target)){
                      setOperation(target.textContent);
            }
                    else if(number.includes(target)) {
                      appendNumber(target.textContent);
                    }

        } 
        
        updateDisplay();
        
    });

    function updateDisplay() {
        
        display.textContent = `${currentInput}`;
    };


    function clearDisplay() {
        currentInput = '' ;
        previousInput = '' ;
        operation = null ;
    };

    function toggleSign() {
        if(currentInput) {
            currentInput = parseFloat((currentInput) * (-1)).toString();
        }
    };


    function appendNumber(num) {
        if(num === '.' && currentInput.includes('.')) return display.textContent = 'NaN';

        else {
            currentInput += num ;
        }

    };

    function setOperation(op) {         
        if(currentInput === '') return;
        if(previousInput !== '') {          // If we give only one number then it wont work
            calculateResult();
        }

        operation = op ;
        previousInput = currentInput ;
        currentInput = '' ;

    }

    function calculateResult() {
        let result;
        let prev = parseFloat((previousInput));
        let current = parseFloat((currentInput)) ;
        if(isNaN(prev) || isNaN(current)) return;

        switch(operation) {
            case '/' :
                result = prev / current ;
                break;
            case '*' :
                result = prev * current ;
                break;
            case '-' :
                result = prev - current ;
                break;
            case '+' :
                result = prev + current ;
                break;
            case '%' :
                result = (prev*current) / 100 ;
                break;
            default : return ;
        }
        currentInput = result.toString();
        operation = null;
        previousInput = '';
        
    };

});
