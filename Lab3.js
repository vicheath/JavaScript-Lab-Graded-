// R-ALAB 308.4.1: Working with Data Collections

// Objectives
// Use arrays to store ordered lists of data.
// Use objects to store keyed lists of data.
// Use conditional logic to process data.
// Use loops to handle repetitive tasks.
// Transform data according to specifications.


// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

// let cell = [
//     ["ID", "Name", "Occupation", "Age"], 
//     [42, "Bruce", "Knight", 41],
//     [57, "Bob", "Fry Cook", 19],
//     [63, "Blaine", "Quiz Master", 58],
//     [98, "Bill", "Doctors Assistant", 26],
// ]
// // cell.length = 5

// for (let i = 1; i < cell.length; 
//     i++)
// {console.log(cell[i])}
// // [ 42, 'Bruce', 'Knight', 41 ]
// // [ 57, 'Bob', 'Fry Cook', 19 ]
// // [ 63, 'Blaine', 'Quiz Master', 58 ]
// // [ 98, 'Bill', 'Doctors Assistant', 26 ]


const csvData1 = `ID,Name,Occupation,Age
42,Bruce,Knight,41
57,Bob,Fry Cook,19
63,Blaine,Quiz Master,58
98,Bill,Doctors Assistant,26`;

// Part 2
const rowsPart2 = csvData1.split('\n');
const headersPart2 = rowsPart2[0].split(',');
const dataArrayPart2 = [];

for (let i = 1; i < rowsPart2.length; i++) {
  const valuesPart2 = rowsPart2[i].split(',');
  const rowObjectPart2 = {};
  headersPart2.forEach((header, index) => {
    rowObjectPart2[header] = valuesPart2[index];
  });
  dataArrayPart2.push(Object.values(rowObjectPart2));
}

dataArrayPart2.unshift(headersPart2);
console.log("Part 2:");
console.log(dataArrayPart2);

// Part 3
const rowsPart3 = csvData1.split('\n');
const headersPart3 = rowsPart3[0].split(',').map(header => header.toLowerCase());
const dataObjectsArrayPart3 = [];

for (let i = 1; i < rowsPart3.length; i++) {
  const valuesPart3 = rowsPart3[i].split(',');
  const rowObjectPart3 = {};
  headersPart3.forEach((header, index) => {
    rowObjectPart3[header] = valuesPart3[index];
  });
  dataObjectsArrayPart3.push(rowObjectPart3);
}

console.log("\nPart 3:");
console.log(dataObjectsArrayPart3);

// Part 4
const dataObjectsArrayPart4 = [...dataObjectsArrayPart3];
dataObjectsArrayPart4.pop();
const newObjectAtIndex1Part4 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
dataObjectsArrayPart4.splice(1, 0, newObjectAtIndex1Part4);
const newObjectAtEndPart4 = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
dataObjectsArrayPart4.push(newObjectAtEndPart4);
console.log("\nPart 4:");
console.log(dataObjectsArrayPart4);

// Part 5 - Output as JSON
const jsonDataPart5 = JSON.stringify(dataObjectsArrayPart4, null, 2);
console.log("\nPart 5 - JSON Output:");
console.log(jsonDataPart5);

// Log the resulting CSV and JSON strings
console.log("\nPart 5 - CSV Output:");
const headersPart5 = Object.keys(dataObjectsArrayPart4[0]);
const csvLinesPart5 = [headersPart5.join(',')];

dataObjectsArrayPart4.forEach((obj) => {
  const valuesPart5 = headersPart5.map(header => obj[header]);
  const csvLinePart5 = valuesPart5.join(',');
  csvLinesPart5.push(csvLinePart5);
});

const csvStringPart5 = csvLinesPart5.join('\n');
console.log(csvStringPart5);
