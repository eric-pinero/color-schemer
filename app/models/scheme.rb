class Scheme < ApplicationRecord
    validates :title, :owner_id, presence: true

    has_many :scheme_swatches

    belongs_to :user,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: :User

    def self.id_search(id)
        num = id.to_i()
        @schemes = Scheme.where(
            "owner_id = :query", query: num
        )
    end
end
