Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json}   do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :colors, only: [:create, :show, :destroy]
    resources :schemes, only: [:create, :show, :update, :destroy]
    resources :scheme_swatches, only: [:create, :show, :update, :destroy]
  end
end
