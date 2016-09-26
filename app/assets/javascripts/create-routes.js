document.addEventListener('DOMContentLoaded', function(){
  if (window.location.pathname == "/routes/new"){

    document.getElementsByClassName('js-bar-form')[0].classList.add('hidden');
    document.getElementById('btn-create-route')
      .addEventListener('click', createNewRoute);
    document.getElementById('btn-add-bar')
      .addEventListener('click', getBarInput);

    var inputs = [];
    inputs[0] = document.getElementById('js-route-name');
    inputs[1] = document.getElementById('js-search-bar');
    inputs[2] = document.getElementById('js-bar-name');
    inputs[3] = document.getElementById('js-bar-description');
    inputs.map(function(input){
      input.addEventListener('click', function() {
       deleteInputText(event);
      })
    });
  }
})

function createNewRoute() {
  event.preventDefault();
  var route_name = document.getElementById('js-route-name').value;
  //RequestsAPI.createRoute(route_name).then(create);
  var request = $.ajax({
    url: '/api/routes/create',
    type: 'POST',
    success: newRoute,
    error: errorNewRoute,
    data: {route: {name: route_name}}
  });

  //request.done(addFormBar);
  //request.fail(showError);
}

function addFormBar (){
  geolocation();
  setupAutocomplete();
  document.getElementsByClassName('js-bar-form')[0].classList.remove('hidden');
}

function newRoute(response){
  addFormBar();
  document.getElementsByClassName('div-create-route')[0].classList.add('hidden');
  var js_route = document.getElementsByClassName('route-name')[0];
  js_route.innerText = response['name'];
  js_route.setAttribute('id-route',response['id']);
}

function errorNewRoute(response) {
  var $name_error = document.getElementById('js-name-error');
  $name_error.classList.remove('hidden');
  var error = JSON.parse(response['responseText']);
  //var html = `<p style="color:tomato; font-size:24px"> ${error['error']}</p>`;
  errorNullData(document.getElementById('js-route-name'));
  $name_error.innerText = error['error'];

}


function getBarInput(){
  event.preventDefault();
  var input = {}
  var $name = document.getElementById('js-bar-name');
  var $description = document.getElementById('js-bar-description');
  var neighborhood_id = document
      .getElementsByClassName('neighborhoods-form')[0].value;

  if ($name.value === '') errorNullData($name);
  if ($description.value === '') errorNullData($description);
  if( $name.value != '' && $description.value != '' && markers.length != 0 ){
    input = { bar: {
      name: $name.value,
      description: $description.value,
      neighborhood_id: neighborhood_id,
      lat: markers[0].getPosition().lat(),
      lng: markers[0].getPosition().lng() }
    };
    postAddBar(input);
  }
}

function errorNullData(input_text) {
  input_text.setAttribute('style', 'color: red; border-width: 2px;\
   border-style: solid;');
}

function postAddBar(input) {
  var route_id = document.getElementsByClassName('route-name')[0]
        .getAttribute('id-route');

  $.ajax({
    url: '/api/routes/'+ route_id +'/bars/create',
    type: 'POST',
    success: addBarHtml,
    error: showError,
    data: input
  });
}

function addBarHtml(response) {
  var barsSection = document.getElementsByClassName('js-ul-bars')[0];
  //barsSection.classList.remove('hidden');
  barsSection.insertAdjacentHTML('beforeend', buildBarHtml(response));
}

function deleteInputText(event){
  document.getElementById('js-name-error').classList.add('hidden');
  event.target.value = "";
  event.target.setAttribute('style','width:300px');
}
