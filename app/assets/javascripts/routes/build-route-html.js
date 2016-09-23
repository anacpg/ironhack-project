function buildRouteHtml(route){
    return '<li>\
        <a href="#' + route.name + '" class="js-route-li" route-id="' + route.id + '">'+
          route.name + '</a>\
      </li>'
}
