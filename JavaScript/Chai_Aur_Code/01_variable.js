const accountId = 6412;
let accountEmail = "6412@edu.bd";
var accountPassword = "123456";

accountCity = "Dhaka";

// aacountId = 6413 is not allowed for const variable

accountEmail = "6512@edu.bd";
accountPassword = "654321";
accountCity = "Chittagong";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
