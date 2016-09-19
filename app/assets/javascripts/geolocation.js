
$(document).ready(function(){
  var aux = $('#map')[0]
  console.log(aux)
  var map;

  var flightPlanCoordinates = [
    {lat: 40.4466221, lng: -3.692459500000041},
    {lat: 40.44276659332215, lng: -3.71063232421875},
    {lat:40.44439961890733, lng: -3.6938095092773438},
    {lat: 40.44694705960048, lng: -3.7009334564208984}
  ];

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

  function createMap(position){
    var mapOptions =  {
      center: position,
      zoom: 15
    };

    map = new google.maps.Map($('#map')[0],mapOptions);
    //createMarker(flightPlanCoordinates[0]);
    setupAutocomplete();
  }

  function drawMarkers(positions){
    positions.map(createMarker);
  }

  function createMarker(position) {

    var myLatLng = new google.maps.LatLng(position['lat'],position['lng']);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });

    marker.setMap(map);
  }

  function drawRoute(path){
    var flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });

    // Creando la ruta en el mapa
    flightPath.setMap(map);
  }


  function setupAutocomplete(){
    var input = $('#get-places')[0];
    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.addListener('place_changed', function(){
      var place = autocomplete.getPlace();
      if (place.geometry.location) {
        map.setCenter(place.geometry.location);
        map.setZoom(14);
        drawMarkers(flightPlanCoordinates)
        drawRoute(flightPlanCoordinates)
      } else {
        alert("The place has no location...?")
      }
    });
  }
})
