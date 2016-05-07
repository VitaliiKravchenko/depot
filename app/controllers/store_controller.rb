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
    @visitings = session_counter
    #@sections = Product.all_sections
    #@products = Product.select(params[:section])
    
    #@sections = Product.find_by_sql("SELECT section FROM products GROUP BY section").map &:section
    #@products = params[:section].blank? ? Product.all : Product.find_all_by_section(params[:section])
    
 	  if params[:set_locale]
     redirect_to store_url(locale: params[:set_locale])
     @products = Product.where(locale: I18n.locale) 
     else
       @products = Product.where(locale: I18n.locale)
    end
  end
  #def product_params
  #   params.require(:product).permit(:section)
  #end
end
