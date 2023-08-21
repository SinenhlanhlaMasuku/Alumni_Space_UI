document.addEventListener('DOMContentLoaded', () => {
  const faTimes = document.querySelector('.fa-times');
  const wrapper = document.querySelector('.wrapper');
  const loginLink = document.querySelector('.login-link');
  const registerLink = document.querySelector('.Register-link');
  const btnPopup = document.querySelector('.btnLogin-popup');
  
  faTimes.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    wrapper.classList.remove('active-register');
    wrapper.classList.remove('active-login');
  });
  
  registerLink.addEventListener('click', () => {
    wrapper.classList.add('active-register');
  });
  
  loginLink.addEventListener('click', () => {
    wrapper.classList.add('active-login');
  });
  
  btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
  });
});



/*const wrapper = document.querySelector('.wrapper'); 
const loginLink = document.querySelector('.login-link'); 
const registerLink = document.querySelector('.register-link'); 
const btnPopup = document.querySelector('.btnLogin-popup'); 
const iconClose = document.querySelector('.icon-close'); 

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

btnPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});*/
