const accountId = 12344
let accountEmail = "shekhae@gmail.com"
var accountPassword = "123"
accountCity = "jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "nsjjn@gmail.com"
accountPassword = "23984819"
accountCity = "bangaluru"


console.log(accountId);


/*
prefer not to use var
because of issues in block scope and functional scope

*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])