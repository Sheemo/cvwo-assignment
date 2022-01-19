Rails.application.routes.draw do
  root to: 'whiteboard#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :tasks
  end
end
