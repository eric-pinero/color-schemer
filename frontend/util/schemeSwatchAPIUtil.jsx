export const createSchemeSwatch = (schemeSwatch) => (
    $.ajax({
        url: '/api/scheme_swatches',
        method: 'POST',
        data: { schemeSwatch }
    })
);

export const deleteSchemeSwatch = (schemeSwatchId) => (
    $.ajax({
        url: `api/scheme_swatches/${schemeSwatchId}`,
        method: 'DELETE',
    })
)