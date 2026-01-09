// let getting = 'Hello World! :)';
// alert(getting);

// alert(2+3);

// let number1= 2;
// let number2= 3;
// let sum = number1 + number2; alert(sum);

// function add(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// function alertMessage(message) {
//     alert(message);
// }

// let number1= 2;
// let number2= 3;
// let sum = add(2,3); 
// alert(sum);

// if (age < 18) {
//     alert('You are not an adult');
// }else{
//     alert('You are an adult');
// }

// let fullName = {
//     firstName : 'Behroz',
//     lastName : 'Roozbahani'
// }
// alert(fullName.firstName +' '+ fullName.lastName);

// let personalDetails = {
// fullName : {
//     firstName : 'Behroz',
//     lastName : 'Roozbahani'
//  },
//  alertMesage : function (message) {
//                alert(message); 
     
//  }
// }

// personalDetails.alertMesage('Hi, Behrooz! :');

// let submitButton = document.querySelector('#submit-button');

// function clickListener(event) {
//     event.preventDefault();
//     console.log('Button clicked');
// }
// submitButton.addEventListener('click', clickListener);

let submitButton = document.querySelector('#submit-button');

function clickListener(event) { 
    event.preventDefault();
    
    let emailInput = document.querySelector('#email'); 
    let messageInput = document.querySelector('#message');
  
    let emailText = emailInput.value; 
    let messageText = messageInput.value;

    if(emailValidate(emailText) !== true) {
      console.log('The email address must contain @');
    } else {
      console.log('Thanks for your message');  
    }
    if (validateNSFW(messageText) !== false) {
      console.log('Not Safe For Work :(');
      console.log('Warrning to HACK!!!! Exist(s) the "crap" Word(s) in message');
    }else{
      console.log('Safe For Work :)');  
      console.log('email:', emailText +'\n'+ 'message:', messageText);
    }
  }
submitButton.addEventListener('click', clickListener);

  function emailValidate(email) {
    if (email.includes('@')) {
      return true;
    }else{
      return false;
    }
  }

  function validateNSFW(message) {
    if (message.includes('crap')) {
      return true;
    }else{
      return false;
    }
  }