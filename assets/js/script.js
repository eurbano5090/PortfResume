const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function () {
  console.log('clik')
  document.getElementById('sidebar').classList.toggle('active');
  console.log(document.getElementById('sidebar'))
});
$('.carouselproyectos').carousel({
  interval: 10000
})

  $('p').click(function(){
    $('p').css("color", "red").slideUp(2000).slideDown(2000);
  });
