document.addEventListener('DOMContentLoaded', function(){
  if (window.location.pathname == "/routes/new"){

    geolocation();
    document.getElementById('btn-create-route')
      .addEventListener('click', createNewRoute);
  }
})

function createNewRoute() {
  event.preventDefault();
  route_name = document.getElementById("js-route-name").value;

  //RequestsAPI.createRoute(route_name).then(create);
  $.ajax({
    url: '/api/routes/create',
    type: 'POST',
    success: newRoute,
    error: showError,
    data: {route: {name: route_name}}
  });
}

function newRoute(response){

  document.getElementsByClassName('div-create-route')[0].classList.add('hidden');
  var js_route = document.getElementsByClassName('route-name')[0];
  js_route.innerText = response['name'];
  js_route.setAttribute('id-route',response['id']);
  console.log('response createRoute', response);
}
