function routesIndex(event){
  event.preventDefault();

  var request = $.ajax({
    url: '/api/neighborhoods/chamberi/routes',
    type: 'GET',
    success: showRoutesHtml,
    error: showError
  })

  console.log('request', request);

  var flightPlanCoordinates = [
      {lat: 40.4466221, lng: -3.692459500000041},
      {lat: 40.44276659332215, lng: -3.71063232421875},
      {lat:40.44439961890733, lng: -3.6938095092773438},
      {lat: 40.44694705960048, lng: -3.7009334564208984}
    ];

  var $routesSection = $('#js-route-list');
  console.log($routesSection);

  drawRouteMap(flightPlanCoordinates);

  function showError(){
    console.log('Error');
  }

  // function showRoutesHtml(routes){
  //   console.log('estoy aqui');
  //   var html
  //   console.log('routes', routes);
  //
  //   if (routes.length === 0){
  //     console.log('No hay rutas');
  //   }else{
  //     html = buildRouteListHtml(routes);
  //   }
  //   $routesSection.append(html);
  // }

  function drawRouteMap(positions){

    //var maps = new geolocationMaps(positions)
    drawMarkers(positions);
    //maps.drawRoute(positions);
  }
}
