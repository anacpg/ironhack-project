document.addEventListener('DOMContentLoaded', function(){
  if (window.location.pathname == "/routes"){
    request = new requestAPI() ;
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
  request.requestNeighborhoods(neighborhood);
  request.requestBars(neighborhood);
  request.requestRoutes(neighborhood);

  var $neighborhood = document.getElementsByClassName('neighborhoods-form')[0];
  $neighborhood.getElementsByTagName('select')[0].value = neighborhood

}

function searchNeighborhood(event){
  event.preventDefault();
  console.log('event',event);

  neighborhood = $('.neighborhoods-form').children('select').val();

  $('#js-bar-list').addClass('hidden');
  $('#js-route-list').addClass('hidden');
  initShowRoutes(neighborhood)
}

// document.getElementById("div1")
//   .classList.add("otherclass");

function showRoutes(event) {
  route_id = $(event.target).attr('route-id');
  event.preventDefault();
  deleteMarkers();

  request.requestBarRoute(route_id);
  updateZoom(14);

}

function showBar(event) {
  bar_id = $(event.target).attr('bar-id');
  event.preventDefault();
  deleteMarkers();
  deletedPopyline();

  request.requestBar(bar_id);
  updateZoom(16);
  // changeColorMarker();

}
