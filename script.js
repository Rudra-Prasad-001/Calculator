
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
    switch(e.target.className) {
        case 'AC' :
            clearDisplay() ;
            break;
        case 'plus-or-minus' :
            toggleSign();
            break;
        case 'percentage' :
            convertToPercentage() ;
            break ;
        case 'equal' :
            calculateResult();
            break;
        
        default : if(operator.includes(e.target.className)){
            return setOperator(e.target.textContent);
        }
                  else if(number.includes(e.target.className)) {
                    return appendNumber(e.target.textContent);
                  }

    }
    updateDisplay();
});

function updateDisplay() {
    display.textContent = currentInput;
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

function convertToPercentage() {
    if(currentInput) {
        currentInput = parseFloat((currentInput) / 100).toString();
    }
};

function appendNumber(num) {
    if(num === '.' && currentInput.includes('.')) return display.textContent = 'NaN';

    else {
        currentInput += num ;
    }

};





