function showRoutesHtml(routes){
  var $routesSection = $('#js-route-list');
  var html

  if (routes.length === 0){
    $routesSection.addClass('hidden')
  }else{
    $routesSection.removeClass('hidden')
    html = buildRouteListHtml(routes);
  }
  $routesSection.append(html);
}

function showError(err){
    console.log(err);
}

function drawRouteMap(response){
  var path = []
  console.log('drawRouteMap',response);
  for(var i=0,  length = response.length; i<length; i++){
    path.push({lat: parseFloat(response[i]['lat']), lng: parseFloat(response[i]['lng'] )})
  }

  drawMarkers(path);
  drawRoute(path);
  showBarsHTML(response);
}


function showBarsHTML(bars){
  var $barsSection = $('#js-bar-list');
  $barsSection.removeClass('hidden')
  var html

  if (bars.length === 0){
    console.log('No hay bares');
  }else{
    html = buildBarListHtml(bars);
  }
  $barsSection.append(html);
  //console.log($($('.js-bar-img')[0]).attr('src', 'images/bar1.jpg'));
  // $('.js-bar-img')[0].attr('src', '/images/bar1.jpg')
}
