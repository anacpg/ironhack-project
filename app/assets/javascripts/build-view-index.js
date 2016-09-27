function showRoutesHtml(routes){
  var html = '';
  // var routesSection = document.getElementById('js-route-list');
  var routesSection = document.getElementById('accordion');

  if (routes.length === 0){
    routesSection.classList.add('hidden');
  }else{
    routesSection.classList.remove('hidden');
    html = buildRouteListHtml(routes);
  }
  routesSection.innerHTML = html;
  // routesSection.insertAdjacentHTML('beforeend', html);
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

  drawMarkers(response);
  drawRoute(path);
  showBarsHTML(response);
}

function showBarsHTML(bars){
  var html = '';
  var route = `js-panel-${bars[0]['route_id']}`;
  var barsSection = document.getElementById(route);

  // barsSection.classList.remove('hidden');
  if (bars.length === 0){
    console.log('No hay bares');
  }else{
    html = buildBarListHtml(bars);
  }
  // barsSection.insertAdjacentHTML('beforeend', html);
  barsSection.innerHTML = html;
}
