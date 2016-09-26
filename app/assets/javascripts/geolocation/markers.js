function drawMarkers(path){
  bounds = new google.maps.LatLngBounds();
  console.log('bounds', bounds);
  path.map(function (position){
    var myLatLng = new google.maps.LatLng(position['lat'],position['lng']);
    createMarker(myLatLng);
  })

  if (path.length > 0)  map.setCenter(bounds.getCenter());
}



function createMarker(myLatLng) {
  map.setCenter();
  bounds.extend( myLatLng);
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
  //add markers to markers array
  markers.push(marker);
  marker.setMap(map);
  setAnimationMarker(marker);
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



function setAnimationMarker(marker) {

  var responseURL;
  if (event != undefined) responseURL = event.target['responseURL'];

  if (responseURL != undefined && responseURL.split('/')[4] === "routes"){
    marker.setAnimation(null);
  }else {
    marker.setAnimation(google.maps.Animation.DROP);
  }
}
