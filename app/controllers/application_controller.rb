class ApplicationController < ActionController::Base
  unless Rails.env.development?
  	protect_from_forgery with: :exception
  end
end
