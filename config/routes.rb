RaGeNet::Application.routes.draw do
  resources :posts

  root 'website#website'

end
