class StoreController < ApplicationController
  def index
  	@products = Product.order(:title)

  	if session[:counter].nil?
  		@visitings=1
  	else
		@visitings = session[:counter]
	end
  end
end
