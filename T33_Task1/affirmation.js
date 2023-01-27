/* Requirement Statement: Use an API call that sends words of affirmation  
Fetch the API from https://www.affirmations.dev/
Console outputs a random line for words of affirmation.
*/

fetch("https://www.affirmations.dev0/")              // fetch keyword is a promise to get the records from external website.  
    .then(res => {
        console.log(res.status); // Will show you the status
        console.log(res.statusText); // Will show you the status
        if (!res.ok) {
            throw new Error("HTTP status " + response.status);              // creating Error() object
        }
        return res.json()
    })
    .then(result => {
        console.log(result)                         // display the results in the desired formet 
    })
    .catch(error => {
        console.log(`Error is: ${error.name}: ${error.message}: ${error.cause} \n${error.stack}`)    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
    })


// async function fetchText() {
//     let response = await fetch('url.php'); console.log(response.status);
//     // 200     console.log(response.statusText); // OK
//     if (response.status === 200) { let data = await response.text(); console.log(data); }
// }