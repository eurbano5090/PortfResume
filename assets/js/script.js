document.addEventListener('DOMContentLoaded', function() {
const btnToggle = document.querySelector('.toggle-btn');
const btnSwitch = document.querySelector('.switch');

btnToggle.addEventListener('click', function () {
  console.log('click')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});



  $('p').click(function(){
    $('p').css("color", "red").slideUp(2000).slideDown(2000);
  });

  btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
  
    // Guardamos el modo en localstorage.
    if(document.body.classList.contains('dark')){
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }
  });
  
  // Obtenemos el modo actual.
  if(localStorage.getItem('dark-mode') === 'true'){
    document.body.classList.add('dark');
    btnSwitch.classList.add('active');
  } else {
    document.body.classList.remove('dark');
    btnSwitch.classList.remove('active');
  }
});
