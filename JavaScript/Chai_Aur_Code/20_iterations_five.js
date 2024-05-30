const programming = ['JavaScript', 'Python', 'Ruby', 'C#']

programming.forEach((value, index, arr) => {   // forEach loop is used to iterate over the array elements
    //console.log(`Index: ${index} Value: ${value} Array: ${arr}`);   // Index: 0 Value: JavaScript Array: JavaScript,Python,Ruby,C#
})


const myCoding =
[
    {
        languageName: 'JavaScript',
        languageFileName: 'js'
    },
    {
        languageName: 'Python',
        languageFileName: 'py'
    },
    {
        languageName: 'Ruby',
        languageFileName: 'rb'
    },
    {
        languageName: 'C#',
        languageFileName: 'cs'
    }
]

myCoding.forEach((value, index, arr) => {
    console.log(`Index: ${index} Value: ${value.languageName} `);   // Index: 0 Value: JavaScript
})
