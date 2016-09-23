
const RequestsAPI = () => {
  const URL_API = '/api/';

  _searchNeighborhoods = (neighborhood) => {
    let query = URL_API + 'neighborhoods/'+ neighborhood;
    return _proxy('GET', query, 'json' );
  };

  _searchRoutes = (neighborhood) => {
    let query = URL_API + 'neighborhoods/' + neighborhood + '/routes';
    return _proxy('GET', query, 'json' );
  }

  _searchBars = (neighborhood) => {
    let query = URL_API + 'routes/' + neighborhood + '/bars';
    return _proxy('GET', query, 'json' );
  }

  _searchBarRoute = (route_id) => {
    let query = URL_API + 'neighborhoods/' + route_id + '/bars';
    return _proxy('GET', query, 'json' );
  }


  _proxy = (method, url, responseType, params) => {
    return new Promise(function(resolve, reject) {
      let xhr = new XMLHttpRequest();

      xhr.open(method, url);
      xhr.withCredentials = false;
      xhr.responseType = responseType;

      xhr.onload = () => {
        if (xhr.status === 200){
          resolve(xhr.response);
        } else {
          reject(console.log(xhr.statusText));
        }
      };

      xhr.onerror = () => {
        reject(console.log('Error'));
      }

      xhr.send(params);
    });
  };

  return {
    searchNeighborhoods : _searchNeighborhoods,
    searchRoutes : _searchRoutes,
    searchBars : _searchBars,
    searchBarRoute : _searchBarRoute
  }
}();
