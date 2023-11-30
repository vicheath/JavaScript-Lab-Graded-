// R-ALAB 308.4.1: Working with Data Collections

// Objectives
// Use arrays to store ordered lists of data.
// Use objects to store keyed lists of data.
// Use conditional logic to process data.
// Use loops to handle repetitive tasks.
// Transform data according to specifications.


// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

let cell = [
    ["ID", "Name", "Occupation", "Age"], 
    [42, "Bruce", "Knight", 41],
    [57, "Bob", "Fry Cook", 19],
    [63, "Blaine", "Quiz Master", 58],
    [98, "Bill", "Doctors Assistant", 26],
]
// cell.length = 5

for (let i = 1; i < cell.length; 
    i++)
{console.log(cell[i])}

