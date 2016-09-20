Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/', to: 'routes#index'

  namespace :api do
    get '/routes/:neighborhood', to: 'routes#index'
    resources :routes do
      resources :bars
    end
  end
end
