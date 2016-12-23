class Post < ActiveRecord::Base
  default_scope { order('updated_at DESC') } # sorts by updated at in reverse orderr
  has_many :comments
  belongs_to :user
 has_many :tags
has_many :categories, through: :tags
end
