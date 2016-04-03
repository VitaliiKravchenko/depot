class StoreController < ApplicationController
  include CurrentCart
  before_action :set_cart

	def session_counter
		if session[:counter].nil?
  			session[:counter]=0
  		else
			 session[:counter]+=1
		end
	end


  def index
  	@products = Product.order(:title)
  	@visitings = session_counter
  end
end
