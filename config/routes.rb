Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/routes', to: 'routes#index'
  get '/', to: 'routes#home'
  get '/routes/new', to: 'routes#new'


  namespace :api do
    # get '/routes/:neighborhood', to: 'routes#index'
    get '/neighborhoods/:name', to: 'neighborhoods#show'
    get '/neighborhoods/:neighborhood/routes', to: 'routes#index'
    get '/neighborhoods/:neighborhood/bars', to: 'bars#index'
    post '/routes/create', to: 'routes#create'
    get '/routes/:id/bars', to: 'bars#bars_route'
    post '/routes/:id/bars/create', to: 'bars#create'
    get 'bars/:id', to: 'bars#show'
    # resources :routes do
    #   resources :bars
    # end
  end
end
