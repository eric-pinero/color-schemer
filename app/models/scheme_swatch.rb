class SchemeSwatch < ApplicationRecord
    validates :color_id, :scheme_id, presence: true

    belongs_to :color
    belongs_to :scheme

    def complement
        color.complement
    end

end
  
