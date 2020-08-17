@colors.each do |color|
    json.set! color.id do
        json.partial! 'color', color: color
    end
end