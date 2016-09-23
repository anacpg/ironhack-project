document.addEventListener('DOMContentLoaded', function(){
  if (window.location.pathname == "/routes/new"){

    geolocation();
    $('#btn-create-route').on('click', function(){
      event.preventDefault();
      $routeName= $('#js-route-name').val();
      $.ajax({
        url: '/api/routes/create',
        type: 'POST',
        success: createRoute,
        error: showError,
        data: {name: 'prueba'}
      });
    })
  }
})
function createRoute(){
  console.log('route creada')
}
