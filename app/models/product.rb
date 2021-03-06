class Product < ActiveRecord::Base
 ## dragonfly_accessor :image
 # attr_accesible :title, :image, :image_cache
  #mount_uploader :image, ImageUploader
  #attr_accessible :image_id
  mount_uploader :image_id, ImageIdUploader
	has_many :line_items
	has_many :orders, through: :line_items
	before_destroy :ensure_not_referenced_by_any_line_item
	#validates :title, :description, :image, :section, presence: true
	validates :price, numericality: {greater_than_or_equal_to: 0.01}
	validates :title, uniqueness: true
	#validates :image_uid, uniqueness: true
  #validates :image_uid, allow_blank: true, format: {
  #                             		with: %r{\.(gif|jpg|png)\Z}i,	
  #                             		message: 'Зображення має бути формату GIF, JPG або PNG'
  #                             			}
  #validates_size_of :image, maximum: 7000.kilobytes,
 #                 message: "розмір не має перевищувати 7000 KB", if: :image_changed?
  #validates_property :format, of: :image, in: [:jpeg, :jpg, :png, :bmp], case_sensitive: false,
   #                message: "має бути формату .jpeg, .jpg, .png, .bmp", if: :image_changed?
#
	def self.latest
		Product.order(:updated_at).last
	end
	
	def self.filter(filter)
    if filter
       where(section: filter)
    end
  end
	
#	def self.all_sections
#    find_by_sql("SELECT section FROM products GROUP BY section").map(&:section).select {|x| x}
#  end

#  def self.select(section)
#    if section
#      find_all_by_section(section)
#    else
#      find :all
#    end
#  end

	private

	def ensure_not_referenced_by_any_line_item
		if line_items.empty?
			return true
		else
			errors.add(:base, 'существуют товарные позиции')
			return false
		end
	end

end
