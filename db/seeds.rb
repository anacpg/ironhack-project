# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


neighborhoods = Neighborhood.create([
  {name: 'hortaleza', lat: 40.4693874,lng: -3.6424985999999},
  {name: 'chamartín', lat:40.4615174, lng:-3.686584400000015},
  {name: 'cdad. lineal', lat:40.4456678, lng: -3.6543844000000263},
  {name: 'barajas', lat:40.4653704, lng:-3.5951517999999396},
  {name: 'san blas-canillejas', lat:40.4321838, lng:-3.627880399999981},
  {name: 'moratalaz', lat:40.4072203, lng:-3.6570054999999684},
  {name: 'vicálvaro', lat:40.3940279, lng:-3.602876100000003},
  {name: 'puente de vallecas', lat:40.3870042,lng:-3.6695333999999775},
  {name: 'casco histórico de vallecas', lat:40.3669555, lng:-3.6060640000000603},
  {name: 'villaverde', lat:40.3469109, lng:-3.7107845000000452},
  {name: 'usera', lat:40.3825927, lng:-3.709874799999966},
  {name: 'arganzuela', lat:40.398897, lng:-3.710222700000031},
  {name: 'retiro', lat:40.4113349, lng:-3.6749081000000388},
  {name: 'salamanca', lat:40.4279488, lng:-3.686749999999961},
  {name: 'tetuán', lat:40.45883510000001, lng:-3.69782639999994},
  {name: 'chamberí', lat:40.4344286, lng:-3.7131782000000157},
  {name: 'centro', lat: 40.4115165, lng:-3.707644500000015},
  {name: 'moncloa - aravaca', lat:40.4417819, lng:-3.7536662999999635},
  {name: 'carabanchel', lat:40.3778181, lng:-3.751231700000062},
  {name: 'latina', lat:41.4675671, lng:12.903596500000049}
  ])

route = Route.create([
    {name: 'Madrid Route', score: 5},
    {name: 'Route 2', score: 5}
    ])

bars = Bar.create([
  {name: 'Bar1', description:'Descr1',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.4466221, lng: -3.692459500000041, route_id: 1, neighborhood_id: 16},
  {name: 'Bar2', description:'Descr2',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.44276659332215, lng: -3.71063232421875, route_id: 1, neighborhood_id: 16},
  {name: 'Bar3', description:'Descr3',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.44439961890733, lng: -3.6938095092773438, route_id: 1, neighborhood_id: 15},
  {name: 'Bar4', description:'Descr4',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.44694705960048, lng: -3.7009334564208984, route_id: 1, neighborhood_id: 16},
  {name: 'Bar5', description:'Descr5',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.44694705960048, lng: -3.708057403564453, route_id: 2, neighborhood_id: 16},
  {name: 'Bar6', description:'Descr6',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.441133528064015, lng: -3.700590133666992, route_id: 2, neighborhood_id: 16},
  {name: 'Bar7', description:'Descr7',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.444007696385064, lng: -3.6928653717041016, route_id: 2, neighborhood_id: 16}
  ])


#
