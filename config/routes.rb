Rails.application.routes.draw do
  get '/example', to: 'example#index', constraints: -> { Rails.env.development? }
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root "example#index"
end
