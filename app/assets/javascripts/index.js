function init(){
  var api = new requestAPI('chamberi');
  api.requestNeighborhoods();
  api.requestBars();
  api.requestRoutes();

}
