class Scheme < ApplicationRecord
    validates :title, :owner_id, presence: true

    has_many :scheme_swatches

    belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

    def swatch_obj
        swatch_obj = {}

        for scheme_swatch in scheme_swatches.all do 
            swatch_obj[scheme_swatch.id] = {
                color => scheme_swatch.color,
                complement => scheme_swatch.complement
            }
        end
        swatch_obj
    end

end
