function buildRouteHtml(route){
    return '<li>\
        <a href="#' + route.name + '" id-route="' + route.id + '">'+
          route.name + '</a>\
      </li>'
}
