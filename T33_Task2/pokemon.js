/* Requirement Statement: 
Fetch the API from: https://pokeapi.co/api/v2/pokemon/{pokemon}/
Print out the following about the Pokemon
■ Their name
■ Their weight
■ Their abilities
*/

fetch("https://pokeapi.co/api/v2/pokemon/charmander")                   // fetch keyword is a promise to get the records from external website. 
    .then(res => res.json())
    .then(result => {
        console.log(`\nName: \n${result.name}`)                         // display the results in the desired formet
        console.log(`\nWeight: \n${result.weight}`)
        console.log("\nAbilities: ")
        console.log(result.abilities)                                   // using Template Literals was displaying list of object, thus printing separately
    }),
    (error) => {
        console.log(error)
    }