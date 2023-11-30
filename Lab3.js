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
const rows1 = csvData1.split('\n');
const headers1 = rows1[0].split(',');
const dataArray1 = [];

for (let i = 1; i < rows1.length; i++) {
  const values1 = rows1[i].split(',');
  const rowObject1 = {};
  headers1.forEach((header, index) => {
    rowObject1[header] = values1[index];
  });
  dataArray1.push(Object.values(rowObject1));
}

dataArray1.unshift(headers1);
console.log(dataArray1);

// Part 3
const rows2 = csvData1.split('\n');
const headers2 = rows2[0].split(',').map(header => header.toLowerCase());
const dataObjectsArray2 = [];

for (let i = 1; i < rows2.length; i++) {
  const values2 = rows2[i].split(',');
  const rowObject2 = {};
  headers2.forEach((header, index) => {
    rowObject2[header] = values2[index];
  });
  dataObjectsArray2.push(rowObject2);
}

console.log(dataObjectsArray2);

// Part 4
dataObjectsArray2.pop();
const newObjectAtIndex1 = { id: "48", name: "Barry", occupation: "Runner", age: "25" };
dataObjectsArray2.splice(1, 0, newObjectAtIndex1);
const newObjectAtEnd = { id: "7", name: "Bilbo", occupation: "None", age: "111" };
dataObjectsArray2.push(newObjectAtEnd);
console.log(dataObjectsArray2);

// Part 5
const headers5 = Object.keys(dataObjectsArray2[0]);
const csvLines5 = [headers5.join(',')];

dataObjectsArray2.forEach((obj) => {
  const values5 = headers5.map(header => obj[header]);
  const csvLine5 = values5.join(',');
  csvLines5.push(csvLine5);
});

const csvString5 = csvLines5.join('\n');
console.log(csvString5);
