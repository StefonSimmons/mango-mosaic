Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :posts
  resources :comments, only: :index

  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
end
