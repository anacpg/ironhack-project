# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


bars = Bar.create([
  {name: 'Bar1', description:'Descr1',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.4466221, lng: -3.692459500000041, route_id: 1},
  {name: 'Bar2', description:'Descr2',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.44276659332215, lng: -3.71063232421875, route_id: 1},
  {name: 'Bar3', description:'Descr3',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.44439961890733, lng: -3.6938095092773438, route_id: 1},
  {name: 'Bar4', description:'Descr4',
  image: 'http://madrideluxe.com/wp-content/uploads/2014/07/EMG_CA_Platea_17062014_H9A6455-930x620.jpg',
  lat: 40.44694705960048, lng: -3.7009334564208984, route_id: 1}
  ])

route = Route.create([
  {name: 'Madrid Center Route', neighborhood: 'Centro', score: 5}
  ])
