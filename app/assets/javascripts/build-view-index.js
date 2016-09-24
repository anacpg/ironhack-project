function showRoutesHtml(routes){
  var html = '';
  var routesSection = document.getElementById('js-route-list');

  if (routes.length === 0){
    routesSection.classList.add('hidden');
  }else{
    routesSection.classList.remove('hidden');
    html = buildRouteListHtml(routes);
  }
  routesSection.insertAdjacentHTML('beforeend', html);
  //$routesSection.append(html);
}

function showError(err){
    console.log(err);
}

function drawRouteMap(response){
  var path = []
  for(var i=0,  length = response.length; i<length; i++){
    path.push({lat: parseFloat(response[i]['lat']), lng: parseFloat(response[i]['lng'] )})
  }

  drawMarkers(path);
  drawRoute(path);
  showBarsHTML(response);
}

function showBarsHTML(bars){
  var html = '';
  var barsSection = document.getElementById('js-bar-list');

  barsSection.classList.remove('hidden');

  if (bars.length === 0){
    console.log('No hay bares');
  }else{
    html = buildBarListHtml(bars);
  }
  barsSection.insertAdjacentHTML('beforeend', html);
}
