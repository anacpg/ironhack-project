function createMap(position){
//  var position = {lat: parseFloat(area.lat), lng: parseFloat(area.lng)}
  var position = generateLocation(position)
  buildMap(position)
  console.log('paso por aqui');
  function buildMap(position){
    var mapOptions =  {
      center: position,
      zoom: 14
    };
    var div_map = document.getElementById('map')
    window.map = new google.maps.Map(div_map, mapOptions);
    window.markers = [];
    window.flightPath;
    window.bounds = new google.maps.LatLngBounds();
    window.geocoder = new google.maps.Geocoder;
    clickOnMap();

  }
}

function generateLocation(area){
  //createMap({lat: parseFloat(area.lat), lng: parseFloat(area.lng)})
  return {lat: parseFloat(area.lat), lng: parseFloat(area.lng)}
}

function geolocation(){
  if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(onLocation, onError);
  }

  function onLocation(position){

  // We can't just directly feed the position into our google map
  // The objects are formatted differently, google maps is looking for
  // an object with "lat" and "lng" keys.
    var myPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    createMap(myPosition);
  }

  function onError(err){
    console.log("What are you using, IE 7??", err);
  }
}

function setupAutocomplete(){
  var input = document.getElementById('js-search-bar');

  var options = {
    // types: ['neighborhood'],
    componentRestrictions: {country:'es'}
  };

  var autocomplete = new google.maps.places.Autocomplete(input, options);
  autocomplete.addListener('place_changed', function(){
    var place = autocomplete.getPlace();
    var location = place.geometry.location;
    //console.log('locacion autocomplete',location);
    getDistrict(location);

    if (location) {
      map.setCenter(place.geometry.location);
      map.setZoom(16);
      var myLatLng = new google.maps.LatLng(location.lat(),location.lng());
      createMarker(myLatLng);
      //drawRoute(flightPlanCoordinates)
    } else {
      alert("The place has no location...?")
    }
  });
}

function clickOnMap(){
  if (window.location.pathname == "/routes/new"){
    map.addListener('click',function(e){
      deleteMarkers();
      //map.setZoom(16);
      bounds = new google.maps.LatLngBounds();
      createMarker(e.latLng);
      getDistrict(e.latLng);
      //map.setZoom(16);
    });
    console.log('markers', markers);
  }
}

function getDistrict(location){

  geocoder.geocode({'location': location}, function(results, status) {
    var index_results ;
    console.log('results', results);
    var index_results = results.length - 8
    var address = results[index_results].formatted_address;
    var district = address.split(',')[0];
    if (district === 'Madrid' ){
      var address = results[index_results-1].formatted_address;
      var district = address.split(',')[0];
    }

    var district_id = document.getElementById(district.toLowerCase()).value;
    //console.log($neighborhood.value);
    var $neighborhood = document.getElementsByClassName('form-districts-bar')
    console.log('neig', $neighborhood[0].value);
    $neighborhood[0].value = parseInt(district_id);
    //$neighborhood.getElementsByTagName('select')[0].value = 1;
    //$neighborhood.value = district.toLowerCase();
  })
}
