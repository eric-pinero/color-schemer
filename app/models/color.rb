class Color < ApplicationRecord
    validates :complement_id, :name, :red, :green, :blue, presence: true

    belongs_to :scheme_swatch
    def complement
        Color.find(complement_id)
    end

end
  
