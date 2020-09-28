export const createScheme = (scheme) => (
    $.ajax({
        url: '/api/schemes',
        method: 'POST',
        data: { scheme },
    })
);

export const deleteScheme = (schemeId) => (
    $.ajax({
        url: `api/schemes/${schemeId}`,
        method: 'DELETE',
    })
)

export const fetchUserSchemes = (userId) => (
    $.ajax({
        url: `api/schemes`,
        method: 'GET',
        data: {userId}
    })
)