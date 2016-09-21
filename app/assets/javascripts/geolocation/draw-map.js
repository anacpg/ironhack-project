

function drawRoute(path){
  var flightPath = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  // Creando la ruta en el mapa
  flightPath.setMap(map);

  function centerMap(location){
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
