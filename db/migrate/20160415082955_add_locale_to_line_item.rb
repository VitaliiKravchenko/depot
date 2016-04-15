class AddLocaleToLineItem < ActiveRecord::Migration
  def change
    add_column :line_items, :locale, :string
  end
end
