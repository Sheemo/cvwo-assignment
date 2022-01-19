class Task < ApplicationRecord
  validates :TaskId, presence: true
  validates :Name, presence: true
  validates :Description, presence: true
end
