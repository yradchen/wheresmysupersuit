Rails.application.routes.draw do
  root "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :marvel, only: [:index, :show]
    resource :marvel, only: [:update]
  end
end
