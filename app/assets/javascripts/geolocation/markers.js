var image = 'http://res.cloudinary.com/divgxbjh0/image/upload/v1474994252/map-marker-icon_mb3lxb.ico'

function drawMarkers(path){
  bounds = new google.maps.LatLngBounds();
  path.map(function (bar){
    var myLatLng = new google.maps.LatLng(bar['lat'],bar['lng']);
    createMarker(myLatLng, bar);
  })

  if (path.length > 0)  map.setCenter(bounds.getCenter());
}



function createMarker(myLatLng, bar) {
  window.map.setCenter();
  var id;
  bar ? id = String(bar.id) : id = '1';

  bounds.extend( myLatLng);
  var icon = {
    url: image,
    scaledSize: new google.maps.Size(40, 40)
  }

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: id,
    icon: icon
  });

  if (bar) createInfoWindow(marker, bar);


  //add markers to markers array
  markers.push(marker);
  marker.setMap(map);
  setAnimationMarker(marker);
}

function createInfoWindow(marker, bar) {
  var contentString = `<h5> ${bar.name} </h5>
      <p> ${bar.description} </p>
      <img src="${bar.image}" style="width:100px" alt="">`;
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
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
