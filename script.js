const form=document.querySelector('#form')
const username=document.querySelector('#username');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
let success = true

form.addEventListener('submit', function(event){
    
    if(!validateInputs()){
        event.preventDefault();
    }
})

function validateInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();

    if(usernameVal==='')
    {
        success = false;
        setError(username,'username is required')
    }
    else{
        setSuccess(username)
    }

    if(emailVal==='')
    {
        success = false;
        setError(email,'email is required')
    }
    else if(validateEmail(emailVal))
    {
        success = false;
        setError(email,'please Enter a validEmail')
    }
    else{
        setSuccess(email)
    }

    if(passwordVal==='')
    {
        success = false;
        setError(password,'password is required')
    }
    else if(passwordVal.length<6)
    {
        success = false;
        setError(password,'password must be atleast 8 characters')
    }
    else{
        setSuccess(password)
    }
    return success;
}

function setError(element,message){
    const input = element.parentElement;
    const errorElement = input.querySelector('.error')
    
    errorElement.innerText=message;
    input.classList.add('error')
    input.classList.remove('success')
}

function setSuccess(element){
    const input = element.parentElement;
    const errorElement = input.querySelector('.error')
    
    errorElement.innerText = '';
    input.classList.add('success')
    input.classList.remove('error')
}

function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
