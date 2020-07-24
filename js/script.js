let registerBtn = document.querySelector('#registerBtn');
let input = document.querySelectorAll('.formInput input')
let feedback = document.querySelectorAll('.feedback');
let labels = document.querySelectorAll('label');

let regSuccess = document.querySelector('#regSuccess');

let displayName = document.querySelector('#displayName');
let displayNameFeedback = document.querySelector('#displayName + p');
let displayNameLabel = document.querySelector('#displayNameLabel')

let email = document.querySelector('#email');
let emailFeedback = document.querySelector('#email + p');
let emailLabel = document.querySelector('#emailLabel')

let mobileNumber = document.querySelector('#mobileNumber');
let mobileNumberFeedback = document.querySelector('#mobileNumber + p');
let mobileNumberLabel = document.querySelector('#mobileNumberLabel')

let username = document.querySelector('#username');
let usernameFeedback = document.querySelector('#username + p');
let usernameLabel = document.querySelector('#usernameLabel')

let password = document.querySelector('#password');
let passwordFeedBack = document.querySelector('#password + p');
let passwordLabel = document.querySelector('#passwordLabel')

let confirmPassword = document.querySelector('#confirmPassword');
let confirmPasswordFeedback = document.querySelector('#confirmPassword + p');
let confirmPasswordLabel = document.querySelector('#confirmPasswordLabel')


let inputCheck = ()=>{
    let count =0;
    for(let x=0; x < input.length; x++){
    if(input[x].value === ''){
        let message = `${labels[x].textContent} cannot be blank`
       addFeedback(feedback[x], message);
      count++;
    }
  }
  if(count > 0){
    registerBtn.disabled = true;
    return false;
  }
  else{
    registerBtn.disabled = false; 
    return true;
 }
}
let clearFeedback =(element)=>{
    // regSuccess.innerText = ''
    element.innerText = ``
}
let addFeedback = (element, message)=>{
    element.innerText = message
}
let passwordCheck =()=>{    
    if(password.value !== confirmPassword.value){
        let message = `Passwords do not match`
        addFeedback(confirmPasswordFeedback, message)
        return false;
    }
    else{
        clearFeedback(confirmPasswordFeedback);
        clearFeedback(regSuccess);

        registerBtn.disabled = false;
        return true;
    }
}

