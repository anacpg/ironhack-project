//
// function buildRouteListHtml(routes){
//   var listItems = routes.reduce(function (prev, route){
//       return prev + buildRouteHtml(route);
//     }, '');
//
//   return '<ul class="js-ul-routes ul-height">' + listItems + '</ul>'
// }


function buildRouteListHtml(routes){
  return routes.reduce(function (prev, route){
      return prev + buildRouteHtml(route);
    }, '');


}
