document.addEventListener('DOMContentLoaded', () => {
    const faTimes = document.querySelector('.fa-times');
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.Register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const registerForm = document.querySelector('.form-box.register');
    const loginForm = document.querySelector('.form-box.login');

    // Function to close the wrapper
    function closeWrapper() {
        wrapper.classList.remove('active-popup');
        loginForm.style.transform = 'translateX(400px)';
        registerForm.style.transform = 'translateX(400px)';
    }

    faTimes.addEventListener('click', () => {
        // Close the wrapper
        closeWrapper();
    });

    registerLink.addEventListener('click', () => {
        // Show the registration form
        loginForm.style.transform = 'translateX(400px)';
        registerForm.style.transform = 'translateX(0)';
        wrapper.classList.add('active-popup');
    });

    loginLink.addEventListener('click', () => {
        // Hide the registration form
        registerForm.style.transform = 'translateX(400px)';
        loginForm.style.transform = 'translateX(0)';
        wrapper.classList.add('active-popup');
    });

    btnPopup.addEventListener('click', () => {
        // Display the wrapper
        wrapper.style.display = 'block';
        loginForm.style.transform = 'translateX(0)';
    });
});


 function auth(){
  var email=document.getElementById('email').Value;
  var password=document.getElementById('password').value;
    
  //conditions
  if(email=='219093063@tut4life.ac.za' && password=='Sinehlanhla@1')
    { 
      alert("Login Successfully");
      window.location.assign('landingPage.html');
      
    }
    else
    {
      alert("invalid information");
      return;
    }
  }