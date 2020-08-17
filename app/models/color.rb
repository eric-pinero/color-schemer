class Color < ApplicationRecord
    validates :complement_id, :name, :red, :green, :blue, presence: true

    def complement
        complement = Color.find(complement_id)
        {
            "id" => complement_id,
            "rgb" => complement.rgb,
            "name" => complement.name
        }
    end
    
    def rgb
        [red, green, blue]
    end

end
  
