class AddSectionToProduct < ActiveRecord::Migration
  def change
    add_column :products, :section, :string
  end
end
