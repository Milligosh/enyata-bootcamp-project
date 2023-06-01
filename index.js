const form = document.querySelector('form');
const formName = document.getElementById('name');
const formEmail = document.getElementById('email');
const error = document.querySelector('.error');

  //adding an event listener to perform a function when submit is clicked!
form.addEventListener('submit', function(e){
    e.preventDefault()

    if(formName.value === '' ||  formEmail.value === ''){
        error.style.display = 'block'

        setTimeout(() => {
            error.style.display = 'none'
        }, 5000) 
        // 5000 milliseconds=5secs meaning after 5 seconds the error message should be gone


        return;
    }
    alert(`Hello ${formName.value}🎊, your form has been submitted successfully.\nYour email is ${formEmail.value}`)
    console.log(formName.value);
    console.log(formEmail.value);

    formName.value = ''
    formEmail.value = ''

    
})