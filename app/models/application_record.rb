class ApplicationRecord < ActiveRecord::Base
  primary_abstract_class

  # Adjust default sort order when using UUID
  self.implicit_order_column = :created_at
end
