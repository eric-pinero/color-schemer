export default function correctUserCheck(currentUser, comparedId){
    if(!currentUser || currentUser.id != comparedId) return false
}