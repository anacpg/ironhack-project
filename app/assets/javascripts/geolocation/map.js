function createMap(position){
//  var position = {lat: parseFloat(area.lat), lng: parseFloat(area.lng)}
  var position = generateLocation(position)
  buildMap(position)

  function buildMap(position){

    var mapOptions =  {
      center: position,
      zoom: 14
    };

    window.map = new google.maps.Map($('#map')[0],mapOptions);
    window.markers = []
    window.flightPath

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
