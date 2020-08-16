json.scheme do 
    json.partial! 'api/schemes/scheme', scheme: @scheme
end

json.scheme_swatches do
    json.partial! 'api/scheme_swatches/scheme_swatch', scheme_swatches: scheme.scheme_swatches 
end