let validityCheck =(input, label, feedback, regex, regFeedback)=>{
    let result = regex.test(input.value)
    if(result){
        registerBtn.disabled = false;
    }
    else{
        addFeedback(feedback, regFeedback)
        registerBtn.disabled = true;
        return true;
    }
}
displayName.addEventListener('input', ()=>{
    clearFeedback(displayNameFeedback);
    clearFeedback(regSuccess);

    if(displayName.value === ''){
        displayNameFeedback.textContent = `${displayNameLabel.textContent} cannot be blank`;
        registerBtn.disabled = true;
    }
    else{
        let regex = /^[a-z0-9]+$/gi;
        let regMessage = 'Please use only alphanumeric characters for display name'
        validityCheck(displayName, displayNameLabel, displayNameFeedback, regex, regMessage)
    }
});
displayName.addEventListener('blur', ()=>{
    if(displayName.value === ''){
        displayNameFeedback.textContent = `${displayNameLabel.textContent} cannot be blank`;
        registerBtn.disabled = true;
    }
    else{
        let regex = /^[a-z0-9]+$/gi;
    let regMessage = 'Please use only alphanumeric characters for display name'
    validityCheck(displayName, displayNameLabel, displayNameFeedback, regex, regMessage)
    }
})
email.addEventListener('input', ()=>{
    clearFeedback(emailFeedback);
    clearFeedback(regSuccess);

    if(email.value === ''){
        emailFeedback.textContent = `${emailLabel.textContent} cannot be blank`
        registerBtn.disabled = true;
    }
    else{
        let regex = /^[-.@_a-z0-9]+$/gi;
        let regMessage = 'Invalid Email Format'
        validityCheck(email, emailLabel, emailFeedback, regex, regMessage)         
    }
});
email.addEventListener('blur', ()=>{
    if(email.value === ''){
        emailFeedback.textContent = `${emailLabel.textContent} cannot be blank`;
        registerBtn.disabled = true;
    }
    else{
        let regex = /^[-.@_a-z0-9]+$/gi;
        let regMessage = 'Invalid Email Format'
        validityCheck(email, emailLabel, emailFeedback, regex, regMessage)         
    }
})
mobileNumber.addEventListener('input', ()=>{
    clearFeedback(mobileNumberFeedback);
    clearFeedback(regSuccess);

    if(mobileNumber.value === ''){
        mobileNumberFeedback.textContent = `${mobileNumberLabel.textContent} cannot be blank`;
        registerBtn.disabled = true;
    }
    else{
        let regex = /^[0-9]+$/gi;
        let regMessage = 'Invalid Mobile Number Format, numeric characters only'
        validityCheck(mobileNumber, mobileNumberLabel, mobileNumberFeedback, regex, regMessage)
    }
});
mobileNumber.addEventListener('blur', ()=>{
    if(mobileNumber.value === ''){
        mobileNumberFeedback.textContent = `${mobileNumberLabel.textContent} cannot be blank`;
        registerBtn.disabled = true;
    }
    else{
        let regex = /^[0-9]+$/gi;
        let regMessage = 'Invalid Mobile Number Format, numeric characters only'
        validityCheck(mobileNumber, mobileNumberLabel, mobileNumberFeedback, regex, regMessage)
    }
})
username.addEventListener('input', ()=>{
    clearFeedback(usernameFeedback);
    clearFeedback(regSuccess);

    if(username.value === ''){
        usernameFeedback.textContent = `${usernameLabel.textContent} cannot be blank`;
        registerBtn.disabled = true;
    }
    else{
        let regex = /^[a-z0-9]{1,15}$/gi;
        let regMessage = 'Username is alphanumeric and cannot be greater than 15 characters'
        validityCheck(username, usernameLabel, usernameFeedback, regex, regMessage )
    }
});
username.addEventListener('blur', ()=>{
    if(username.value === ''){
        usernameFeedback.textContent = `${usernameLabel.textContent} cannot be blank`;
        registerBtn.disabled = true;
    }
    else{
        let regex = /^[a-z0-9]{1,15}$/gi;
        let regMessage = 'Username is alphanumeric and cannot be greater than 15 characters'
        validityCheck(username, usernameLabel, usernameFeedback, regex, regMessage )
    }
})
password.addEventListener('input', ()=>{
    clearFeedback(passwordFeedBack);
    clearFeedback(regSuccess);

    if(password.value === ''){
        passwordFeedBack.textContent = `${passwordLabel.textContent} cannot be blank`;
        registerBtn.disabled = true;
    }
    else{
        let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gi;
        let regMessage = 'Password must contain minimum of six characters, at least one letter, one number and one special character'
        validityCheck(password, passwordLabel, passwordFeedBack, regex, regMessage)
    }
});
password.addEventListener('blur', ()=>{
    ;
    if(password.value === ''){
        passwordFeedBack.textContent = `${passwordLabel.textContent} cannot be blank`;
        registerBtn.disabled = true;
    }
    else{
        let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gi;
        let regMessage = 'Password must contain minimum of six characters, at least one letter, one number and one special character'
        validityCheck(password, passwordLabel, passwordFeedBack, regex, regMessage)
        registerBtn.disabled = true;
    }
})
password.addEventListener('change', passwordCheck);

confirmPassword.addEventListener('input', ()=>{
    clearFeedback(confirmPasswordFeedback);
    clearFeedback(regSuccess);

});
confirmPassword.addEventListener('blur', ()=>{
        let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/gi;
        let regMessage = 'Password must contain minimum of six characters, at least one letter, one number and one special character'
        let check =  validityCheck(password, passwordLabel, passwordFeedBack, regex, regMessage)
        
    if(!passwordCheck()){
        registerBtn.disabled = true;
        
    }
    else if(passwordCheck() && !inputCheck()){
        registerBtn.disabled = true;
        
    }
    else if(passwordCheck() && check){
        registerBtn.disabled = true;
        
    }
    else{
        inputCheck();
        registerBtn.disabled = false;
    }
});

registerBtn.addEventListener('click', (event)=>{
    event.preventDefault();
        if(inputCheck()){
            console.log('Registration Successful')
            regSuccess.innerText = 'Registration Successful'
            // submit form function here
        }
        else{
            console.log('Registration unsuccessful')
            
        }
});
