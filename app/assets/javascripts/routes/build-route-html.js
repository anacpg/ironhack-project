// function buildRouteHtml(route){
//     return '<li>\
//         <a href="#' + route.name + '" class="js-route-li" route-id="' + route.id + '">'+
//           route.name + '</a>\
//       </li>'
// }

function buildRouteHtml(route){
    return `<div class="panel panel-default js-route" id="${route.id}">
      <div class="panel-heading" role="tab" id="route-${route.id}">
      <h4 class="panel-title">
          <a class="collapsed" id="${route.id}" role="button" data-toggle="collapse" data-parent="#accordion"
          href="#collapse${route.id}" aria-expanded="false" aria-controls="collapse${route.id}">
            ${route.name} </a>
        </h4>
      </div>
      <div id="collapse${route.id}" class="panel-collapse collapse" role="tabpanel" aria-labelledby="route-${route.id}">
        <div class="panel-body" id="js-panel-${route.id}">
        </div>
      </div>
    </div>
  `
}


// <div id="collapse${route.id}" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="route-${route.id}">
//   <div class="panel-body">
//     Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//   </div>
// </div>
