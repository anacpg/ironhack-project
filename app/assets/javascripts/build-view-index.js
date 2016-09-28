function showRoutesHtml(routes){
  var html = '';
  var routesSection = document.getElementById('accordion');

  if (routes.length === 0){
    routesSection.classList.add('hidden');
  }else{
    routesSection.classList.remove('hidden');
    html = buildRouteListHtml(routes);
  }
  routesSection.innerHTML = html;
  addEventRoute();
}

function addEventRoute() {
  var divRoutes = document.getElementsByClassName('panel-heading');
  for (var i = 0; i < divRoutes.length ; i++) {
    divRoutes[i].addEventListener('click', function(){
      showRoutes(event);
    });
  }
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

  if (bars.length === 0){
    console.log('No hay bares');
  }else{
    html = buildBarListHtml(bars);
  }
  barsSection.innerHTML = html;

  addEventBar();
}

function addEventBar() {
  var panelBody = document.getElementsByClassName('panel-body');
  for (var j = 0; j < panelBody.length; j++) {
    var liBars = panelBody[j].getElementsByClassName('li-bar');
    for (var i = 0; i < liBars.length ; i++) {
      liBars[i].addEventListener('click', function(){
        showBar(event);
      });
    }
  }

}
