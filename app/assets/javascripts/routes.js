document.addEventListener('DOMContentLoaded', function(){
  if (window.location.pathname == "/routes"){
    // request = new requestAPI() ;
    initShowRoutes('tetuan');

    var routeList = document.getElementById("js-route-list");
    var barList = document.getElementById("js-bar-list");

    document.getElementById("js-btn-search")
       .addEventListener('click', searchNeighborhood);

    if (routeList)  routeList.addEventListener('click', showRoutes);
    if (barList)  barList.addEventListener('click', showBar);
  }
});


function initShowRoutes(neighborhood){
  RequestsAPI.searchNeighborhoods(neighborhood).then(createMap);
  RequestsAPI.searchBars(neighborhood).then(drawMarkers);
  RequestsAPI.searchRoutes(neighborhood).then(showRoutesHtml);

  var $neighborhood = document.getElementsByClassName('neighborhoods-form')[0];
  $neighborhood.getElementsByTagName('select')[0].value = neighborhood;

}

function searchNeighborhood(event){
  event.preventDefault();
  var $neighborhood = document.getElementsByClassName('neighborhoods-form')[0];
  var neighborhood = $neighborhood.getElementsByTagName('select')[0].value;

  document.getElementById('js-bar-list').classList.add('hidden');
  document.getElementById('js-route-list').classList.add('hidden');

  initShowRoutes(neighborhood);
}

function showRoutes(event) {
  event.preventDefault();
  var route_id = event.target.getAttribute('route-id');

  deleteMarkers();
  RequestsAPI.searchBarRoute(route_id).then(drawRouteMap);
  //request.requestBarRoute(route_id);
  updateZoom(14);
}

function showBar(event) {
  event.preventDefault();
  var bar_id = event.target.getAttribute('bar-id');
  deleteMarkers();
  deletedPopyline();

  RequestsAPI.searchBar(bar_id).then(drawMarkers);
  updateZoom(16);
  // changeColorMarker();
}
