export const fetchColors = () => {
    return($.ajax({ 
        method:'GET',
        url: '/api/colors'
    }))
}