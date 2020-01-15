Rails.application.routes.draw do
  devise_for :users
  devise_for :userbundles
  root "messages#index"
  resources :users, only: [:edit, :update]
end
