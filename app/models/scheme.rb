class Scheme < ApplicationRecord
    validates :title, :owner_id, presence: true

    has_many :scheme_swatches
    belongs_to :scheme

end
