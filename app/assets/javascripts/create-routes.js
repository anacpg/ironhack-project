document.addEventListener('DOMContentLoaded', function(){
  if (window.location.pathname == "/routes/new"){

    document.getElementsByClassName('js-bar-form')[0].classList.add('hidden');
    document.getElementById('btn-create-route')
      .addEventListener('click', createNewRoute);
    document.getElementById('btn-add-bar')
      .addEventListener('click', getBarInput);

    var inputs = [];
    inputs[0] = document.getElementsByClassName('js-route-name')[0];
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
  console.log('estoy aqui en create New Route');
  event.preventDefault();
  var route_name = document.getElementsByClassName('js-route-name')[0].value;
  geolocation();
  RequestsAPI.createRoute(route_name);
  // var request = $.ajax({
  //   url: '/api/routes/create',
  //   type: 'POST',
  //   success: newRoute,
  //   error: errorNewRoute,
  //   data: {route: {name: route_name}}
  // });

  //request.done(addFormBar);
  //request.fail(showError);
}

function addFormBar (){
  // geolocation();
  setupAutocomplete();
  document.getElementById('js-create-bar').classList.remove('hidden');
  document.getElementsByClassName('js-bar-form')[0].classList.remove('hidden');
  document.getElementsByClassName('js-ul-bars')[0].classList.remove('hidden');
  document.getElementsByClassName('js-bar-map')[0].classList.remove('hidden');
  document.getElementsByClassName('route-name')[0].classList.remove('hidden');

}

function newRoute(response){
  addFormBar();
  document.getElementsByClassName('div-create-route')[0].classList.add('hidden');
  var js_route = document.getElementsByClassName('route-name')[0];
  js_route.innerText += response['name'];
  js_route.setAttribute('id-route',response['id']);
}

function errorNewRoute(response) {
  document.getElementById('js-name-error').classList.remove('hidden');
  //var html = `<p style="color:tomato; font-size:24px"> ${error['error']}</p>`;
  errorNullData(document.getElementsByClassName('js-route-name')[0]);

}

function getBarInput(){
  event.preventDefault();
  var input = {}
  var $name = document.getElementById('js-bar-name');
  var $description = document.getElementById('js-bar-description');
  var neighborhood_id = document
      .getElementsByClassName('form-districts-bar')[0].value;
  var image = document.getElementById('fileUpload');
  console.log('image', image);

  if ($name.value === '') errorNullData($name);
  if ($description.value === '') errorNullData($description);
  if( $name.value != '' && $description.value != '' && markers.length != 0 ){
    input = { bar: {
        name: $name.value,
        description: $description.value,
        neighborhood_id: neighborhood_id,
        lat: markers[0].getPosition().lat(),
        lng: markers[0].getPosition().lng() },
        image : "http://res.cloudinary.com/divgxbjh0/image/upload/v1474971344/bar1_w29aac.jpg"
    };
    postAddBar(input);
  }
}

function errorNullData(input_text) {
  document.getElementsByClassName('js-form-route')[0].classList.add('has-error');
  input_text.setAttribute('id', 'inputError');
   input_text.classList.add('shake');
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
  document.getElementsByClassName('js-route-name')[0].classList.remove('shake');

  event.target.value = "";
  //event.target.setAttribute('style','width:300px');
  //event.target.classList.add('shake');
}
