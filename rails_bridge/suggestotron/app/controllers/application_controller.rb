class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
# //makes a login page from the 'devise' gem
  before_action :authenticate_user!
end
