let a = 300;
if(true)
{
    let a = 100;
    //console.log(a);
    console.log("Inside Block: ", a);
}

function one()
{
    const userName = "Stark";

    function two()
    {
        const website = "www.stark.com";
        console.log("Inside two: ", userName);
    }

    // console.log("Inside one: ", website); 
    two();            // ReferenceError: website is not defined
}

if(true)
{
    const username = "Thor";
    if(username === "Thor")
    {
        const email = "www.thor.com";
    }  
}


// **** intersting ****

console.log(addOne(5));

function addOne(num)
{
    return num + 1;
}

// console.log(addTwo(5));  // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo = function(num)    // Function Expression
{
    return num + 2;
}
