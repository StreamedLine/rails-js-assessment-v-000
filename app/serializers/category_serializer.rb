class CategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :updated_at
  has_many :tags
  has_many :items
end