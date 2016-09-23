class Route < ApplicationRecord
  has_many :bars

  validates :name, presence: true, uniqueness: true

end
