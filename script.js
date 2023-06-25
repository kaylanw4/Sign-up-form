const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirm-password")
const message = document.getElementById("message")


var tele = document.querySelector('#phone');

tele.addEventListener('keyup', function(e){
  if (e.key != 'Backspace' && (tele.value.length === 3 || tele.value.length === 7)){
  tele.value += '-';
  }
});

var passConfirm = function() {
    if (password.value !== confirmPassword.value || password.value === '') {
        message.style.color = "Red";
        message.innerHTML = "* Passwords do not match!"
        password.classList.remove('match')
        password.classList.add('no-match')
        confirmPassword.classList.remove('match')
        confirmPassword.classList.add('no-match')
        
    } else {
        message.style.color = "Green";
        message.innerHTML = "Passwords match!"
        password.classList.remove('no-match')
        password.classList.add('match')
        confirmPassword.classList.remove('no-match')
        confirmPassword.classList.add('match')
    }
  }