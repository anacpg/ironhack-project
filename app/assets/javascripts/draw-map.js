var geolocationMaps = function (path){
  var path = path;
  var map

  if ("geolocation" in navigator){
    navigator.geolocation.getCurrentPosition(onLocation, onError);
  }

  this.onLocation = function (position){
    // We can't just directly feed the position into our google map
    // The objects are formatted differently, google maps is looking for
    // an object with "lat" and "lng" keys.
    var myPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    createMap(myPosition);
  }

  this.createMap = function (position){
    var mapOptions =  {
      center: position,
      zoom: 15
    };

    map = new google.maps.Map($('#map')[0],mapOptions);
    //createMarker(flightPlanCoordinates[0]);
    //setupAutocomplete();
  }

  this.onError = function (err){
    console.log("What are you using, IE 7??", err);
  }

  this.drawMarkers = function (){
    path.map(this.createMarker);
  }

  this.createMarker = function (position) {
    console.log('createMarker')
    var myLatLng = new google.maps.LatLng(position['lat'],position['lng']);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });
    marker.setMap(map);
  }

  this.drawRoute = function (){
    var flightPath = new google.maps.Polyline({
      path: path,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    // Creando la ruta en el mapa
    flightPath.setMap(map);
  }


  this.centerMap = function (location){
    if (place.geometry.location) {
      map.setCenter(location);
      map.setZoom(14);
      drawMarkers(flightPlanCoordinates)
      drawRoute(flightPlanCoordinates)
    } else {
      alert("The place has no location...?")
    }
  }
}
