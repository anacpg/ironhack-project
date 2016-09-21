function requestAPI(neighborhood){
  this.neighborhood = neighborhood

  this.requestNeighborhoods = function(){
    var neighborhood = $.ajax({
      url: '/api/neighborhoods/' + this.neighborhood,
      type: 'GET',
      success: createMap,
      error: showError
    });
  }

  this.requestRoutes = function (){
    var neighborhood = $.ajax({
      url: '/api/neighborhoods/' + this.neighborhood + '/routes',
      type: 'GET',
      success: showRoutesHtml,
      error: showError
    });
  }

  this.requestBars = function (){
    var neighborhood = $.ajax({
      url: '/api/neighborhoods/' + this.neighborhood + '/bars',
      type: 'GET',
      success: drawMarkers,
      error: showError
    });
  }
}


function createMap(neighborhood){
  var position = {lat: parseFloat(neighborhood.lat), lng: parseFloat(neighborhood.lng)}
  buildMap(position)

}

function showRoutesHtml(routes){
  var $routesSection = $('#js-route-list');
  
  console.log('estoy aqui');
  var html
  console.log('routes', routes);

  if (routes.length === 0){
    console.log('No hay rutas');
  }else{
    html = buildRouteListHtml(routes);
  }
  $routesSection.append(html);
}

function showError(err){
    console.log(err);
}
