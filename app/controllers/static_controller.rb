class StaticController < ApplicationController
  skip_before_action :authorize
  include CurrentCart
  before_action :set_cart
  
  def contact
  end

  def about
  end
end
