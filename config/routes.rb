Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "logs#index"

  resources :logs

  namespace :api do
    resources :logs, only: %i[show create]
  end
end
