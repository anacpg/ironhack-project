function drawMarkers(path){
  bounds = new google.maps.LatLngBounds();
  path.map(createMarker);
  if (path.length > 0)  map.setCenter(bounds.getCenter());
}


function createMarker(bar) {
  //changeIcon will be true if marker is the selected bar
  var myLatLng = new google.maps.LatLng(bar['lat'],bar['lng']);
  map.setCenter();
  bounds.extend( myLatLng);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
  //add markers to markers array
  markers.push(marker);
  marker.setMap(map);
}

function deleteMarkers() {
  clearMarkers();
  markers = [];
}

function clearMarkers() {
  setMapOnAll(null);
}

function setMapOnAll(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function changeColorMarker(){
    markers[0].setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
}

function updateZoom(zoom){
  map.setZoom(zoom);
}
