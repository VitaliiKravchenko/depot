class StoreController < ApplicationController
  skip_before_action :authorize
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


 	  if params[:set_locale]
     redirect_to store_url(locale: params[:set_locale])
     @products = Product.where(locale: I18n.locale)
    else
      #@products = Product.order(:title)
      @products = Product.where(locale: I18n.locale)
        
    end
    @visitings = session_counter
  end

end
