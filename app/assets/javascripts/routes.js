document.addEventListener('DOMContentLoaded', function(){
  if (window.location.pathname == "/routes"){

    initShowRoutes('tetuán');
    document.getElementById("js-btn-search")
       .addEventListener('click', searchNeighborhood);


  }
});



function initShowRoutes(neighborhood){
  var neig_capitalize = neighborhood.charAt(0).toUpperCase() + neighborhood.slice(1);
  document.getElementById('js-h-route').innerText = `${neig_capitalize} routes`;
  RequestsAPI.searchNeighborhoods(neighborhood).then(createMap);
  RequestsAPI.searchBars(neighborhood).then(drawMarkers);
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

  document.getElementsByClassName('alert-warning')[0]
     .classList.add('hidden');

  initShowRoutes(neighborhood);
}

function showRoutes(event) {
  event.preventDefault();

  var route_id = event.target.getAttribute('id');
  console.log('route_id',route_id);
  deleteMarkers();
  RequestsAPI.searchBarRoute(route_id).then(drawRouteMap);
  var bars_html = event.currentTarget.getElementsByTagName('li');

  for(var i=0; i<bars_html.legth; i++){
    bars[html].addListener('click', showBar);
  }
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
