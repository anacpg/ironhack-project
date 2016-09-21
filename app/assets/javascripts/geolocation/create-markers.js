function drawMarkers(path){
  path.map(createMarker);

  function createMarker(position) {
    console.log(position);
    var myLatLng = new google.maps.LatLng(position['lat'],position['lng']);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map
    });
    //
    marker.setMap(map);
  }
//centerMap(myLatLng);
  // function centerMap(location){
  //   if (place.geometry.location) {
  //     map.setCenter(location);
  //     map.setZoom(14);
  //     drawMarkers(flightPlanCoordinates)
  //     drawRoute(flightPlanCoordinates)
  //   } else {
  //     alert("The place has no location...?")
  //   }
  // }
}
