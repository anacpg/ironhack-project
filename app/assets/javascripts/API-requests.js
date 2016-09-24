// function requestAPI(){
//
//   this.requestNeighborhoods = function(neighborhood){
//     var request = $.ajax({
//       url: '/api/neighborhoods/' + neighborhood,
//       type: 'GET',
//       success: createMap,
//       error: showError
//     });
//   }
//
//   this.requestRoutes = function (neighborhood){
//     var neighborhood = $.ajax({
//       url: '/api/neighborhoods/' + neighborhood + '/routes',
//       type: 'GET',
//       success: showRoutesHtml,
//       error: showError
//     });
//   }
//
//   this.requestBars = function (neighborhood){
//     var request = $.ajax({
//       url: '/api/neighborhoods/' + neighborhood + '/bars',
//       type: 'GET',
//       success: drawMarkers,
//       error: showError
//     });
//   }
//
//   this.requestBarRoute = function(route_id){
//
//     var bar = $.ajax({
//       url: '/api/routes/' + route_id + '/bars',
//       type: 'GET',
//       success: drawRouteMap,
//     });
//
//   }
//
//   this.requestBar = function(bar_id){
//     var bar = $.ajax({
//       url: '/api/bars/' + bar_id,
//       type: 'GET',
//       success: drawMarkers,
//     });
//
//
//   }
//
// }
//
// // Mundua.searchNomadList().then((response)=>{
// //
// // })
