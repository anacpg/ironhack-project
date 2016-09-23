function drawRoute(path){
  if(window.walkPath != undefined){
    deletedPopyline();
  }
  walkPath = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
  walkPath.setMap(map);
}

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

function deletedPopyline() {
  window.walkPath.setMap(null);
}
