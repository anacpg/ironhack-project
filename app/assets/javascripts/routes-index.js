function routesIndex(event){
  event.preventDefault();
  console.log('Estoy en RoutesIndex');


  var request = $.ajax({
    url: '/api/routes/Centro',
    type: 'GET',
    success: showRoutes
  })

  var $routesSection = $('#js-route-list');
  console.log($routesSection);

  function showError(){
    console.log('Error');
  }

  function showRoutes(routes){
    var html

    if (routes.length === 0){
      console.log('No hay rutas');
    }else{
      html = buildRouteListHtml(routes);
    }

    $routesSection.append(html);

  }
}
