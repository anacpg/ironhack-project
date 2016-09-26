class Route < ApplicationRecord
  has_many :bars, dependent: :destroy

  validates :name, presence: true, uniqueness: true

end
