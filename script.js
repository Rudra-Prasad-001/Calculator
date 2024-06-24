
const display = document.querySelector('#display');

const buttonsContainer = document.querySelector('.buttons-container');

const operators = document.querySelectorAll('.operator') ;   //Node list

const numbers = document.querySelectorAll('.number');  //Node list

const number = [...numbers] ;  //Converted Node list to array

const operator = [...operators] ;  // Converted Node list to array

let currentInput = '';
let previousInput = '';
let operation = null ;

buttons_container.addEventListener('click' , (e) => {
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
        
        default : if(operator.contains(e.target.className)){
            return setOperator(e.target.textContent);
        }
                  else if(number.contains(e.target.className)) {
                    return appendNumber(e.target.textContent);
                  }

    }
});



