module ApplicationHelper
	def hidden_div_if(condition, attributes = {}, &block)
 		if condition
 			attributes["style"] = "display: none"
 		end
 		content_tag("div", attributes, &block)
	end
	
	def show_div_if(condition, attributes = {}, &block)
    if condition == false
      attributes["style"] = "display: none"
    end
    content_tag("div", attributes, &block)
  end
end
