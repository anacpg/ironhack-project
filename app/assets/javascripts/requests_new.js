
RequestsAPI = function (){
  var URL_API = '/api/';

  _searchNeighborhoods = function(neighborhood) {
    let query = URL_API + 'neighborhoods/'+ neighborhood;
    return _proxy('GET', query, 'json' );
  };

  _searchRoutes = function(neighborhood) {
    let query = URL_API + 'neighborhoods/' + neighborhood + '/routes';
    return _proxy('GET', query, 'json' );
  }

  _searchBars = function(neighborhood) {
    let query = URL_API + 'neighborhoods/' + neighborhood + '/bars';
    return _proxy('GET', query, 'json' );
  }

  _searchBarRoute = function(route_id) {
    let query = URL_API + 'routes/' + route_id + '/bars';
    return _proxy('GET', query, 'json' );
  }

  _searchBar = function(bar_id) {
    let query = URL_API + 'bars/' + bar_id;
    return _proxy('GET', query, 'json' );
  }


  _proxy = function(method, url, responseType, params) {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.withCredentials = false;
      xhr.responseType = responseType;

      xhr.onload = function() {
        console.log('url', url);
        console.log('status',xhr.status);
        if (xhr.status === 200){
          resolve(xhr.response);
        } else {
          reject(console.log(xhr.statusText));
        }
      };

      xhr.onerror = function() {
        reject(console.log('Error'));
      }

      xhr.send(params);
    });
  };

  return {
    searchNeighborhoods : _searchNeighborhoods,
    searchRoutes : _searchRoutes,
    searchBars : _searchBars,
    searchBarRoute : _searchBarRoute,
    searchBar : _searchBar
  }
}();
