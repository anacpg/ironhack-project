document.addEventListener('DOMContentLoaded', function(){
  if (window.location.pathname == "/routes"){
    // request = new requestAPI() ;
    initShowRoutes('tetuán');

    var routeList = document.getElementsByClassName("js-route-list")[0];
    var barList = document.getElementById("js-bar-list");

    document.getElementById("js-btn-search")
       .addEventListener('click', searchNeighborhood);

    if (routeList)  routeList.addEventListener('click', showRoutes);
    if (barList)  barList.addEventListener('click', showBar);
    //
    // document.getElementsByClassName('button_to')[0]
    //     .setAttribute('action', '/routes/new');


  }
});



function initShowRoutes(neighborhood){
  var neig_capitalize = neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1);
  document.getElementById('js-h-route').innerText = `${neig_capitalize} routes`;
  RequestsAPI.searchNeighborhoods(neighborhood).then(createMap);
  var respuesta = RequestsAPI.searchBars(neighborhood).then(drawMarkers);
  RequestsAPI.searchRoutes(neighborhood).then(showRoutesHtml);

  var $neighborhood = document.getElementsByClassName('neighborhoods-form')[0];
  $neighborhood.value = neighborhood;
}

function searchNeighborhood(event){
  event.preventDefault();
  var $neighborhood = document.getElementsByClassName('neighborhoods-form')[0];
  var neighborhood = $neighborhood.value;

  document.getElementById('js-bar-list').classList.add('hidden');
  document.getElementById('js-route-list').classList.add('hidden');

  initShowRoutes(neighborhood);
}

function showRoutes(event) {
  event.preventDefault();
  var route_id = event.target.getAttribute('id');
  console.log('showRoutes route_id', route_id);

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
