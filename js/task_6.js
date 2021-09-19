let inputElLength = document.querySelector('#validation-input');

inputElLength.addEventListener('blur', changeinputElLength);

function changeinputElLength(e) {
    const lengthEl = e.currentTarget.value.length;
    
       console.log('lengthEl') ; 
    };
 