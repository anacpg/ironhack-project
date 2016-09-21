Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'routes#index'

  namespace :api do
    # get '/routes/:neighborhood', to: 'routes#index'
    get '/neighborhoods/:name', to: 'neighborhoods#show'
    get '/neighborhoods/:neighborhood/routes', to: 'routes#index'
    get '/neighborhoods/:neighborhood/bars', to: 'bars#index'
    # resources :routes do
    #   resources :bars
    # end
  end
end
