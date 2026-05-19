const accountId = 55555
let accountEmail = "saroj@erastra.com"
var accountPassword = "12456"
accountCity = "Kathmandu"
let accountState;


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])