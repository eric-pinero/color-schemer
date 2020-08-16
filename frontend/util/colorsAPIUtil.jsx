export const fetchColors = () =>{
    $.ajax({ 
            method:'GET',
            url: '/api/colors',
    })
}