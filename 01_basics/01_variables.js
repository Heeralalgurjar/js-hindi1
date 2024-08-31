const accountId = 144553
let accountEmail = "heeralal@gmail.com"
var accountPassord = "1234"
accountCity = "jaipur"
let accountstate

// accountId = 2 not allowed

accountEmail = "hghgh@gmail,com"
accountPassord = "159753"
accountCity = "bengaluru"
console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountPassord, accountCity, accountstate])