@schemes.each do |scheme|
    json.set! scheme.id do
      json.partial! 'scheme', scheme: scheme
    end
  end
