class SchemeSwatch < ApplicationRecord
    validates :color_id, :scheme_id, presence: true

    has_one :color
    belongs_to :scheme

    def complement
        color.complement
    end

end
  
