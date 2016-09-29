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
          <ul class="list-group" id="js-list-bar">
          </ul>
        </div>
      </div>
    </div>
  `
}
