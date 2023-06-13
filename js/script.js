let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

var bookNowButton = document.querySelector('.btn2');
bookNowButton.addEventListener('click', function(event) {
  event.preventDefault(); 


  var nameInput = document.querySelector('.box[placeholder="your name"]');
  var numberInput = document.querySelector('.box[placeholder="your number"]');
  var emailInput = document.querySelector('.box[placeholder="your email"]');
  var dateInput = document.querySelector('.box[type="date"]');


  if (nameInput.value === '' || numberInput.value === '' || emailInput.value === '' || dateInput.value === '') {
    alert('Please fill in all the details.');
  } else {
    alert('Appointment booked successfully!');
  }
});

