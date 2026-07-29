const sessionidtouserMap =  new Map();


 function isAuthenticated(id , user) {
    sessionidtouserMap.set(id , user );
}
function getUser(id) {
    return sessionidtouserMap.get(id);
}
module.exports = { isAuthenticated , getUser };
